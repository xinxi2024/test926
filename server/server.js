/**
 * 上商淘 · 上海商学院二手交易平台后端服务
 * 技术栈：Node.js + Express + MySQL + JWT
 *
 * 启动：
 *   1. mysql -u root -p < server/schema.sql
 *   2. cd server && npm install
 *   3. npm start   (默认监听 3000 端口)
 */
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ===== 数据库连接 =====
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'scalaspark',
  database: process.env.DB_NAME || 'shangtao',
  waitForConnections: true,
  connectionLimit: 10
});

const JWT_SECRET = process.env.JWT_SECRET || 'shangtao_secret_2026';

// ===== 中间件：JWT 鉴权 =====
function auth(req, res, next) {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!token) return res.status(401).json({ code: 401, msg: '未登录' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch (e) {
    return res.status(401).json({ code: 401, msg: '登录已过期' });
  }
}
// 审核员鉴权
function adminAuth(req, res, next) {
  auth(req, res, () => {
    if (req.user.role !== 1) return res.status(403).json({ code: 403, msg: '无审核权限' });
    next();
  });
}

// ===== 文件上传 =====
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'uploads'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// 独立图片上传接口：图片持久保存到 server/uploads/，返回可长期引用的 URL
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ code: 1, msg: '未收到文件' });
  res.json({ code: 0, msg: '上传成功', url: '/uploads/' + req.file.filename });
});

// ============================================================
// 认证模块
// ============================================================

// 发送验证码（演示：固定返回 1234）
app.post('/api/auth/send-code', async (req, res) => {
  const { phone } = req.body;
  if (!/^1\d{10}$/.test(phone || '')) {
    return res.json({ code: 1, msg: '手机号格式错误' });
  }
  // TODO: 对接短信服务商，此处演示固定验证码
  res.json({ code: 0, msg: '验证码已发送', data: { code: '1234' } });
});

// 登录 / 注册
app.post('/api/auth/login', async (req, res) => {
  const { phone, code } = req.body;
  if (!/^1\d{10}$/.test(phone || '')) {
    return res.json({ code: 1, msg: '手机号格式错误' });
  }
  if (!code || code.length < 4) {
    return res.json({ code: 1, msg: '验证码错误' });
  }

  let [rows] = await pool.query('SELECT * FROM `user` WHERE phone = ?', [phone]);
  let user;
  if (rows.length === 0) {
    // 首次登录自动注册
    const [r] = await pool.query(
      'INSERT INTO `user` (phone, password, nickname) VALUES (?,?,?)',
      [phone, '', ('上商用户' + phone.slice(-4))]
    );
    user = { id: r.insertId, role: 0, nickname: '上商用户' + phone.slice(-4) };
  } else {
    user = rows[0];
  }

  const token = jwt.sign(
    { id: user.id, phone: user.phone, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
  res.json({
    code: 0,
    msg: '登录成功',
    data: {
      token,
      user: {
        id: user.id,
        phone: user.phone,
        nickname: user.nickname,
        avatar: user.avatar,
        role: user.role
      }
    }
  });
});

// ============================================================
// 商品模块
// ============================================================

// 商品列表（分类 / 关键词 / 排序）
app.get('/api/products', async (req, res) => {
  const { category, keyword, sort } = req.query;
  const where = ["p.status = 1"];   // 仅已上架
  const params = [];
  if (category && category !== 'all') {
    where.push('p.category = ?');
    params.push(category);
  }
  if (keyword) {
    where.push('(p.title LIKE ? OR p.description LIKE ?)');
    params.push('%' + keyword + '%', '%' + keyword + '%');
  }
  let orderBy = 'p.created_at DESC';
  if (sort === 'price') orderBy = 'p.price ASC';
  if (sort === 'new') orderBy = 'p.created_at DESC';
  if (sort === 'near') orderBy = 'p.location ASC';

  const [rows] = await pool.query(
    `SELECT p.*, u.nickname AS seller_name
     FROM product p LEFT JOIN \`user\` u ON p.seller_id = u.id
     WHERE ${where.join(' AND ')} ORDER BY ${orderBy}`,
    params
  );
  res.json({ code: 0, data: rows });
});

// 商品详情
app.get('/api/products/:id', async (req, res) => {
  const [rows] = await pool.query(
    `SELECT p.*, u.nickname AS seller_name, u.avatar AS seller_avatar
     FROM product p LEFT JOIN \`user\` u ON p.seller_id = u.id
     WHERE p.id = ?`,
    [req.params.id]
  );
  if (rows.length === 0) return res.json({ code: 1, msg: '商品不存在' });
  await pool.query('UPDATE product SET view_count = view_count + 1 WHERE id = ?', [req.params.id]);
  res.json({ code: 0, data: rows[0] });
});

// 发布商品（支持 multipart 图片上传，或 JSON 直接传 cover_image URL）
app.post('/api/products/publish', auth, upload.array('images', 9), async (req, res) => {
  const { title, price, category, description, location, cover_image } = req.body;
  if (!title || !price) return res.json({ code: 1, msg: '参数不完整' });

  const images = (req.files || []).map(f => '/uploads/' + f.filename);
  const cover = images[0] || cover_image || '';
  const [r] = await pool.query(
    `INSERT INTO product
     (seller_id, category, title, description, price, cover_image, location, status)
     VALUES (?,?,?,?,?,?,?,0)`,
    [req.user.id, category || '其他', title, description || '', price,
     cover, location || '奉贤校区']
  );
  // 保存多图
  for (let i = 1; i < images.length; i++) {
    await pool.query(
      'INSERT INTO product_image (product_id, image_url, sort) VALUES (?,?,?)',
      [r.insertId, images[i], i]
    );
  }
  res.json({ code: 0, msg: '发布成功，等待审核', data: { id: r.insertId } });
});

// 我的发布列表（含全部状态）
app.get('/api/products/mine', auth, async (req, res) => {
  const [rows] = await pool.query(
    'SELECT * FROM product WHERE seller_id = ? ORDER BY created_at DESC',
    [req.user.id]
  );
  res.json({ code: 0, data: rows });
});

// 商品上下架（卖家本人）
app.post('/api/products/:id/status', auth, async (req, res) => {
  const { online } = req.body;
  const [rows] = await pool.query('SELECT * FROM product WHERE id = ?', [req.params.id]);
  if (rows.length === 0) return res.json({ code: 1, msg: '商品不存在' });
  if (rows[0].seller_id !== req.user.id) return res.json({ code: 1, msg: '无权操作' });
  // 上架=1（已上架），下架=4（已下架，仅前端语义，数据库用 2 之外的独立值会混乱，这里用 status=1/0 之外新增约定值 4）
  await pool.query('UPDATE product SET status = ? WHERE id = ?', [online ? 1 : 4, req.params.id]);
  res.json({ code: 0, msg: online ? '已上架' : '已下架' });
});

// 撤回发布（删除待审核商品）
app.delete('/api/products/:id', auth, async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM product WHERE id = ?', [req.params.id]);
  if (rows.length === 0) return res.json({ code: 1, msg: '商品不存在' });
  if (rows[0].seller_id !== req.user.id) return res.json({ code: 1, msg: '无权操作' });
  await pool.query('DELETE FROM product_image WHERE product_id = ?', [req.params.id]);
  await pool.query('DELETE FROM product WHERE id = ?', [req.params.id]);
  res.json({ code: 0, msg: '已撤回' });
});

// ============================================================
// 审核模块（审核员）
// ============================================================

// 审核列表（按状态）
app.get('/api/admin/products', adminAuth, async (req, res) => {
  const { status = 0 } = req.query;
  const [rows] = await pool.query(
    `SELECT p.*, u.nickname AS seller_name
     FROM product p LEFT JOIN \`user\` u ON p.seller_id = u.id
     WHERE p.status = ? ORDER BY p.created_at DESC`,
    [status]
  );
  res.json({ code: 0, data: rows });
});

// 审核通过 / 驳回
app.post('/api/products/:id/audit', adminAuth, async (req, res) => {
  const { approved, reason } = req.body;
  const productId = req.params.id;

  const [rows] = await pool.query('SELECT * FROM product WHERE id = ?', [productId]);
  if (rows.length === 0) return res.json({ code: 1, msg: '商品不存在' });
  const product = rows[0];

  const status = approved ? 1 : 2;
  await pool.query(
    `UPDATE product SET status = ?, reject_reason = ?, auditor_id = ?, audit_time = NOW()
     WHERE id = ?`,
    [status, approved ? '' : (reason || '不符合平台规范'), req.user.id, productId]
  );

  // 写入通知（与状态更新同一流程）
  await pool.query(
    `INSERT INTO notification (user_id, type, title, content, related_id)
     VALUES (?,?,?,?,?)`,
    [
      product.seller_id,
      approved ? 'approve' : 'reject',
      approved ? '审核通过' : '审核驳回',
      approved
        ? `您的商品「${product.title}」已通过审核，已成功上架`
        : `您的商品「${product.title}」被驳回：${reason || '不符合平台规范'}`,
      productId
    ]
  );

  res.json({ code: 0, msg: approved ? '已通过审核' : '已驳回' });
});

// ============================================================
// 订单模块
// ============================================================

// 创建订单
app.post('/api/orders/create', auth, async (req, res) => {
  const { productId, tradeType, tradePlace } = req.body;
  const [rows] = await pool.query('SELECT * FROM product WHERE id = ?', [productId]);
  if (rows.length === 0) return res.json({ code: 1, msg: '商品不存在' });
  const product = rows[0];
  if (product.status !== 1) return res.json({ code: 1, msg: '商品已不可购买' });

  const orderNo = 'ST' + Date.now() + Math.floor(Math.random() * 1000);
  const [r] = await pool.query(
    `INSERT INTO \`order\`
     (order_no, buyer_id, seller_id, product_id, price, trade_type, trade_place, status)
     VALUES (?,?,?,?,?,?,?,0)`,
    [orderNo, req.user.id, product.seller_id, productId, product.price,
     tradeType || '自提', tradePlace || '奉贤校区一食堂门口']
  );
  // 商品置为已售
  await pool.query('UPDATE product SET status = 3 WHERE id = ?', [productId]);
  // 通知买卖双方
  await pool.query(
    `INSERT INTO notification (user_id, type, title, content, related_id) VALUES (?,?,?,?,?)`,
    [product.seller_id, 'order', '新订单', `您的商品「${product.title}」有新的买家订单`, r.insertId]
  );

  res.json({ code: 0, msg: '下单成功', data: { orderNo } });
});

// 我的订单列表（买家视角）
app.get('/api/orders/mine', auth, async (req, res) => {
  const [rows] = await pool.query(
    `SELECT o.*, p.title AS product_title, p.cover_image, u.nickname AS seller_name
     FROM \`order\` o
     LEFT JOIN product p ON o.product_id = p.id
     LEFT JOIN \`user\` u ON o.seller_id = u.id
     WHERE o.buyer_id = ? ORDER BY o.created_at DESC`,
    [req.user.id]
  );
  res.json({ code: 0, data: rows });
});

// 订单状态流转：发货 / 确认收货 / 取消
app.post('/api/orders/:id/ship', auth, async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM `order` WHERE id = ?', [req.params.id]);
  if (rows.length === 0) return res.json({ code: 1, msg: '订单不存在' });
  if (rows[0].seller_id !== req.user.id) return res.json({ code: 1, msg: '仅卖家可发货' });
  await pool.query('UPDATE `order` SET status = 1 WHERE id = ?', [req.params.id]);
  await pool.query(
    'INSERT INTO notification (user_id, type, title, content, related_id) VALUES (?,?,?,?,?)',
    [rows[0].buyer_id, 'order', '卖家已发货', '您的订单已发货，请留意查收', req.params.id]
  );
  res.json({ code: 0, msg: '已发货' });
});

app.post('/api/orders/:id/receive', auth, async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM `order` WHERE id = ?', [req.params.id]);
  if (rows.length === 0) return res.json({ code: 1, msg: '订单不存在' });
  if (rows[0].buyer_id !== req.user.id) return res.json({ code: 1, msg: '仅买家可确认收货' });
  await pool.query('UPDATE `order` SET status = 2 WHERE id = ?', [req.params.id]);
  res.json({ code: 0, msg: '已确认收货' });
});

app.post('/api/orders/:id/cancel', auth, async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM `order` WHERE id = ?', [req.params.id]);
  if (rows.length === 0) return res.json({ code: 1, msg: '订单不存在' });
  if (rows[0].buyer_id !== req.user.id) return res.json({ code: 1, msg: '仅买家可取消' });
  await pool.query('UPDATE `order` SET status = 3 WHERE id = ?', [req.params.id]);
  // 商品恢复为已上架
  await pool.query('UPDATE product SET status = 1 WHERE id = ?', [rows[0].product_id]);
  res.json({ code: 0, msg: '已取消' });
});

// ============================================================
// 收藏模块
// ============================================================
app.post('/api/favorites/toggle', auth, async (req, res) => {
  const { productId } = req.body;
  const [rows] = await pool.query(
    'SELECT * FROM favorite WHERE user_id = ? AND product_id = ?',
    [req.user.id, productId]
  );
  if (rows.length > 0) {
    await pool.query('DELETE FROM favorite WHERE user_id = ? AND product_id = ?', [req.user.id, productId]);
    await pool.query('UPDATE product SET favorite_count = GREATEST(favorite_count - 1, 0) WHERE id = ?', [productId]);
    return res.json({ code: 0, msg: '已取消收藏', data: { faved: false } });
  }
  await pool.query('INSERT INTO favorite (user_id, product_id) VALUES (?,?)', [req.user.id, productId]);
  await pool.query('UPDATE product SET favorite_count = favorite_count + 1 WHERE id = ?', [productId]);
  res.json({ code: 0, msg: '已收藏', data: { faved: true } });
});

app.get('/api/favorites', auth, async (req, res) => {
  const [rows] = await pool.query(
    `SELECT p.*, u.nickname AS seller_name FROM favorite f
     JOIN product p ON f.product_id = p.id
     LEFT JOIN \`user\` u ON p.seller_id = u.id
     WHERE f.user_id = ? ORDER BY f.created_at DESC`,
    [req.user.id]
  );
  res.json({ code: 0, data: rows });
});

// ============================================================
// 用户资料模块
// ============================================================
app.post('/api/user/profile', auth, async (req, res) => {
  const { nickname, bio, avatar } = req.body;
  const updates = [];
  const params = [];
  if (nickname !== undefined) { updates.push('nickname = ?'); params.push(nickname); }
  if (bio !== undefined) { updates.push('bio = ?'); params.push(bio); }
  if (avatar !== undefined) { updates.push('avatar = ?'); params.push(avatar); }
  if (!updates.length) return res.json({ code: 1, msg: '无更新内容' });
  params.push(req.user.id);
  await pool.query(`UPDATE \`user\` SET ${updates.join(',')} WHERE id = ?`, params);
  res.json({ code: 0, msg: '资料已更新' });
});

// ============================================================
// 通知模块
// ============================================================

// 我的通知 + 未读数
app.get('/api/notifications', auth, async (req, res) => {
  const [rows] = await pool.query(
    'SELECT * FROM notification WHERE user_id = ? ORDER BY created_at DESC',
    [req.user.id]
  );
  const [cnt] = await pool.query(
    'SELECT COUNT(*) AS n FROM notification WHERE user_id = ? AND is_read = 0',
    [req.user.id]
  );
  res.json({ code: 0, data: { list: rows, unread: cnt[0].n } });
});

// 全部已读
app.post('/api/notifications/read', auth, async (req, res) => {
  await pool.query(
    'UPDATE notification SET is_read = 1 WHERE user_id = ?',
    [req.user.id]
  );
  res.json({ code: 0, msg: '已全部已读' });
});

// ============================================================
// 前端静态文件托管（使 http://localhost:3000/ 可直接访问 H5 应用）
// 放在所有 API 路由之后，不影响 /api 接口
// ============================================================
app.use(express.static(path.join(__dirname, '..')));

// ============================================================
// 健康检查 + 启动
// ============================================================
app.get('/api/health', (req, res) => res.json({ code: 0, msg: '上商淘服务运行中' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('=================================');
  console.log('  上商淘后端服务已启动');
  console.log('  地址: http://localhost:' + PORT);
  console.log('=================================');
});

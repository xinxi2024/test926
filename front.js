// ===== 数据 =====
const products = [
    { id: 1, cat: '教材', title: '高等数学上下册+习题详解 同济第七版', price: 25, img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=calculus%20textbook%20stack%20higher%20mathematics%20Chinese%20university%20clean%20desk&image_size=square', seller: '李学姐', location: '徐汇校区', views: 128, desc: '九成新，无笔记无划线，同济第七版上下册+习题详解，高数必备。' },
    { id: 2, cat: '服饰', title: 'Nike Air Force 1 纯白 42码', price: 299, img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=white%20nike%20air%20force%201%20sneakers%20minimal%20background&image_size=square', seller: '王学长', location: '奉贤校区', views: 256, desc: '穿过两次，鞋底几乎无磨损，鞋盒都在，码数不合适出。' },
    { id: 3, cat: '数码', title: 'iPad Air 4 64G WiFi 深空灰', price: 2899, img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ipad%20air%20tablet%20space%20gray%20minimal%20desk%20product%20photo&image_size=square', seller: '陈同学', location: '徐汇校区', views: 512, desc: '2022年购入，原装充电器，无拆无修，电池健康92%。' },
    { id: 4, cat: '生活', title: '小米台灯 Pro 智能调光', price: 89, img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=xiaomi%20desk%20lamp%20white%20minimal%20modern%20warm%20light&image_size=square', seller: '刘学姐', location: '奉贤校区', views: 89, desc: '毕业出，功能完好，三档色温可调，护眼学习必备。' },
    { id: 5, cat: '教材', title: '大学英语四级真题+词汇 全套', price: 35, img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=english%20cet4%20exam%20books%20vocabulary%20stack%20study&image_size=square', seller: '赵学姐', location: '徐汇校区', views: 167, desc: '四级已过，真题卷+词汇书打包出，部分有笔记。' },
    { id: 6, cat: '服饰', title: '优衣库羽绒服 男款 M码 黑色', price: 159, img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=uniqlo%20black%20down%20jacket%20men%20minimal%20flatlay&image_size=square', seller: '孙学长', location: '奉贤校区', views: 203, desc: '去年冬天购入，只穿过几次，蓬松度好，保暖轻便。' },
    { id: 7, cat: '数码', title: '罗技 MX Master 3 鼠标 黑色', price: 329, img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=logitech%20mx%20master%203%20mouse%20black%20product%20photo&image_size=square', seller: '周同学', location: '徐汇校区', views: 178, desc: '办公神器，自定义按键，滚轮丝滑，箱说全。' },
    { id: 8, cat: '生活', title: '北欧风小台灯+绿植组合', price: 49, img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=nordic%20style%20desk%20lamp%20small%20plant%20cozy%20room&image_size=square', seller: '吴学姐', location: '奉贤校区', views: 92, desc: '宿舍装饰好物，台灯暖光，植物含盆，打包出。' },
];

const posts = [
    { name: '林小夏', tag: '毕业生', time: '10分钟前', campus: '奉贤校区', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20female%20college%20student%20smiling%20headshot&image_size=square', cat: 'all', price: 120, imgs: ['https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=warm%20desk%20lamp%20cozy%20dorm%20room%20night&image_size=square', 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=clear%20plastic%20storage%20boxes%20organized%20stack&image_size=square', 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=small%20wooden%20bookshelf%20with%20books%20minimal&image_size=square'], text: '大四毕业啦！整理出一些陪伴四年的好物，希望学弟学妹们能继续善待它们 ✨ 台灯、收纳盒、书架都是九成新，价格好商量，支持自提～', likes: 128, comments: 23, tags: [] },
    { name: '张明远', tag: '商学院', time: '32分钟前', campus: '徐汇校区', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20male%20college%20student%20glasses%20headshot&image_size=square', cat: '教材', price: 80, imgs: ['https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=stack%20of%20economics%20finance%20textbooks%20notes%20desk&image_size=square', 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=open%20textbook%20with%20highlighted%20notes%20math%20formulas&image_size=square'], text: '出大三金融学全套教材！微观经济学、宏观经济学、货币银行学，笔记很全，期末考试重点都标出来了 📖 打包带走更优惠，可小刀～', likes: 256, comments: 45, tags: [] },
    { name: '数码小王子', tag: '数码', time: '1小时前', campus: '奉贤校区', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20male%20tech%20student%20headshot&image_size=square', cat: '数码', price: 2380, imgs: ['https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ipad%20air%20sky%20blue%20with%20apple%20pencil%20minimal%20white%20background&image_size=square'], text: '换新款了，出iPad Air 4 64G 天蓝色，一直带壳贴膜使用，成色99新。配件齐全：原装充电器、数据线、保护壳、类纸膜。电池健康92%，看网课记笔记绝配 📝 面交验机，可小刀！', likes: 89, comments: 67, tags: [] },
    { name: '穿搭达人苏苏', tag: '时尚', time: '2小时前', campus: '奉贤校区', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20female%20fashion%20student%20headshot&image_size=square', cat: 'all', price: 200, imgs: ['https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beige%20knit%20sweater%20flatlay%20minimal%20white&image_size=square', 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=denim%20jacket%20blue%20flatlay%20minimal%20white&image_size=square', 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=white%20blouse%20shirt%20flatlay%20minimal%20white&image_size=square', 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=black%20pleated%20skirt%20flatlay%20minimal%20white&image_size=square'], text: '换季清理衣柜！出一些只穿过一两次的衣服，都是品牌款，尺码S-M。优衣库、ZARA、H&M都有，质量都很好，价格超低 📉 欢迎来挑！', likes: 342, comments: 56, tags: [] },
    { name: '运动健将阿杰', tag: '运动', time: '3小时前', campus: '徐汇校区', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20male%20athlete%20student%20headshot&image_size=square', cat: 'all', price: 200, imgs: [], text: '求购二手羽毛球拍！预算200以内，最好带线和手胶。有YONEX或李宁的优先，成色无所谓，能打就行 🏸 有出的同学私聊我！', likes: 15, comments: 8, tags: ['#求购', '#羽毛球'] },
    { name: '美妆小达人', tag: '美妆', time: '5小时前', campus: '奉贤校区', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20female%20beauty%20student%20headshot&image_size=square', cat: 'all', price: 150, imgs: ['https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=skincare%20cosmetics%20set%20flatlay%20pastel%20aesthetic&image_size=square', 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lipstick%20makeup%20collection%20flatlay%20minimal&image_size=square'], text: '毕业出闲置美妆！护肤品、口红、眼影盘都有，都是专柜正品，大部分只用过几次。色号不合适所以出，价格都很美丽 💄 满100包邮～', likes: 189, comments: 34, tags: [] },
];

const messages = [
    { name: '林小雨', preview: '好的好的，那明天中午12点在图书馆门口见～', time: '刚刚', unread: 3, tag: '', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20female%20college%20student%20smiling%20headshot&image_size=square' },
    { name: '张明远', preview: '那本《微观经济学》还在吗？我想先看看…', time: '14:32', unread: 0, tag: '', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20male%20college%20student%20smiling%20headshot&image_size=square' },
    { name: '陈思琪', preview: '已经放到快递柜了，取件码是B-1…', time: '昨天', unread: 0, tag: '交易中', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20female%20student%20gentle%20smile%20headshot&image_size=square' },
    { name: '王浩然', preview: '谢谢学长！自行车骑起来很顺畅，下次有…', time: '昨天', unread: 0, tag: '', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20male%20student%20friendly%20headshot&image_size=square' },
    { name: '系统通知', preview: '您的商品「考研数学复习全书」已被收藏…', time: '12-18', unread: 0, tag: '', sys: true },
    { name: '赵晓萱', preview: '哈哈没问题，到时候联系你！', time: '12-17', unread: 0, tag: '', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20girl%20student%20headshot&image_size=square' },
    { name: '刘子墨', preview: '相机镜头已经出掉了，感谢关注！', time: '12-15', unread: 0, tag: '', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20boy%20student%20headshot&image_size=square' },
    { name: '周雅婷', preview: '好的，我考虑一下再回复你', time: '12-12', unread: 0, tag: '', avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20female%20student%20headshot&image_size=square' },
];

let currentCat = null;
let currentSort = 'all';

// ===== 业务数据（订单 / 收藏 / 浏览 / 地址 / 资料 / 审核动态） =====
let favoriteIds = [];                        // 收藏的商品 id
let viewedProducts = [];                     // 浏览记录 {id, time}
let orders = [];                             // 订单列表
let auditLog = [                             // 审核动态
    { action: 'approve', title: 'Kindle Paperwhite 5 电子书阅读器', time: '今天 09:42' },
    { action: 'reject', title: '全新未拆封 AirPods Pro（疑似违规商品）', time: '今天 09:15' },
    { action: 'approve', title: '考研英语一历年真题 2010-2025', time: '昨天 18:30' },
];
let profile = {                              // 当前登录用户资料
    name: '林晓晴',
    bio: '喜欢摄影和阅读，常出没于图书馆和操场。闲置物品会定期更新，欢迎来聊～',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20of%20a%20young%20asian%20female%20university%20student%20smiling%20professional%20headshot%20clean%20background&image_size=square'
};
let addresses = [
    { id: 1, name: '林晓晴', phone: '138****8000', campus: '奉贤校区', detail: '奉浦校区 12号楼 302室', isDefault: true },
    { id: 2, name: '林晓晴', phone: '138****8000', campus: '徐汇校区', detail: '徐汇校区 5号快递站代收', isDefault: false },
];
let postComments = {};                       // 帖子评论 {postIdx: [{name,avatar,text,time}]}
const defaultComments = [
    { name: '张同学', text: '东西还在吗？可以小刀吗～', time: '8分钟前' },
    { name: '李学姐', text: '已拍，明天中午图书馆门口交易！', time: '20分钟前' },
    { name: '阿杰', text: '成色看着不错，帮顶！', time: '1小时前' },
];
const commentAvatar = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20college%20student%20headshot&image_size=square';
let filterState = { minPrice: null, maxPrice: null };   // 高级筛选
let settings = { trade: true, system: false, like: true, comment: true, showOnline: true, allowStranger: true }; // 开关状态
let currentOrderTab = 'all';

// JS 字符串安全转义
function escapeQuote(s) { return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }
function nowStr() {
    const d = new Date();
    return `${d.getMonth() + 1}月${d.getDate()}日 ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}
function genOrderNo() {
    const d = new Date();
    return '' + d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getDate()).padStart(2, '0')
        + String(Math.floor(Math.random() * 900000) + 100000);
}

// ===== 数据持久化（localStorage）：刷新 / 重启后商品、订单、收藏等全部保留 =====
const STORE_KEY = 'shangtao_data_v1';
function persist() {
    const data = {
        products: products, orders: orders, favoriteIds: favoriteIds,
        viewedProducts: viewedProducts, notifications: notifications,
        profile: profile, addresses: addresses, settings: settings,
        postComments: postComments, auditLog: auditLog
    };
    try {
        localStorage.setItem(STORE_KEY, JSON.stringify(data));
    } catch (e) {
        // 容量超限（多为 base64 图片）：剥离 base64 后重存，商品改用服务器图片不受影响
        try {
            data.products = products.map(p => (p.img && p.img.startsWith('data:')) ? Object.assign({}, p, { img: '' }) : p);
            localStorage.setItem(STORE_KEY, JSON.stringify(data));
        } catch (e2) { }
    }
}
function restore() {
    try {
        const d = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
        if (!d) return;
        if (Array.isArray(d.products) && d.products.length) {
            products.length = 0;
            d.products.forEach(p => products.push(p));
        }
        if (Array.isArray(d.orders)) orders = d.orders;
        if (Array.isArray(d.favoriteIds)) favoriteIds = d.favoriteIds;
        if (Array.isArray(d.viewedProducts)) viewedProducts = d.viewedProducts;
        if (Array.isArray(d.notifications)) notifications = d.notifications;
        if (Array.isArray(d.auditLog) && d.auditLog.length) auditLog = d.auditLog;
        if (Array.isArray(d.addresses) && d.addresses.length) addresses = d.addresses;
        if (d.profile) Object.assign(profile, d.profile);
        if (d.settings) Object.assign(settings, d.settings);
        if (d.postComments) postComments = d.postComments;
    } catch (e) { }
}
setInterval(persist, 3000);                     // 定时兜底保存
window.addEventListener('beforeunload', persist); // 关页前保存

// ===== 渲染商品 =====
function renderProducts() {
    // 只展示已上架商品；无 status 字段的初始商品默认视为已上架
    let list = products.filter(p =>
        p.status !== 'pending' && p.status !== 'sold' && p.status !== 'rejected' && p.status !== 'offline'
    );
    if (currentCat) list = list.filter(p => p.cat === currentCat);
    const kw = document.getElementById('searchInput').value.trim();
    if (kw) list = list.filter(p => p.title.includes(kw) || (p.desc && p.desc.includes(kw)));
    if (filterState.minPrice !== null) list = list.filter(p => p.price >= filterState.minPrice);
    if (filterState.maxPrice !== null) list = list.filter(p => p.price <= filterState.maxPrice);

    // 排序（使用 slice 避免修改原数组）
    if (currentSort === 'price') {
        list = list.slice().sort((a, b) => a.price - b.price);
    } else if (currentSort === 'new') {
        list = list.slice().sort((a, b) => b.id - a.id);
    } else if (currentSort === 'near') {
        list = list.slice().sort((a, b) => a.location.localeCompare(b.location));
    }

    const grid = document.getElementById('productGrid');
    updateProductCount(list.length);
    if (list.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:#9ca3af;padding:40px 0;font-size:13px;">
        🔍 暂无符合条件的商品<br><span style="font-size:11px;">换个筛选条件试试吧</span>
      </div>`;
        return;
    }
    grid.innerHTML = list.map(p => `
      <div class="product" onclick="openDetail(${p.id})">
        <div class="product-img" style="background-image:url('${p.img}')">
          ${p.isNew ? '<span class="new-badge">新上架</span>' : ''}
          <span class="tag tag-${p.cat === '教材' ? 'book' : p.cat === '服饰' ? 'cloth' : p.cat === '数码' ? 'digital' : 'life'}">${p.cat}</span>
          <div class="fav ${favoriteIds.includes(p.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFav(${p.id},this)"><svg class="ic" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg></div>
        </div>
        <div class="product-info">
          <div class="product-title">${p.title}</div>
          <div class="product-meta">
            <div class="price"><small>¥</small>${p.price}</div>
            <div class="seller">${p.seller}</div>
          </div>
        </div>
      </div>
    `).join('');
}

// 更新商品数量
function updateProductCount(n) {
    const el = document.getElementById('productCount');
    if (el) el.textContent = n;
}

// ===== 收藏切换 =====
function toggleFav(id, el) {
    const i = favoriteIds.indexOf(id);
    const p = products.find(x => x.id === id);
    if (i >= 0) {
        favoriteIds.splice(i, 1);
        if (el) el.classList.remove('active');
        showToast('已取消收藏');
    } else {
        favoriteIds.push(id);
        if (el) el.classList.add('active');
        showToast('❤ 已加入收藏');
        if (p) addNotification(`您收藏了商品「${p.title}」`, 'fav');
    }
    refreshProfileStats();
}

// ===== 设置页开关切换 =====
function toggleSwitch(row) {
    const sw = row.querySelector('.acct-switch');
    if (sw) {
        sw.classList.toggle('on');
    }
}

// ===== 分类筛选 =====
function filterCategory(cat) {
    currentCat = currentCat === cat ? null : cat;
    document.querySelectorAll('.cat-item').forEach(c => {
        c.style.opacity = (!currentCat || c.dataset.cat === currentCat) ? '1' : '.4';
    });
    renderProducts();
    if (currentCat) showToast('已筛选：' + currentCat);
}

// ===== 排序 =====
function changeSort(sort) {
    currentSort = sort;
    document.querySelectorAll('#filterTabs .tab').forEach(t => {
        t.classList.toggle('active', t.dataset.sort === sort);
    });
    renderProducts();
}

// ===== 搜索 =====
document.getElementById('searchInput').addEventListener('input', renderProducts);

// ===== 商品详情 =====
let currentDetailId = null;
function openDetail(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    currentDetailId = id;
    document.getElementById('modalImg').style.backgroundImage = `url('${p.img}')`;
    document.getElementById('modalPrice').textContent = '¥' + p.price;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalSeller').innerHTML = '<svg class="ic meta-ic" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' + p.seller;
    document.getElementById('modalLocation').innerHTML = '<svg class="ic meta-ic" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>' + p.location;
    document.getElementById('modalViews').innerHTML = '<svg class="ic meta-ic" viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>' + p.views + '次浏览';
    document.getElementById('modalDesc').textContent = p.desc;
    // 收藏按钮状态
    const favBtn = document.getElementById('detailFavBtn');
    const isFav = favoriteIds.includes(id);
    favBtn.textContent = isFav ? '♥ 已收藏' : '♡ 收藏';
    favBtn.classList.toggle('is-faved', isFav);
    // 浏览记录追踪（同一商品只保留最新一次，置顶）
    p.views++;
    document.getElementById('modalViews').innerHTML = '<svg class="ic meta-ic" viewBox="0 0 24 24"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>' + p.views + '次浏览';
    const vi = viewedProducts.findIndex(v => v.id === id);
    if (vi >= 0) viewedProducts.splice(vi, 1);
    viewedProducts.unshift({ id, time: nowStr() });
    refreshProfileStats();
    document.getElementById('detailModal').classList.add('show');
    histPushOv();
}
// 详情页收藏按钮
function detailToggleFav() {
    if (currentDetailId === null) return;
    const isFav = favoriteIds.includes(currentDetailId);
    toggleFav(currentDetailId, null);
    const favBtn = document.getElementById('detailFavBtn');
    favBtn.textContent = !isFav ? '♥ 已收藏' : '♡ 收藏';
    favBtn.classList.toggle('is-faved', !isFav);
}
function closeDetail(e) {
    if (e && e.target && e.target !== e.currentTarget) return;
    document.getElementById('detailModal').classList.remove('show');
}

// ===== 订单流程 =====
function openOrder() {
    const p = products.find(x => x.id === currentDetailId);
    if (!p) return;
    document.getElementById('orderImg').style.backgroundImage = `url('${p.img}')`;
    document.getElementById('orderTitle').textContent = p.title;
    document.getElementById('orderSeller').textContent = '卖家：' + p.seller;
    document.getElementById('orderPrice').innerHTML = '<small>¥</small>' + p.price;
    document.getElementById('orderLocation').textContent = p.location;
    document.getElementById('orderTotal').innerHTML = '<small>¥</small>' + p.price;
    document.getElementById('orderModal').classList.add('show');
}
function closeOrder(e) {
    if (e && e.target !== e.currentTarget) return;
    document.getElementById('orderModal').classList.remove('show');
}
function confirmOrder() {
    const p = products.find(x => x.id === currentDetailId);
    if (!p) return;
    if (orders.some(o => o.productId === p.id && o.status !== 'canceled')) {
        showToast('该商品您已下单，请勿重复购买');
        return;
    }

    // ===== 后端接口预留：POST /api/orders/create =====
    // fetch('/api/orders/create', {
    //   method:'POST',
    //   headers:{'Content-Type':'application/json'},
    //   body: JSON.stringify({ productId: p.id, price: p.price })
    // }).then(r=>r.json()).then(data=>{ /* 下单成功 */ });

    // 生成订单
    orders.unshift({
        orderNo: genOrderNo(),
        productId: p.id,
        title: p.title,
        img: p.img,
        seller: p.seller,
        price: p.price,
        status: 'unshipped',           // unshipped 待发货 / shipped 待收货 / done 已完成 / canceled 已取消
        createTime: nowStr(),
        address: (addresses.find(a => a.isDefault) || addresses[0])
    });
    p.status = 'sold';
    closeOrder();
    closeDetail();
    addNotification(`您购买的商品「${p.title}」下单成功，订单号 ${orders[0].orderNo}，请等待卖家发货`, 'order');
    renderProducts();
    refreshProfileStats();
    showToast('✅ 下单成功！可在「我的订单」查看');
    // 模拟卖家 2 秒后发货
    setTimeout(() => {
        const o = orders.find(x => x.productId === p.id);
        if (o && o.status === 'unshipped') {
            o.status = 'shipped';
            o.shipTime = nowStr();
            addNotification(`您的订单「${p.title}」卖家已发货，请留意查收`, 'order');
            if (document.getElementById('page-orders').classList.contains('active')) renderOrders();
            showToast('📦 卖家已发货！');
        }
    }, 2500);
}

// ===== 审核中心 =====
let admCurrentTab = 'pending';

function renderAdmin() {
    const pendingCount = products.filter(p => p.status === 'pending').length;
    const onlineCount = products.filter(p => p.status === 'online' || (!p.status && p.status !== 'sold')).length;
    const rejectedCount = products.filter(p => p.status === 'rejected').length;
    const soldCount = products.filter(p => p.status === 'sold').length;

    // 统计卡片
    document.getElementById('adminStats').innerHTML = `
      <div class="admin-stat-card stat-pending"><div class="num">${pendingCount}</div><div class="lbl">待审核</div></div>
      <div class="admin-stat-card stat-online"><div class="num">${onlineCount}</div><div class="lbl">已通过</div></div>
      <div class="admin-stat-card stat-rejected"><div class="num">${rejectedCount}</div><div class="lbl">已驳回</div></div>
    `;

    renderAdminList();
}

function renderAdminList() {
    let list;
    if (admCurrentTab === 'pending') {
        list = products.filter(p => p.status === 'pending');
    } else if (admCurrentTab === 'online') {
        list = products.filter(p => p.status === 'online' || (!p.status && p.status !== 'sold' && p.status !== 'rejected'));
    } else if (admCurrentTab === 'rejected') {
        list = products.filter(p => p.status === 'rejected');
    } else {
        list = products.filter(p => p.status === 'sold');
    }

    const container = document.getElementById('adminList');
    if (list.length === 0) {
        const msg = admCurrentTab === 'pending' ? '暂无待审核商品 🎉' : admCurrentTab === 'online' ? '暂无已通过商品' : '暂无已驳回商品';
        container.innerHTML = `<div style="text-align:center;color:#9ca3af;padding:40px 0;font-size:13px;">${msg}</div>`;
        return;
    }

    container.innerHTML = list.map(p => {
        const time = p.submitTime || '已有商品';
        let btnsHtml = '';
        if (p.status === 'pending') {
            btnsHtml = `
          <div class="review-btns">
            <button class="review-btn approve" onclick="approveProduct(${p.id})">✓ 审核通过</button>
            <button class="review-btn reject" onclick="rejectProduct(${p.id})">✕ 驳回</button>
          </div>`;
        } else if (p.status === 'rejected') {
            btnsHtml = `<div class="review-reason">驳回原因：${p.rejectReason || '不符合平台规范'}</div>`;
        } else {
            btnsHtml = `<div style="margin-top:8px;font-size:12px;color:#10b981;">✓ 已上架 · ${time}</div>`;
        }
        return `
        <div class="review-card">
          <div class="review-top">
            <div class="review-img" style="background-image:url('${p.img}')"></div>
            <div class="review-info">
              <div class="review-title">${p.title}</div>
              <div class="review-seller">发布者：${p.seller} · ${time}</div>
              <div class="review-price"><small>¥</small>${p.price}</div>
            </div>
          </div>
          ${btnsHtml}
        </div>`;
    }).join('');
}

function selAdmTab(el, tab) {
    document.querySelectorAll('.adm-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    admCurrentTab = tab;
    renderAdminList();
}

function approveProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    // ===== 后端接口预留：POST /api/product/approve =====
    // fetch('/api/product/approve', {
    //   method:'POST',
    //   headers:{'Content-Type':'application/json'},
    //   body: JSON.stringify({ productId: id, approved: true })
    // }).then(r=>r.json());

    p.status = 'online';
    p.isNew = true;
    p.auditTime = nowStr();
    addNotification(`您的商品「${p.title}」已通过审核，已成功上架！`, 'approve');
    auditLog.unshift({ action: 'approve', title: p.title, time: nowStr() });
    renderAdmin();
    renderAdminHome();
    showToast('✅ 已通过审核并上架');
}

function rejectProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    // 演示：使用统一的驳回理由（后端会弹窗让审核员选择原因）
    p.status = 'rejected';
    p.rejectReason = '商品图片不清晰，信息描述不完整，请修改后重新发布';
    p.auditTime = nowStr();
    addNotification(`您的商品「${p.title}」被驳回：${p.rejectReason}`, 'reject');
    auditLog.unshift({ action: 'reject', title: p.title, time: nowStr() });
    renderAdmin();
    renderAdminHome();
    showToast('已驳回并通知发布者');
}

// ===== 通知系统 =====
let notifications = [];

function addNotification(content, type) {
    notifications.unshift({
        id: Date.now(),
        content: content,
        type: type,   // approve / reject / order / system
        time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
        read: false
    });
    updateNotificationBadge();
}

function updateNotificationBadge() {
    const unread = notifications.filter(n => !n.read).length;
    const bellBadge = document.querySelector('.bell .badge');
    if (bellBadge) {
        if (unread > 0) {
            bellBadge.textContent = unread;
            bellBadge.style.display = 'flex';
        } else {
            bellBadge.style.display = 'none';
        }
    }
    // 审核员工作台铃铛角标
    const admBadge = document.getElementById('admNotifBadge');
    if (admBadge) {
        if (unread > 0) { admBadge.textContent = unread; admBadge.style.display = 'flex'; }
        else admBadge.style.display = 'none';
    }
}

function openNotifications() {
    renderNotifPanel();
    document.getElementById('notifPanel').classList.add('show');
    histPushOv();
}
function closeNotifications(e) {
    if (e && e.target && e.target !== e.currentTarget) return;
    document.getElementById('notifPanel').classList.remove('show');
}
function renderNotifPanel() {
    const body = document.getElementById('notifPanelBody');
    if (notifications.length === 0) {
        body.innerHTML = `<div class="notif-empty">🔔 暂无通知</div>`;
        return;
    }
    body.innerHTML = notifications.map(n => {
        const icon = n.type === 'approve' ? '✅' : n.type === 'reject' ? '❌' : n.type === 'order' ? '🛒' : '🔔';
        return `
        <div class="notif-item ${n.read ? '' : 'unread'}" onclick="markNotifRead(${n.id})">
          <div class="notif-ic ${n.type}">${icon}</div>
          <div class="notif-content">
            ${n.content}
            <div class="notif-time">${n.time}</div>
          </div>
          ${n.read ? '' : '<div class="notif-dot"></div>'}
        </div>`;
    }).join('');
}
function markNotifRead(id) {
    const n = notifications.find(x => x.id === id);
    if (n) { n.read = true; updateNotificationBadge(); renderNotifPanel(); }
}
function clearNotifications() {
    notifications.forEach(n => n.read = true);
    updateNotificationBadge();
    renderNotifPanel();
}

// ===== 发现页 =====
let discCat = 'all';
let discSort = 'all';
let discSearch = '';
function getFilteredPosts() {
    let list = posts.slice();
    if (discCat !== 'all') list = list.filter(p => p.cat === discCat);
    if (discSearch) {
        const kw = discSearch.toLowerCase();
        list = list.filter(p => p.text.toLowerCase().includes(kw) || p.name.toLowerCase().includes(kw) || p.tags.join(' ').toLowerCase().includes(kw));
    }
    if (discSort === 'price') list.sort((a, b) => a.price - b.price);
    else if (discSort === 'new') list.sort((a, b) => a.time.localeCompare(b.time));
    else if (discSort === 'near') list.sort((a, b) => a.campus.localeCompare(b.campus));
    return list;
}
function renderDiscover() {
    const list = getFilteredPosts();
    const feed = document.getElementById('postFeed');
    if (list.length === 0) {
        feed.innerHTML = `<div style="text-align:center;color:#9ca3af;padding:40px 0;font-size:13px;">没有找到相关帖子</div>`;
        return;
    }
    feed.innerHTML = list.map(p => {
        const origIdx = posts.indexOf(p);
        const imgCount = p.imgs.length;
        const imgCls = imgCount === 0 ? '' : 'c' + Math.min(imgCount, 4);
        const imgsHtml = imgCount > 0 ? `<div class="post-imgs ${imgCls}">${p.imgs.slice(0, 4).map(src => `<img src="${src}" alt="" onclick="viewImg('${src}')" />`).join('')}</div>` : '';
        const tagsHtml = p.tags.length > 0 ? `<div class="post-tags">${p.tags.map(t => `<span class="post-hashtag">${t}</span>`).join('')}</div>` : '';
        return `
      <div class="post-card">
        <div class="post-head">
          <img class="post-avatar" src="${p.avatar}" alt="" />
          <div class="post-user">
            <div class="post-user-row">
              <span class="post-name">${p.name}</span>
              <span class="post-tag">${p.tag}</span>
            </div>
            <div class="post-meta">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${p.time} · ${p.campus}
            </div>
          </div>
          <div class="post-more" onclick="openPostMore(${origIdx})">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
          </div>
        </div>
        <div class="post-text">${p.text}</div>
        ${tagsHtml}
        ${imgsHtml}
        <div class="post-actions">
          <div class="post-action" onclick="likePost(this, ${origIdx})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>
            <span class="like-cnt">${p.likes}</span>
          </div>
          <div class="post-action" onclick="openComments(${origIdx})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span>${p.comments}</span>
          </div>
          <div class="post-action share" onclick="openShare('${escapeQuote(p.text)}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          </div>
        </div>
      </div>`;
    }).join('');
}
function selDiscCat(el, cat) {
    document.querySelectorAll('.disc-cat').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    discCat = cat;
    renderDiscover();
}
function selDiscTab(el, sort) {
    document.querySelectorAll('.d-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    discSort = sort;
    renderDiscover();
}
function searchPosts(kw) {
    discSearch = kw.trim();
    renderDiscover();
}
function likePost(el, idx) {
    el.classList.toggle('liked');
    const svg = el.querySelector('svg');
    const cnt = el.querySelector('.like-cnt');
    if (el.classList.contains('liked')) {
        svg.setAttribute('fill', 'currentColor');
        cnt.textContent = posts[idx].likes + 1;
    } else {
        svg.setAttribute('fill', 'none');
        cnt.textContent = posts[idx].likes;
    }
}

// ===== 消息页 =====
function renderMessages() {
    document.getElementById('msgList').innerHTML = messages.map((m, i) => {
        const avatarHtml = m.sys
            ? `<div class="avatar sys"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div>`
            : `<div class="avatar"><img src="${m.avatar}" alt="" /></div>`;
        const unreadHtml = m.unread > 0 ? `<span class="unread-badge">${m.unread}</span>` : '';
        const tagHtml = m.tag ? `<span class="trade-tag">${m.tag}</span>` : '';
        return `
      <div class="msg-item" onclick="openChat(${i})">
        ${avatarHtml}
        <div class="msg-body">
          <div class="msg-top">
            <span class="msg-name">${m.name}${tagHtml}</span>
            <span class="msg-time">${m.time}</span>
          </div>
          <div class="msg-preview">${m.preview}</div>
        </div>
        ${unreadHtml}
      </div>`;
    }).join('');
}

// ===== 聊天详情 =====
let currentChat = null;
const myAvatar = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20young%20asian%20female%20student%20smiling%20professional%20headshot&image_size=square';
const chatHistory = {
    '林小雨': [
        { me: false, text: '你好，请问那本高数教材还在吗？' },
        { me: true, text: '在的，九成新，同济第七版上下册+习题详解' },
        { me: false, text: '多少钱呀？可以便宜点吗' },
        { me: true, text: '25一套，已经很划算了，送你笔记本' },
        { me: false, text: '好的好的，那明天中午12点在图书馆门口见～' },
    ],
    '张明远': [
        { me: false, text: '那本《微观经济学》还在吗？我想先看看' },
        { me: true, text: '在的，你随时可以来取' },
    ],
    '陈思琪': [
        { me: true, text: '商品已经寄出了' },
        { me: false, text: '好的，已经放到快递柜了，取件码是B-1234' },
    ],
};
function openChat(i) {
    const m = messages[i];
    currentChat = m;
    document.getElementById('chatName').textContent = m.name;
    renderChat();
    switchPage('chat');
}
function renderChat() {
    const body = document.getElementById('chatBody');
    const history = chatHistory[currentChat.name] || [{ me: false, text: '你好，请问有什么可以帮你？' }];
    body.innerHTML = `<div class="chat-time">今天</div>` + history.map(msg => `
      <div class="chat-row ${msg.me ? 'me' : 'other'}">
        <div class="chat-avatar"><img src="${msg.me ? myAvatar : currentChat.avatar}" alt="" /></div>
        <div class="bubble">${msg.text}</div>
      </div>
    `).join('');
    body.scrollTop = body.scrollHeight;
}
function sendChatMsg() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
    if (!chatHistory[currentChat.name]) chatHistory[currentChat.name] = [];
    chatHistory[currentChat.name].push({ me: true, text });
    input.value = '';
    renderChat();
    setTimeout(() => {
        const replies = ['好的，我知道了～', '嗯嗯，没问题！', '可以的，随时联系', '收到，谢谢！'];
        chatHistory[currentChat.name].push({ me: false, text: replies[Math.floor(Math.random() * replies.length)] });
        renderChat();
    }, 800);
}

// ===== 发布 =====
let uploadImgs = [];
const sampleImgs = products.map(p => p.img);
const MAX_IMGS = 9;
function addUploadImg() {
    if (uploadImgs.length >= MAX_IMGS) return showToast('最多上传' + MAX_IMGS + '张图片');
    document.getElementById('fileInput').value = '';
    document.getElementById('fileInput').click();
}
function handleFiles(files) {
    const remaining = MAX_IMGS - uploadImgs.length;
    const arr = Array.from(files).slice(0, remaining);
    if (arr.length === 0) return;
    // 仅前端静态打开（非 3000 端口完整服务）时不上传，退回 base64 预览
    const canUpload = location.pathname !== '' && (location.protocol === 'http:' || location.protocol === 'https:') && location.port !== '8000';
    arr.forEach(f => {
        const reader = new FileReader();
        reader.onload = e => {
            const localData = e.target.result;
            uploadImgs.push(localData);
            renderUploadGrid();
            // 异步上传到服务器持久化（成功后把 base64 替换为 /uploads/ URL）
            if (canUpload) {
                const fd = new FormData();
                fd.append('file', f);
                fetch('/api/upload', { method: 'POST', body: fd })
                    .then(r => r.json())
                    .then(j => {
                        if (j && j.code === 0 && j.url) {
                            const i = uploadImgs.indexOf(localData);
                            if (i >= 0) { uploadImgs[i] = j.url; renderUploadGrid(); }
                        }
                    })
                    .catch(() => { /* 服务未启动时保留本地预览，不影响发布 */ });
            }
        };
        reader.readAsDataURL(f);
    });
}
function removeUploadImg(i) {
    uploadImgs.splice(i, 1);
    renderUploadGrid();
}
function renderUploadGrid() {
    const grid = document.getElementById('uploadGrid');
    const cells = uploadImgs.map((src, i) => `
      <div class="upload-cell">
        <img src="${src}" />
        <div class="remove" onclick="removeUploadImg(${i})">✕</div>
      </div>
    `).join('');
    const addBtn = uploadImgs.length < MAX_IMGS ? `
      <div class="upload-cell upload-add" onclick="addUploadImg()">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        <span>添加图片</span>
      </div>` : '';
    grid.innerHTML = cells + addBtn;
    const cnt = document.getElementById('imgCounter');
    if (cnt) cnt.textContent = '已上传 ' + uploadImgs.length + '/' + MAX_IMGS;
}
function selChip(el) {
    el.parentNode.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}
function updateNameCounter() {
    const v = document.getElementById('pTitle').value;
    document.getElementById('nameCounter').textContent = v.length + '/30';
}
function submitPublish() {
    const title = document.getElementById('pTitle').value.trim();
    const price = document.getElementById('pPrice').value;
    if (uploadImgs.length === 0) return showToast('请至少上传1张图片');
    if (!title) return showToast('请填写商品名称');
    if (!price) return showToast('请填写商品价格');

    // ===== 后端接口预留：POST /api/product/publish =====
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('price', price);
    // uploadImgs.forEach(img => formData.append('images', img));
    // fetch('/api/product/publish', { method:'POST', body: formData })
    //   .then(r => r.json()).then(data => { /* 等待审核员审核 */ });

    const catEl = document.querySelector('.chip.active');
    const newProduct = {
        id: products.length + 1,
        cat: catEl ? catEl.textContent : '其他',
        title: title,
        price: Number(price),
        img: uploadImgs[0],
        seller: currentRole === 'admin' ? '审核员' : profile.name,
        location: '奉贤校区',
        views: 0,
        desc: document.getElementById('pDesc').value || '卖家很懒，什么都没留下～',
        status: 'pending',   // pending=待审核, online=已上架, rejected=已驳回, sold=已售出
        isNew: false,
        submitTime: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
        rejectReason: ''
    };
    products.push(newProduct);
    showToast('发布成功，等待审核员审核…');
    setTimeout(() => {
        uploadImgs = [];
        renderUploadGrid();
        document.getElementById('pTitle').value = '';
        document.getElementById('pPrice').value = '';
        document.getElementById('pDesc').value = '';
        document.getElementById('pContact').value = '';
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        updateNameCounter();
        // 审核员发布后直接进入审核中心；普通用户回首页
        if (currentRole === 'admin') {
            renderAdmin();
            switchPage('admin');
        } else {
            switchPage('home');
        }
    }, 900);
}

// ===== 登录 / 角色 =====
let currentRole = 'user';   // user=普通用户, admin=审核员
let codeTimer = null;

function selectRole(role) {
    currentRole = role;
    document.getElementById('roleUser').classList.toggle('active', role === 'user');
    document.getElementById('roleAdmin').classList.toggle('active', role === 'admin');
    applyTheme();
    // 切换手机号提示（演示）
    const phoneInput = document.getElementById('loginPhone');
    if (role === 'admin') {
        phoneInput.value = '13900139000';
    } else {
        phoneInput.value = '13800138000';
    }
}

function sendCode() {
    const phone = document.getElementById('loginPhone').value.trim();
    if (!/^1\d{10}$/.test(phone)) return showToast('请输入正确的手机号');
    const btn = document.getElementById('codeBtn');
    let n = 60;
    btn.disabled = true;
    btn.textContent = n + 's后重发';
    showToast('验证码已发送（演示：1234）');
    codeTimer = setInterval(() => {
        n--;
        if (n <= 0) {
            clearInterval(codeTimer);
            btn.disabled = false;
            btn.textContent = '获取验证码';
        } else {
            btn.textContent = n + 's后重发';
        }
    }, 1000);
}
// ===== 注册新账号 =====
function getRegisteredUsers() {
    try { return JSON.parse(localStorage.getItem('shangtao_users') || '{}'); } catch (e) { return {}; }
}
function openRegister() {
    openSheet(`
      <div class="sheet-title">注册新账号</div>
      <div class="reg-form">
        <input id="regName" class="form-input" placeholder="取个昵称（2-12个字）" maxlength="12" />
        <input id="regPhone" class="form-input" type="tel" placeholder="手机号" maxlength="11" />
        <div class="reg-code-row">
          <input id="regCode" class="form-input" type="text" placeholder="验证码" maxlength="4" />
          <button class="reg-code-btn" onclick="sendRegCode(this)">获取验证码</button>
        </div>
        <div style="font-size:11px;color:#9ca3af;">演示环境验证码固定为 1234</div>
        <button class="login-btn" style="width:100%;margin-top:4px;" onclick="doRegister()">注 册</button>
        <div style="font-size:11px;color:#9ca3af;text-align:center;padding-bottom:4px;">注册即代表同意《用户协议》与《隐私政策》</div>
      </div>
    `);
}
function sendRegCode(btn) {
    const phone = document.getElementById('regPhone').value.trim();
    if (!/^1\d{10}$/.test(phone)) return showToast('请输入正确的手机号');
    btn.disabled = true;
    let n = 30;
    btn.textContent = n + 's';
    const t = setInterval(() => {
        n--;
        if (n <= 0) { clearInterval(t); btn.disabled = false; btn.textContent = '重新获取'; }
        else btn.textContent = n + 's';
    }, 1000);
    showToast('验证码已发送（演示：1234）');
}
function doRegister() {
    const name = document.getElementById('regName').value.trim();
    const phone = document.getElementById('regPhone').value.trim();
    const code = document.getElementById('regCode').value.trim();
    if (name.length < 2) return showToast('昵称至少2个字');
    if (!/^1\d{10}$/.test(phone)) return showToast('请输入正确的手机号');
    if (code !== '1234') return showToast('验证码错误（演示：1234）');
    const users = getRegisteredUsers();
    if (users[phone]) return showToast('该手机号已注册，直接登录即可');
    users[phone] = { name: name, regTime: nowStr() };
    try { localStorage.setItem('shangtao_users', JSON.stringify(users)); } catch (e) { }
    // 应用昵称并自动登录
    profile.name = name;
    profile.bio = '上商淘新同学，欢迎来淘好物～';
    closeSheet();
    document.getElementById('loginPhone').value = phone;
    currentRole = 'user';
    applyTheme();
    selectRole('user');
    document.getElementById('loginMask').classList.add('hide');
    pageHistory = [];
    renderProducts();
    switchPage('home');
    refreshProfileRole();
    persist();
    showToast('🎉 注册成功，欢迎加入上商淘！');
}

function doLogin() {
    const phone = document.getElementById('loginPhone').value.trim();
    const code = document.getElementById('loginCode').value.trim();
    const agree = document.getElementById('agreeCheck').checked;
    if (!/^1\d{10}$/.test(phone)) return showToast('请输入正确的手机号');
    if (code.length < 4) return showToast('请输入验证码');
    if (!agree) return showToast('请先同意用户协议');
    // 已注册用户登录时恢复其昵称
    const regUsers = getRegisteredUsers();
    if (currentRole === 'user' && regUsers[phone]) {
        profile.name = regUsers[phone].name;
    }
    const roleText = currentRole === 'admin' ? '审核员' : '普通用户';
    showToast('登录成功（' + roleText + '）');
    setTimeout(() => {
        document.getElementById('loginMask').classList.add('hide');
        pageHistory = [];
        // 审核员进入工作台，普通用户进入首页
        if (currentRole === 'admin') {
            renderAdmin();
            renderAdminHome();
            switchPage('adminhome');
        } else {
            renderProducts();
            switchPage('home');
        }
    }, 600);
}
function logout() {
    document.getElementById('loginMask').classList.remove('hide');
    pageHistory = [];
    selectRole('user');
    showToast('已退出登录');
}
// 快速切换身份（演示用）
function quickSwitchRole() {
    selectRole(currentRole === 'admin' ? 'user' : 'admin');
    showToast('已切换为：' + (currentRole === 'admin' ? '审核员' : '普通用户'));
    setTimeout(() => {
        if (currentRole === 'admin') { renderAdmin(); renderAdminHome(); switchPage('adminhome'); }
        else { renderProducts(); switchPage('home'); }
    }, 500);
}
function goAdmin() {
    renderAdmin();
    renderAdminHome();
    switchPage('adminhome');
}
// 主题切换（紫色审核员主题）
function applyTheme() {
    document.querySelector('.phone').classList.toggle('theme-admin', currentRole === 'admin');
}
// 审核员工作台设置面板（含退出登录入口）
function openAdminSettings() {
    openSheet(`
      <div class="sheet-title">工作台设置</div>
      <div class="sheet-item" onclick="switchPage('account'); closeSheet()">
        <div class="acct-ic-bg ic-blue"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/></svg></div>
        <span>账号设置</span>
      </div>
      <div class="sheet-item" onclick="switchPage('publish'); closeSheet()">
        <div class="acct-ic-bg ic-green"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
        <span>发布闲置</span>
      </div>
      <div class="sheet-item" onclick="closeSheet(); quickSwitchRole()">
        <div class="acct-ic-bg ic-yellow"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"/><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3"/><path d="M21 3l-9 9"/></svg></div>
        <span>切换为普通用户（演示）</span>
      </div>
      <div class="sheet-item" style="color:#ef4444;" onclick="closeSheet(); logout()">
        <div class="acct-ic-bg" style="background:#fee2e2;color:#ef4444;"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg></div>
        <span>退出登录</span>
      </div>
    `);
}
// 数字滚动动画（值未变化时不重复播放）
function animateNum(el, target, suffix) {
    if (!el) return;
    const txt = String(target) + (suffix || '');
    if (el.__last === txt) return;
    el.__last = txt;
    const dur = 520, t0 = performance.now();
    function step(t) {
        const k = Math.min(1, (t - t0) / dur);
        const v = Math.round(target * (1 - Math.pow(1 - k, 3)));
        el.textContent = v + (suffix || '');
        if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}
// 根据角色更新「我的」页面
function refreshProfileRole() {
    const entry = document.getElementById('adminEntry');
    if (entry) entry.style.display = currentRole === 'admin' ? 'flex' : 'none';
    const pending = products.filter(p => p.status === 'pending').length;
    const countEl = document.getElementById('adminPendingCount');
    if (countEl) countEl.textContent = pending > 0 ? pending + '件待审' : '';
    const badge = document.getElementById('roleBadge');
    if (badge) {
        badge.textContent = currentRole === 'admin' ? '🛡 审核员' : '普通用户';
        badge.classList.toggle('admin', currentRole === 'admin');
    }
    document.getElementById('profileNameText').textContent = profile.name;
    document.getElementById('profileBioText').textContent = profile.bio;
    applyTheme();
    refreshProfileStats();
}
// 刷新「我的」页统计数字
function refreshProfileStats() {
    const myPub = products.filter(p => p.seller === profile.name || p.seller === '我').length;
    const setTxt = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    setTxt('pnPublish', myPub);
    setTxt('pnFav', favoriteIds.length);
    setTxt('pnOrder', orders.length);
    setTxt('pnView', viewedProducts.length);
    setTxt('svcPubCount', myPub + '件');
    setTxt('svcFavCount', favoriteIds.length + '件');
    setTxt('svcOrderCount', orders.length + '笔');
    setTxt('svcViewCount', viewedProducts.length + '条');
}

// ===== 页面切换 =====
// 页面历史栈：支持返回上一页
let pageHistory = ['home'];
function switchPage(name, noHistory) {
    // 审核员点「首页」进入工作台
    if (name === 'home' && currentRole === 'admin') name = 'adminhome';
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const pageEl = document.getElementById('page-' + name);
    pageEl.classList.add('active');
    // 进场动画（重新触发）
    pageEl.classList.remove('entering');
    void pageEl.offsetWidth;
    pageEl.classList.add('entering');
    document.querySelectorAll('.nav-item').forEach(n => {
        n.classList.toggle('active', n.dataset.page === name);
    });
    // 全屏页隐藏底部导航
    const tabBar = document.querySelector('.tab-bar');
    const hideBar = ['chat', 'orders', 'adminhome'].includes(name);
    tabBar.style.display = hideBar ? 'none' : '';
    pageEl.scrollTop = 0;
    if (!noHistory) {
        if (pageHistory[pageHistory.length - 1] !== name) {
            pageHistory.push(name);
            if (pageHistory.length > 40) pageHistory.shift();
        }
    }
    if (name === 'account' || name === 'profile') refreshProfileRole();
    if (name === 'orders') renderOrders();
    if (name === 'adminhome') renderAdminHome();
}
// 返回上一页：优先关闭浮层，再回退页面
function goBack() {
    if (document.getElementById('detailModal').classList.contains('show')) return closeDetail();
    if (document.getElementById('imgViewer').classList.contains('show')) return closeImgViewer();
    if (document.getElementById('notifPanel').classList.contains('show')) return closeNotifications();
    if (document.getElementById('sheetMask').classList.contains('show')) return closeSheet();
    if (document.getElementById('subMask').classList.contains('show')) return closeSub();
    if (pageHistory.length > 1) {
        pageHistory.pop();
        switchPage(pageHistory[pageHistory.length - 1] || (currentRole === 'admin' ? 'adminhome' : 'home'), true);
    } else {
        switchPage(currentRole === 'admin' ? 'adminhome' : 'home', true);
    }
}
// 手机/浏览器物理返回键：逐层关闭浮层（详情 → 大图 → 通知 → 弹层 → 子页面）
// 说明：按钮关闭浮层时不操作浏览器历史；残留的浮层记录由 popstate 自动消费（自愈），
// 避免 history.back 与 popstate 竞态导致"按返回没反应"。
function histPushOv() { try { history.pushState({ ov: 1 }, ''); } catch (e) { } }
window.addEventListener('popstate', function () {
    if (document.getElementById('detailModal')?.classList.contains('show')) return closeDetail();
    if (document.getElementById('imgViewer')?.classList.contains('show')) return closeImgViewer();
    if (document.getElementById('notifPanel')?.classList.contains('show')) return closeNotifications();
    if (document.getElementById('sheetMask')?.classList.contains('show')) return closeSheet();
    if (document.getElementById('subMask')?.classList.contains('show')) return closeSub();
    // 无浮层可关：若当前历史记录仍是浮层记录则继续消费
    if (history.state && history.state.ov) { try { history.back(); } catch (e) { } }
});

// ============================================================
// 我的订单
// ============================================================
const ORDER_STATE = { unshipped: '待发货', shipped: '待收货', done: '已完成', canceled: '已取消' };
function selOrderTab(el, tab) {
    document.querySelectorAll('#ordersTabs .order-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    currentOrderTab = tab;
    renderOrders();
}
function renderOrders() {
    const box = document.getElementById('ordersList');
    const list = currentOrderTab === 'all' ? orders : orders.filter(o => o.status === currentOrderTab);
    if (!list.length) {
        box.innerHTML = `<div class="empty-state">
        <div class="es-icon">🛍️</div>
        ${currentOrderTab === 'all' ? '还没有订单，快去首页淘好物吧' : '该状态下暂无订单'}
        <div style="margin-top:16px;"><button class="full-btn" style="width:160px;margin:0 auto;" onclick="switchPage('home')">去首页逛逛</button></div>
      </div>`;
        return;
    }
    box.innerHTML = list.map(o => {
        let acts = '';
        if (o.status === 'unshipped') {
            acts = `<button class="order-act-btn" onclick="cancelOrder('${o.orderNo}')">取消订单</button>
                <button class="order-act-btn primary" onclick="remindShip('${o.orderNo}')">提醒发货</button>`;
        } else if (o.status === 'shipped') {
            acts = `<button class="order-act-btn" onclick="viewLogistics('${o.orderNo}')">查看物流</button>
                <button class="order-act-btn primary" onclick="confirmReceive('${o.orderNo}')">确认收货</button>`;
        } else if (o.status === 'done') {
            acts = `<button class="order-act-btn" onclick="openDetail(${o.productId})">再次购买</button>
                <button class="order-act-btn primary" onclick="rateOrder('${o.orderNo}')">${o.rated ? '查看评价' : '评价订单'}</button>`;
        } else {
            acts = `<button class="order-act-btn" onclick="deleteOrder('${o.orderNo}')">删除订单</button>
                <button class="order-act-btn primary" onclick="openDetail(${o.productId})">再次购买</button>`;
        }
        return `
      <div class="order-card">
        <div class="order-card-head">
          <span class="order-no">订单号：${o.orderNo}</span>
          <span class="order-state state-${o.status}">${ORDER_STATE[o.status]}</span>
        </div>
        <div class="order-card-body" onclick="openOrderDetail('${o.orderNo}')">
          <div class="order-thumb" style="background-image:url('${o.img}')"></div>
          <div class="order-card-info">
            <div class="order-card-title">${o.title}</div>
            <div class="order-card-seller">卖家：${o.seller} · ${o.createTime}</div>
          </div>
          <div class="order-card-price"><small style="font-size:11px;">¥</small>${o.price}</div>
        </div>
        <div class="order-card-foot">
          <span class="order-total-lbl">合计<span class="order-total-val">¥${o.price}</span></span>
          <span class="order-actions">${acts}</span>
        </div>
      </div>`;
    }).join('');
}
function findOrder(no) { return orders.find(o => o.orderNo === no); }
function cancelOrder(no) {
    const o = findOrder(no); if (!o) return;
    o.status = 'canceled'; o.cancelTime = nowStr();
    const p = products.find(x => x.id === o.productId);
    if (p && p.status === 'sold') p.status = 'online';
    addNotification(`订单「${o.title}」已取消`, 'order');
    showToast('订单已取消');
    renderOrders(); renderProducts(); refreshProfileStats();
}
function remindShip(no) {
    const o = findOrder(no); if (!o) return;
    addNotification(`已提醒卖家尽快为订单「${o.title}」发货`, 'order');
    showToast('📢 已提醒卖家发货');
}
function viewLogistics(no) {
    const o = findOrder(no); if (!o) return;
    openSheet(`
      <div class="sheet-title">物流跟踪</div>
      <div class="sheet-item"><div class="si-label">
        <div style="font-weight:600;margin-bottom:4px;">${o.seller} 已发货 · 校园快递配送中</div>
        <div style="font-size:12px;color:#6b7280;">运单号：YT${o.orderNo}</div>
      </div></div>
      <div class="sheet-item"><div class="si-label">
        <div style="color:#1e73e8;font-weight:600;font-size:13px;">【运输中】 包裹已到达奉贤校区快递站</div>
        <div style="font-size:11px;color:#9ca3af;margin-top:3px;">${o.shipTime || nowStr()}</div>
      </div></div>
      <div class="sheet-item"><div class="si-label">
        <div style="font-size:13px;">【已揽收】 卖家已将包裹交予校园快递点</div>
      </div></div>
      <button class="sheet-btn plain" onclick="closeSheet()">关闭</button>`);
}
function confirmReceive(no) {
    const o = findOrder(no); if (!o) return;
    o.status = 'done'; o.doneTime = nowStr();
    addNotification(`订单「${o.title}」已确认收货，交易完成`, 'order');
    showToast('✅ 已确认收货');
    renderOrders();
    setTimeout(() => rateOrder(no), 500);
}
function deleteOrder(no) {
    const i = orders.findIndex(o => o.orderNo === no);
    if (i >= 0) orders.splice(i, 1);
    showToast('订单已删除');
    renderOrders(); refreshProfileStats();
}
function rateOrder(no) {
    const o = findOrder(no); if (!o) return;
    const stars = o.rating || 0;
    const starHtml = [1, 2, 3, 4, 5].map(n => `<span class="s ${n <= stars ? 'active' : ''}" onclick="pickStar(this,${n})">★</span>`).join('');
    openSheet(`
      <div class="sheet-title">${o.rated ? '我的评价' : '评价订单'}</div>
      <div style="text-align:center;margin:8px 0 4px;">
        <div class="rating-stars" id="rateStars">${starHtml}</div>
      </div>
      <textarea id="rateText" class="form-input" rows="3" placeholder="说说这次交易的感受吧～" ${o.rated ? 'disabled' : ''}>${o.rateText || ''}</textarea>
      ${o.rated ? '<button class="sheet-btn plain" onclick="closeSheet()">关闭</button>'
            : '<button class="sheet-btn primary" onclick="submitRate(\'' + no + '\')">提交评价</button>'}`);
}
function pickStar(el, n) {
    el.parentElement.querySelectorAll('.s').forEach((s, i) => s.classList.toggle('active', i < n));
}
function submitRate(no) {
    const o = findOrder(no); if (!o) return;
    const n = document.querySelectorAll('#rateStars .s.active').length;
    if (!n) return showToast('请先选择星级');
    o.rating = n; o.rateText = document.getElementById('rateText').value; o.rated = true;
    addNotification(`评价已提交，感谢你的反馈`, 'system');
    closeSheet(); renderOrders();
    showToast('⭐ 评价成功');
}
function openOrderDetail(no) {
    const o = findOrder(no); if (!o) return;
    const addr = o.address;
    const steps = [
        { t: '提交订单', time: o.createTime, done: true },
        { t: '卖家发货', time: o.shipTime || '', done: ['shipped', 'done'].includes(o.status) },
        { t: '确认收货', time: o.doneTime || '', done: o.status === 'done' },
    ];
    openSub('订单详情', body => {
        body.innerHTML = `
      <div class="card-panel">
        <div style="display:flex;gap:11px;">
          <div class="order-thumb" style="width:58px;height:58px;background-image:url('${o.img}')"></div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:13.5px;font-weight:600;">${o.title}</div>
            <div style="font-size:11px;color:#9ca3af;margin-top:4px;">卖家：${o.seller}</div>
            <div style="color:#ff4d4f;font-weight:700;margin-top:4px;">¥${o.price}</div>
          </div>
        </div>
      </div>
      <div class="card-panel">
        <div style="font-size:13px;font-weight:700;margin-bottom:9px;">收货信息</div>
        <div style="font-size:13px;">${addr.name} · ${addr.phone}</div>
        <div style="font-size:12px;color:#6b7280;margin-top:4px;line-height:1.6;">${addr.campus} ${addr.detail}</div>
      </div>
      <div class="card-panel">
        <div style="font-size:13px;font-weight:700;margin-bottom:10px;">订单进度</div>
        ${steps.map((s, i) => `
          <div style="display:flex;gap:11px;">
            <div style="display:flex;flex-direction:column;align-items:center;">
              <div style="width:11px;height:11px;border-radius:50%;background:${s.done ? '#7c3aed' : '#d1d5db'};"></div>
              ${i < steps.length - 1 ? '<div style="flex:1;width:2px;background:#e5e7eb;margin:2px 0;"></div>' : ''}
            </div>
            <div style="padding-bottom:16px;">
              <div style="font-size:13px;color:${s.done ? '#111827' : '#9ca3af'};font-weight:${s.done ? '600' : '400'};">${s.t}</div>
              <div style="font-size:11px;color:#b6bcc6;margin-top:2px;">${s.done && s.time ? s.time : (s.done ? '已完成' : '待处理')}</div>
            </div>
          </div>`).join('')}
      </div>
      <div class="card-panel" style="font-size:12.5px;color:#6b7280;line-height:2;">
        订单编号：${o.orderNo}<br>
        下单时间：${o.createTime}<br>
        支付方式：校园钱包（模拟）
      </div>`;
    });
}

// ============================================================
// 审核员工作台
// ============================================================
function renderAdminHome() {
    const pending = products.filter(p => p.status === 'pending');
    const online = products.filter(p => p.status === 'online' || !p.status);
    const rejected = products.filter(p => p.status === 'rejected');
    const d = new Date();
    const todayPrefix = `${d.getMonth() + 1}月${d.getDate()}日`;
    const todayDone = auditLog.filter(a => a.time.startsWith(todayPrefix)).length;
    const week = ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
    const dateEl = document.getElementById('admDate');
    if (dateEl) dateEl.textContent = `今天是 ${d.getMonth() + 1}月${d.getDate()}日 · 星期${week} · 加油审核！`;
    document.getElementById('admOverview').innerHTML = [
        { n: pending.length, l: '待审核', tab: 'pending' },
        { n: todayDone, l: '今日已处理', tab: 'pending' },
        { n: online.length, l: '已上架', tab: 'online' },
        { n: rejected.length, l: '已驳回', tab: 'rejected' },
    ].map(x => `<div class="adm-overview-item" onclick="goAuditQueue('${x.tab}')">
      <div class="adm-ov-num">0</div><div class="adm-ov-lbl">${x.l}</div></div>`).join('');
    // 概览数字滚动动画
    const ovNums = document.querySelectorAll('#admOverview .adm-ov-num');
    [pending.length, todayDone, online.length, rejected.length].forEach((n, i) => animateNum(ovNums[i], n));
    const pbox = document.getElementById('admPendingBox');
    if (!pending.length) {
        pbox.innerHTML = `<div class="empty-state" style="padding:24px;">🎉 太棒了，暂无待审核商品</div>`;
    } else {
        pbox.innerHTML = pending.slice(0, 3).map(p => `
        <div class="adm-mini-card">
          <div class="adm-mini-img" style="background-image:url('${p.img}')"></div>
          <div class="adm-mini-info">
            <div class="adm-mini-title">${p.title}</div>
            <div class="adm-mini-sub">${p.seller} · ¥${p.price} · ${p.submitTime || '刚刚'}</div>
          </div>
          <div class="adm-mini-btns">
            <button class="mini-btn ok" onclick="approveProduct(${p.id})">通过</button>
            <button class="mini-btn no" onclick="rejectProduct(${p.id})">驳回</button>
          </div>
        </div>`).join('');
    }
    document.getElementById('admActivityBox').innerHTML = auditLog.slice(0, 6).map(a => `
      <div class="activity-item">
        <div class="activity-dot" style="background:${a.action === 'approve' ? '#10b981' : '#ef4444'};"></div>
        <div>
          <div class="activity-text">${a.action === 'approve' ? '审核通过了' : '审核驳回了'}「${a.title}」</div>
          <div class="activity-time">${a.time}</div>
        </div>
      </div>`).join('');
}
function goAuditQueue(tab) {
    admCurrentTab = tab;
    renderAdmin();
    document.querySelectorAll('.adm-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('onclick').includes("'" + tab + "'"));
    });
    switchPage('admin');
}

// ============================================================
// 通用子页面 / 底部弹层 / 大图
// ============================================================
function openSub(title, fn) {
    document.getElementById('subTitle').textContent = title;
    fn(document.getElementById('subBody'));
    document.getElementById('subMask').classList.add('show');
    histPushOv();
}
function closeSub() {
    document.getElementById('subMask').classList.remove('show');
}
function openSheet(html) {
    document.getElementById('sheetBody').innerHTML = html;
    document.getElementById('sheetMask').classList.add('show');
    histPushOv();
}
function closeSheet() {
    document.getElementById('sheetMask').classList.remove('show');
}
function viewImg(src) {
    document.getElementById('imgViewerImg').src = src;
    document.getElementById('imgViewer').classList.add('show');
    histPushOv();
}
function closeImgViewer() {
    document.getElementById('imgViewer').classList.remove('show');
}

// ============================================================
// 帖子评论
// ============================================================
function getComments(idx) {
    if (!postComments[idx]) {
        postComments[idx] = defaultComments.map(c => Object.assign({ avatar: commentAvatar }, c));
    }
    return postComments[idx];
}
function openComments(idx) {
    const list = getComments(idx);
    openSheet(`
      <div class="sheet-title">全部评论 · ${list.length}</div>
      <div id="cmtList">
        ${list.map(c => `<div class="comment-item">
          <img src="${c.avatar}" alt="" />
          <div style="flex:1;">
            <div class="comment-name">${c.name}</div>
            <div class="comment-text">${c.text}</div>
            <div class="comment-time">${c.time}</div>
          </div>
        </div>`).join('')}
      </div>
      <div class="comment-input-row">
        <input type="text" id="cmtInput" placeholder="友善发言，说点什么…" onkeydown="if(event.key==='Enter')sendComment(${idx})" />
        <button onclick="sendComment(${idx})">发送</button>
      </div>`);
    setTimeout(() => { const i = document.getElementById('cmtInput'); if (i) i.focus(); }, 300);
}
function sendComment(idx) {
    const input = document.getElementById('cmtInput');
    const txt = input.value.trim();
    if (!txt) return;
    getComments(idx).push({ name: profile.name, avatar: profile.avatar, text: txt, time: '刚刚' });
    posts[idx].comments++;
    openComments(idx);
    renderDiscover();
}

// ============================================================
// 我的发布
// ============================================================
function productStatusBadge(p) {
    switch (p.status) {
        case 'pending': return '<span class="ts-badge ts-pending">审核中</span>';
        case 'rejected': return '<span class="ts-badge ts-rejected">已驳回</span>';
        case 'sold': return '<span class="ts-badge ts-sold">已售出</span>';
        case 'offline': return '<span class="ts-badge ts-sold">已下架</span>';
        default: return '<span class="ts-badge ts-online">售卖中</span>';
    }
}
function openMyPublish() {
    openSub('我的发布', body => {
        const list = products.filter(p => p.seller === profile.name);
        if (!list.length) {
            body.innerHTML = `<div class="empty-state"><div class="es-icon">📝</div>
          还没有发布过闲置物品<div style="margin-top:14px;">
          <button class="full-btn" style="width:160px;margin:0 auto;" onclick="closeSub();switchPage('publish')">去发布</button></div></div>`;
            return;
        }
        body.innerHTML = `<div style="font-size:12px;color:#9ca3af;margin-bottom:10px;">共 ${list.length} 件发布</div>` +
            list.map(p => {
                let acts = '';
                if (!p.status || p.status === 'online') {
                    acts = `<button class="order-act-btn" onclick="openDetail(${p.id})">查看</button>
                    <button class="order-act-btn" onclick="setProductStatus(${p.id},'offline')">下架</button>`;
                } else if (p.status === 'pending') {
                    acts = `<button class="order-act-btn" onclick="withdrawProduct(${p.id})">撤回</button>`;
                } else if (p.status === 'rejected') {
                    acts = `<button class="order-act-btn" onclick="viewRejectReason(${p.id})">原因</button>
                    <button class="order-act-btn primary" onclick="resubmitProduct(${p.id})">重新发布</button>`;
                } else if (p.status === 'offline') {
                    acts = `<button class="order-act-btn primary" onclick="setProductStatus(${p.id},'online')">重新上架</button>`;
                } else {
                    acts = `<button class="order-act-btn" onclick="openDetail(${p.id})">查看</button>`;
                }
                return `<div class="order-card">
            <div class="order-card-head"><span>${productStatusBadge(p)}</span>
              <span style="color:#9ca3af;font-size:11px;">${p.submitTime ? '提交于 ' + p.submitTime : ''}</span></div>
            <div class="order-card-body">
              <div class="order-thumb" style="background-image:url('${p.img}')"></div>
              <div class="order-card-info">
                <div class="order-card-title">${p.title}</div>
                <div class="order-card-seller">${p.cat} · ${p.location} · ${p.views}次浏览</div>
              </div>
              <div class="order-card-price"><small style="font-size:11px;">¥</small>${p.price}</div>
            </div>
            <div class="order-card-foot" style="justify-content:flex-end;">
              <span class="order-actions">${acts}</span>
            </div>
          </div>`;
            }).join('');
    });
}
function setProductStatus(id, st) {
    const p = products.find(x => x.id === id); if (!p) return;
    p.status = st;
    closeSub(); renderProducts(); refreshProfileStats();
    showToast(st === 'online' ? '✅ 已重新上架' : '商品已下架');
}
function withdrawProduct(id) {
    const i = products.findIndex(x => x.id === id);
    if (i >= 0) products.splice(i, 1);
    closeSub(); refreshProfileStats();
    showToast('已撤回该发布');
}
function viewRejectReason(id) {
    const p = products.find(x => x.id === id); if (!p) return;
    openSheet(`<div class="sheet-title">驳回原因</div>
      <div style="background:#fef2f2;border-radius:11px;padding:13px;font-size:13px;color:#b91c1c;line-height:1.7;">
        ${p.rejectReason || '商品信息不完整，请修改后重新发布'}</div>
      <div style="font-size:11.5px;color:#9ca3af;margin-top:9px;">审核时间：${p.auditTime || '刚刚'}</div>
      <button class="sheet-btn primary" onclick="closeSheet();resubmitProduct(${id})">修改后重新发布</button>
      <button class="sheet-btn plain" onclick="closeSheet()">我知道了</button>`);
}
function resubmitProduct(id) {
    const p = products.find(x => x.id === id); if (!p) return;
    closeSub();
    uploadImgs = [p.img]; renderUploadGrid();
    document.getElementById('pTitle').value = p.title;
    document.getElementById('pPrice').value = p.price;
    document.getElementById('pDesc').value = p.desc || '';
    updateNameCounter();
    document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.textContent === p.cat));
    switchPage('publish');
    showToast('已填入原信息，修改后提交即可');
}

// ============================================================
// 我的收藏
// ============================================================
function openMyFavorites() {
    openSub('我的收藏', body => {
        const list = favoriteIds.map(id => products.find(p => p.id === id)).filter(Boolean);
        if (!list.length) {
            body.innerHTML = `<div class="empty-state"><div class="es-icon">💛</div>
          还没有收藏商品，看到喜欢的点个小心心吧</div>`;
            return;
        }
        body.innerHTML = list.map(p => `
        <div class="order-card" onclick="closeSub();openDetail(${p.id})">
          <div class="order-card-body">
            <div class="order-thumb" style="background-image:url('${p.img}')"></div>
            <div class="order-card-info">
              <div class="order-card-title">${p.title}</div>
              <div class="order-card-seller">${p.seller} · ${p.location}</div>
            </div>
            <div class="order-card-price"><small style="font-size:11px;">¥</small>${p.price}</div>
          </div>
          <div class="order-card-foot" style="justify-content:flex-end;">
            <span class="order-actions"><button class="order-act-btn"
              onclick="event.stopPropagation();toggleFav(${p.id},null);openMyFavorites()">取消收藏</button></span>
          </div>
        </div>`).join('');
    });
}

// ============================================================
// 浏览记录
// ============================================================
function openViewHistory() {
    openSub('浏览记录', body => {
        if (!viewedProducts.length) {
            body.innerHTML = `<div class="empty-state"><div class="es-icon">🕐</div>还没有浏览记录</div>`;
            return;
        }
        body.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <span style="font-size:12px;color:#9ca3af;">共 ${viewedProducts.length} 条记录</span>
          <span style="font-size:12px;color:#ef4444;" onclick="clearViewHistory()">清空</span>
        </div>` + viewedProducts.map(v => {
            const p = products.find(x => x.id === v.id);
            if (!p) return '';
            return `<div class="order-card">
            <div class="order-card-body" onclick="closeSub();openDetail(${p.id})">
              <div class="order-thumb" style="background-image:url('${p.img}')"></div>
              <div class="order-card-info">
                <div class="order-card-title">${p.title}</div>
                <div class="order-card-seller">浏览于 ${v.time}</div>
              </div>
              <div class="order-card-price"><small style="font-size:11px;">¥</small>${p.price}</div>
            </div>
            <div class="order-card-foot" style="justify-content:flex-end;">
              <span class="order-actions"><button class="order-act-btn"
                onclick="removeView(${p.id})">删除</button></span>
            </div>
          </div>`;
        }).join('');
    });
}
function removeView(id) {
    const i = viewedProducts.findIndex(v => v.id === id);
    if (i >= 0) viewedProducts.splice(i, 1);
    refreshProfileStats(); openViewHistory();
}
function clearViewHistory() {
    viewedProducts = [];
    refreshProfileStats();
    openSub('浏览记录', body => {
        body.innerHTML = `<div class="empty-state"><div class="es-icon">🕐</div>浏览记录已清空</div>`;
    });
}

// ============================================================
// 收货地址
// ============================================================
function openAddresses() {
    openSub('收货地址', body => {
        body.innerHTML = addresses.map(a => `
        <div class="card-panel">
          <div style="display:flex;align-items:center;gap:7px;">
            <span style="font-size:14px;font-weight:700;">${a.name}</span>
            <span style="font-size:12px;color:#6b7280;">${a.phone}</span>
            ${a.isDefault ? '<span class="ts-badge" style="background:#ede9fe;color:#7c3aed;">默认</span>' : ''}
          </div>
          <div style="font-size:12.5px;color:#6b7280;margin-top:7px;line-height:1.6;">
            ${a.campus} ${a.detail}</div>
          <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:10px;">
            ${a.isDefault ? '' : `<button class="order-act-btn" onclick="setDefaultAddr(${a.id})">设为默认</button>`}
            <button class="order-act-btn" onclick="editAddress(${a.id})">编辑</button>
            <button class="order-act-btn" style="color:#ef4444;" onclick="deleteAddress(${a.id})">删除</button>
          </div>
        </div>`).join('') +
            `<button class="full-btn" onclick="editAddress(null)">+ 新增收货地址</button>`;
    });
}
function addressForm(a) {
    return `
      <div class="form-row">
        <label class="form-label">收货人</label>
        <input class="form-input" id="afName" value="${a ? a.name : ''}" placeholder="请输入收货人姓名" />
      </div>
      <div class="form-row">
        <label class="form-label">手机号</label>
        <input class="form-input" id="afPhone" value="${a ? a.phone : ''}" placeholder="请输入手机号" />
      </div>
      <div class="form-row">
        <label class="form-label">所在校区</label>
        <div class="choice-row" id="afCampus">
          ${['奉贤校区', '徐汇校区', '国权路校区'].map(c =>
        `<span class="choice-chip ${a && a.campus === c ? 'active' : ''}" onclick="this.parentNode.querySelectorAll('.choice-chip').forEach(x=>x.classList.remove('active'));this.classList.add('active')">${c}</span>`).join('')}
        </div>
      </div>
      <div class="form-row">
        <label class="form-label">详细地址</label>
        <textarea class="form-input" id="afDetail" rows="2" placeholder="宿舍楼/房间号或快递代收点">${a ? a.detail : ''}</textarea>
      </div>
      <button class="full-btn purple" onclick="saveAddress(${a ? a.id : 'null'})">保存地址</button>`;
}
function editAddress(id) {
    const a = id ? addresses.find(x => x.id === id) : null;
    openSub(id ? '编辑地址' : '新增地址', body => body.innerHTML = addressForm(a));
}
function saveAddress(id) {
    const name = document.getElementById('afName').value.trim();
    const phone = document.getElementById('afPhone').value.trim();
    const campus = document.querySelector('#afCampus .choice-chip.active');
    const detail = document.getElementById('afDetail').value.trim();
    if (!name) return showToast('请填写收货人');
    if (!/^1\d{10}$/.test(phone.replace(/\*/g, '0'))) return showToast('请填写正确的手机号');
    if (!campus) return showToast('请选择校区');
    if (!detail) return showToast('请填写详细地址');
    if (id) {
        const a = addresses.find(x => x.id === id);
        Object.assign(a, { name, phone, campus: campus.textContent, detail });
    } else {
        addresses.push({ id: Date.now(), name, phone, campus: campus.textContent, detail, isDefault: !addresses.length });
    }
    updateAddrCount();
    showToast('✅ 地址已保存');
    openAddresses();
}
function deleteAddress(id) {
    const i = addresses.findIndex(a => a.id === id);
    if (i >= 0) addresses.splice(i, 1);
    if (addresses.length && !addresses.some(a => a.isDefault)) addresses[0].isDefault = true;
    updateAddrCount();
    openAddresses();
}
function setDefaultAddr(id) {
    addresses.forEach(a => a.isDefault = a.id === id);
    showToast('已设为默认地址');
    openAddresses();
}
function updateAddrCount() {
    const el = document.getElementById('addrCountText');
    if (el) el.textContent = addresses.length + '个地址';
}

// ============================================================
// 帮助与反馈
// ============================================================
const FAQ = [
    { q: '如何发布闲置物品？', a: '点击底部「发布」按钮，上传商品图片、填写名称、价格和描述后提交。商品需经审核员审核通过后才会在首页展示。' },
    { q: '购买后多久能收到货？', a: '面交商品可与卖家约定时间地点；需要邮寄的商品，卖家一般会在24小时内发货，校内快递通常1-2天送达。可在「我的订单」查看物流。' },
    { q: '商品与描述不符怎么办？', a: '请在确认收货前联系卖家协商，也可以在订单详情中申请平台介入。已完成的订单可在7天内通过「帮助与反馈」提交售后申请。' },
    { q: '哪些商品不能发布？', a: '违禁品、食品、虚拟账号、高仿假货、易燃易爆物品等均不允许发布，具体可查看《用户协议》。违规商品将被审核员驳回。' },
    { q: '如何修改或下架商品？', a: '进入「我的-我的发布」，可对在售商品进行下架、重新上架，被驳回的商品可查看原因并修改后重新发布。' },
];
function openHelp() {
    openSub('帮助与反馈', body => {
        body.innerHTML = `
        <div class="card-panel" style="background:linear-gradient(135deg,#eef2ff,#faf5ff);">
          <div style="font-size:14px;font-weight:700;">需要人工帮助？</div>
          <div style="font-size:12px;color:#6b7280;margin-top:6px;line-height:1.8;">
            客服 QQ 群：81234567<br>服务时间：工作日 9:00-21:00</div>
        </div>
        <div style="font-size:13px;font-weight:700;margin:4px 0 9px;">常见问题</div>
        ${FAQ.map((f, i) => `
          <div class="faq-item">
            <div class="faq-q" onclick="this.parentNode.classList.toggle('open')">
              <span>${f.q}</span><span class="faq-arrow">⌄</span></div>
            <div class="faq-a">${f.a}</div>
          </div>`).join('')}
        <div style="font-size:13px;font-weight:700;margin:16px 0 9px;">意见反馈</div>
        <div class="card-panel">
          <div class="choice-row" id="fbType">
            ${['功能建议', '商品举报', '交易纠纷', '其他'].map((t, i) =>
            `<span class="choice-chip ${i === 0 ? 'active' : ''}" onclick="this.parentNode.querySelectorAll('.choice-chip').forEach(x=>x.classList.remove('active'));this.classList.add('active')">${t}</span>`).join('')}
          </div>
          <textarea id="fbText" class="form-input" rows="3" placeholder="请详细描述你遇到的问题或建议…" style="margin-top:12px;"></textarea>
          <button class="full-btn purple" style="margin-top:12px;" onclick="submitFeedback()">提交反馈</button>
        </div>`;
    });
}
function submitFeedback() {
    const txt = document.getElementById('fbText').value.trim();
    if (!txt) return showToast('请填写反馈内容');
    const type = document.querySelector('#fbType .choice-chip.active').textContent;
    addNotification(`你的${type}已收到，我们会尽快处理（工单编号 ST${Date.now().toString().slice(-6)}）`, 'system');
    showToast('✅ 反馈已提交，感谢你！');
    closeSub();
}

// ============================================================
// 资料编辑
// ============================================================
function openEditProfile() {
    openSub('编辑资料', body => {
        body.innerHTML = `
        <div class="card-panel" style="display:flex;align-items:center;gap:13px;" onclick="openChangeAvatar()">
          <img src="${profile.avatar}" style="width:52px;height:52px;border-radius:50%;" alt="" />
          <div style="flex:1;">
            <div style="font-size:14px;font-weight:600;">点击更换头像</div>
            <div style="font-size:11.5px;color:#9ca3af;margin-top:3px;">支持选择预设头像</div>
          </div>
          <span style="color:#c7c9cf;">›</span>
        </div>
        <div class="card-panel">
          <div class="form-row">
            <label class="form-label">昵称</label>
            <input class="form-input" id="epName" value="${profile.name}" maxlength="12" />
          </div>
          <div class="form-row" style="margin-bottom:0;">
            <label class="form-label">个人简介</label>
            <textarea class="form-input" id="epBio" rows="3" maxlength="60">${profile.bio}</textarea>
          </div>
        </div>
        <button class="full-btn" onclick="saveEditProfile()">保存</button>`;
    });
}
function saveEditProfile() {
    const name = document.getElementById('epName').value.trim();
    const bio = document.getElementById('epBio').value.trim();
    if (!name) return showToast('昵称不能为空');
    profile.name = name; profile.bio = bio;
    refreshProfileRole();
    closeSub();
    showToast('✅ 资料已保存');
}
function openChangeAvatar() {
    const seeds = [
        'portrait%20young%20asian%20female%20college%20student%20smiling%20headshot',
        'portrait%20young%20asian%20male%20college%20student%20glasses%20headshot',
        'portrait%20young%20asian%20girl%20student%20short%20hair%20headshot',
        'portrait%20young%20asian%20boy%20student%20hoodie%20headshot',
        'cute%20cartoon%20cat%20avatar%20illustration%20minimal',
        'cute%20cartoon%20shiba%20dog%20avatar%20illustration'
    ];
    const list = seeds.map(s => `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${s}&image_size=square`);
    openSheet(`<div class="sheet-title">选择头像</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:6px 0 10px;">
        ${list.map(src => `<img src="${src}" onclick="chooseAvatar('${src}')"
          style="width:100%;border-radius:50%;${src === profile.avatar ? 'box-shadow:0 0 0 3px #7c3aed;' : ''}" alt="" />`).join('')}
      </div>
      <button class="sheet-btn plain" onclick="closeSheet()">取消</button>`);
}
function chooseAvatar(src) {
    profile.avatar = src;
    ['.profile-avatar img', '.acct-avatar img', '.acct-mini-avatar'].forEach(sel => {
        document.querySelectorAll(sel).forEach(img => img.src = src);
    });
    refreshProfileRole();
    closeSheet();
    showToast('✅ 头像已更换');
    if (document.getElementById('subMask').classList.contains('show')) openEditProfile();
}
function openEditName() {
    openSub('修改昵称', body => {
        body.innerHTML = `<div class="card-panel">
        <input class="form-input" id="nmInput" value="${profile.name}" maxlength="12" />
        <div style="font-size:11px;color:#9ca3af;margin-top:8px;">昵称 2-12 个字符，30天内可修改一次</div>
      </div>
      <button class="full-btn" onclick="saveName()">保存</button>`;
    });
}
function saveName() {
    const v = document.getElementById('nmInput').value.trim();
    if (v.length < 2) return showToast('昵称至少2个字符');
    profile.name = v;
    refreshProfileRole();
    closeSub();
    showToast('✅ 昵称已修改');
}
function openChangePassword() {
    openSub('修改密码', body => {
        body.innerHTML = `<div class="card-panel">
        <div class="form-row"><label class="form-label">当前密码</label>
          <input type="password" class="form-input" id="pwOld" placeholder="请输入当前密码" /></div>
        <div class="form-row"><label class="form-label">新密码</label>
          <input type="password" class="form-input" id="pwNew" placeholder="6-20位，建议字母+数字" /></div>
        <div class="form-row" style="margin-bottom:0;"><label class="form-label">确认新密码</label>
          <input type="password" class="form-input" id="pwNew2" placeholder="再次输入新密码" /></div>
      </div>
      <button class="full-btn" onclick="savePassword()">确认修改</button>`;
    });
}
function savePassword() {
    const oldp = document.getElementById('pwOld').value;
    const p1 = document.getElementById('pwNew').value;
    const p2 = document.getElementById('pwNew2').value;
    if (!oldp) return showToast('请输入当前密码');
    if (p1.length < 6) return showToast('新密码至少6位');
    if (p1 !== p2) return showToast('两次输入不一致');
    closeSub();
    showToast('✅ 密码修改成功');
}

// ============================================================
// 通知 / 隐私 / 消息设置
// ============================================================
function sw(key) {
    return `<button class="mini-switch ${settings[key] ? 'on' : ''}" onclick="toggleSetting('${key}',this)">
      <span class="k"></span></button>`;
}
function toggleSetting(key, el) {
    settings[key] = !settings[key];
    el.classList.toggle('on', settings[key]);
}
function settingRow(ic, color, title, sub, key) {
    return `<div class="card-panel" style="display:flex;align-items:center;gap:11px;margin-bottom:9px;padding:12px 14px;">
      <div style="width:32px;height:32px;border-radius:9px;background:${color};display:flex;align-items:center;justify-content:center;flex-shrink:0;">${ic}</div>
      <div style="flex:1;"><div style="font-size:13.5px;font-weight:600;">${title}</div>
        <div style="font-size:11px;color:#9ca3af;margin-top:2px;">${sub}</div></div>
      ${sw(key)}</div>`;
}
function openNotifSettings() {
    openSub('消息通知', body => {
        body.innerHTML =
            settingRow('🔔', '#dbeafe', '交易消息', '订单状态、议价、发货提醒', 'trade') +
            settingRow('📢', '#f3e8ff', '系统公告', '平台活动与通知推送', 'system') +
            settingRow('❤️', '#fee2e2', '点赞与收藏', '帖子被点赞或收藏时提醒', 'like') +
            settingRow('💬', '#dcfce7', '评论与@', '收到评论或@时提醒', 'comment') +
            `<div style="font-size:11px;color:#9ca3af;padding:6px 4px;">关闭后仍可在「消息」页手动查看全部消息</div>`;
    });
}
function openPrivacy() {
    openSub('隐私设置', body => {
        body.innerHTML =
            settingRow('🟢', '#dcfce7', '显示在线状态', '其他用户可看到你是否在线', 'showOnline') +
            settingRow('✉️', '#dbeafe', '允许陌生人私信', '关闭后仅同校认证用户可联系你', 'allowStranger') +
            `<div class="card-panel" style="margin-top:4px;">
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:13.5px;"
            onclick="showToast('当前缓存 12.6 MB，已为你清理')">
            <span>清除缓存</span><span style="color:#9ca3af;font-size:12px;">12.6 MB ›</span></div>
          <div style="height:1px;background:#f3f4f6;margin:12px 0;"></div>
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:13.5px;"
            onclick="openDoc('第三方信息共享清单')">
            <span>第三方信息共享清单</span><span style="color:#c7c9cf;">›</span></div>
          <div style="height:1px;background:#f3f4f6;margin:12px 0;"></div>
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:13.5px;color:#ef4444;"
            onclick="confirmCancelAccount()">
            <span>注销账号</span><span>›</span></div>
        </div>`;
    });
}
function confirmCancelAccount() {
    openSheet(`<div class="sheet-title">注销账号</div>
      <div style="font-size:13px;color:#4b5563;line-height:1.8;padding:4px 2px;">
        注销后账号信息、订单记录将被清空且无法恢复。确定继续吗？</div>
      <button class="sheet-btn danger" onclick="closeSheet();showToast('演示环境：注销申请已取消')">确认注销</button>
      <button class="sheet-btn plain" onclick="closeSheet()">我再想想</button>`);
}
function openMsgSettings() {
    openSheet(`<div class="sheet-title">消息设置</div>
      <div class="sheet-item" onclick="closeSheet();openNotifSettings()">
        <span class="si-label">通知与免提醒</span><span>›</span></div>
      <div class="sheet-item" onclick="closeSheet();openPrivacy()">
        <span class="si-label">隐私与私信权限</span><span>›</span></div>
      <div class="sheet-item" onclick="confirmClearChats()">
        <span class="si-label" style="color:#ef4444;">清空全部聊天记录</span><span>›</span></div>
      <button class="sheet-btn plain" onclick="closeSheet()">取消</button>`);
}
function confirmClearChats() {
    openSheet(`<div class="sheet-title">清空聊天记录</div>
      <div style="font-size:13px;color:#4b5563;padding:4px 2px 8px;">清空后所有会话消息将无法恢复，确定清空吗？</div>
      <button class="sheet-btn danger" onclick="closeSheet();showToast('聊天记录已清空')">确认清空</button>
      <button class="sheet-btn plain" onclick="closeSheet()">取消</button>`);
}

// ============================================================
// 版本信息 / 协议文档
// ============================================================
function openVersion() {
    openSub('关于上商淘', body => {
        body.innerHTML = `
        <div style="text-align:center;padding:22px 0 14px;">
          <img src="logo.png" style="width:70px;height:70px;border-radius:18px;" alt="logo"
            onerror="this.src='https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=app%20icon%20blue%20shopping%20bag%20minimal%20logo&image_size=square'" />
          <div style="font-size:16px;font-weight:700;margin-top:11px;">上商淘</div>
          <div style="font-size:12px;color:#9ca3af;margin-top:4px;">Version 2.3.1</div>
        </div>
        <div class="card-panel">
          <div style="font-size:13.5px;font-weight:700;margin-bottom:8px;">更新日志</div>
          <div style="font-size:12.5px;color:#4b5563;line-height:1.9;">
            · 全新审核员工作台，审核效率翻倍<br>
            · 我的订单支持物流跟踪与评价<br>
            · 优化首页筛选与商品搜索体验<br>
            · 修复已知问题，提升稳定性</div>
        </div>
        <button class="full-btn" onclick="showToast('当前已是最新版本')">检查更新</button>
        <div style="text-align:center;font-size:11px;color:#b6bcc6;margin-top:14px;line-height:1.8;">
          上海商学院校园二手交易平台<br>黑客松参赛作品 · Made with ❤️</div>`;
    });
}
const DOCS = {
    '用户协议': [
        ['一、服务说明', '上商淘是面向上海商学院在校师生的校园二手物品交易信息平台。平台仅提供信息发布与交易辅助服务，交易双方应遵守诚实信用原则。'],
        ['二、用户义务', '用户应使用真实校园身份注册，不得发布法律法规及平台规则禁止的商品，包括但不限于：违禁品、假冒商品、食品药品、虚拟账号、论文代写等。'],
        ['三、商品审核', '用户发布的商品需经平台审核员审核通过后方可展示。审核通常在24小时内完成，被驳回的商品可在修改后重新提交。'],
        ['四、交易规范', '买卖双方应按约定完成交易。面交建议选择校内公共场所；邮寄交易请保留物流凭证。发生纠纷可申请平台介入。'],
        ['五、其他', '本协议最终解释权归上商淘团队所有，平台有权根据运营需要更新本协议内容。'],
    ],
    '隐私政策': [
        ['一、信息收集', '为完成校园身份认证，我们会收集你的手机号、学号（选填）及你主动发布的商品信息。我们不会收集与服务无关的个人信息。'],
        ['二、信息使用', '你的信息仅用于身份验证、交易沟通、订单处理与安全风控。未经你的同意，我们不会向第三方出售你的个人信息。'],
        ['三、信息存储', '你的数据存储于安全的服务器中，我们采用加密传输与访问控制等措施保障信息安全。'],
        ['四、你的权利', '你可以随时查看、修改个人资料，管理消息通知与隐私设置，也可以申请注销账号并删除个人数据。'],
    ],
    '第三方信息共享清单': [
        ['共享说明', '为实现登录验证、图片存储与消息推送，我们使用了短信服务、对象存储与云服务器等基础能力。相关服务商仅在必要范围内处理数据并承担保密义务。'],
        ['联系方式', '如对个人信息处理有任何疑问，可通过「帮助与反馈」与我们联系。'],
    ]
};
function openDoc(title) {
    const doc = DOCS[title] || [['说明', '文档建设中']];
    openSub(title, body => {
        body.innerHTML = `<div class="card-panel"><div class="doc-body">
        <p style="color:#9ca3af;font-size:12px;">更新日期：2026年6月 · 生效中</p>
        ${doc.map(([h, p]) => `<h3>${h}</h3><p>${p}</p>`).join('')}
      </div></div>`;
    });
}

// ============================================================
// 高级筛选 / 全部分类
// ============================================================
function openFilterSheet() {
    const cats = [null, '教材', '服饰', '数码', '生活'];
    const sorts = [['all', '综合'], ['new', '最新'], ['price', '价格'], ['near', '离我最近']];
    const priceChips = [
        { l: '不限', min: null, max: null },
        { l: '¥50以下', min: null, max: 50 },
        { l: '¥50-200', min: 50, max: 200 },
        { l: '¥200以上', min: 200, max: null },
    ];
    const priceActive = filterState.minPrice === null && filterState.maxPrice === null ? 0
        : filterState.maxPrice === 50 ? 1 : filterState.minPrice === 50 ? 2 : 3;
    openSheet(`
      <div class="sheet-title">筛选商品</div>
      <div style="font-size:12.5px;font-weight:600;margin:4px 0 8px;">商品分类</div>
      <div class="choice-row" id="flCat">
        ${cats.map(c => `<span class="choice-chip ${currentCat === c ? 'active' : ''}"
          onclick="this.parentNode.querySelectorAll('.choice-chip').forEach(x=>x.classList.remove('active'));this.classList.add('active')"
          data-cat="${c || ''}">${c || '全部'}</span>`).join('')}
      </div>
      <div style="font-size:12.5px;font-weight:600;margin:14px 0 8px;">价格区间</div>
      <div class="choice-row" id="flPrice">
        ${priceChips.map((p, i) => `<span class="choice-chip ${i === priceActive ? 'active' : ''}"
          onclick="pickPriceChip(this,${p.min === null ? 'null' : p.min},${p.max === null ? 'null' : p.max})">${p.l}</span>`).join('')}
      </div>
      <div style="display:flex;gap:8px;margin-top:10px;">
        <input class="form-input" id="flMin" type="number" placeholder="最低价" value="${filterState.minPrice === null ? '' : filterState.minPrice}" />
        <input class="form-input" id="flMax" type="number" placeholder="最高价" value="${filterState.maxPrice === null ? '' : filterState.maxPrice}" />
      </div>
      <div style="font-size:12.5px;font-weight:600;margin:14px 0 8px;">排序方式</div>
      <div class="choice-row" id="flSort">
        ${sorts.map(([v, l]) => `<span class="choice-chip ${currentSort === v ? 'active' : ''}"
          onclick="this.parentNode.querySelectorAll('.choice-chip').forEach(x=>x.classList.remove('active'));this.classList.add('active')"
          data-sort="${v}">${l}</span>`).join('')}
      </div>
      <button class="sheet-btn plain" onclick="resetFilter()">重置筛选</button>
      <button class="sheet-btn primary" onclick="applyFilter()">查看结果</button>`);
}
function pickPriceChip(el, min, max) {
    el.parentNode.querySelectorAll('.choice-chip').forEach(x => x.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('flMin').value = min === null ? '' : min;
    document.getElementById('flMax').value = max === null ? '' : max;
}
function applyFilter() {
    const cat = document.querySelector('#flCat .choice-chip.active');
    const sort = document.querySelector('#flSort .choice-chip.active');
    const minv = document.getElementById('flMin').value;
    const maxv = document.getElementById('flMax').value;
    currentCat = cat && cat.dataset.cat ? cat.dataset.cat : null;
    currentSort = sort ? sort.dataset.sort : 'all';
    filterState.minPrice = minv === '' ? null : Number(minv);
    filterState.maxPrice = maxv === '' ? null : Number(maxv);
    if (filterState.minPrice !== null && filterState.maxPrice !== null && filterState.minPrice > filterState.maxPrice) {
        return showToast('最低价不能高于最高价');
    }
    // 同步首页分类高亮
    document.querySelectorAll('.cat-item').forEach(c => {
        c.style.opacity = (!currentCat || c.dataset.cat === currentCat) ? '1' : '.4';
    });
    document.querySelectorAll('#filterTabs .tab').forEach(t => {
        t.classList.toggle('active', t.dataset.sort === currentSort);
    });
    closeSheet(); renderProducts();
    showToast('筛选已应用');
}
function resetFilter() {
    currentCat = null; currentSort = 'all';
    filterState.minPrice = null; filterState.maxPrice = null;
    document.getElementById('flMin').value = '';
    document.getElementById('flMax').value = '';
    document.querySelectorAll('#sheetMask .choice-chip').forEach((x, i) => {
        x.classList.remove('active');
    });
    const firsts = document.querySelectorAll('#flCat .choice-chip,#flPrice .choice-chip,#flSort .choice-chip');
    document.querySelector('#flCat .choice-chip').classList.add('active');
    document.querySelector('#flPrice .choice-chip').classList.add('active');
    document.querySelector('#flSort .choice-chip').classList.add('active');
    document.querySelectorAll('.cat-item').forEach(c => c.style.opacity = '1');
    document.querySelectorAll('#filterTabs .tab').forEach(t => t.classList.toggle('active', t.dataset.sort === 'all'));
    renderProducts();
}
function openAllCategories() {
    const cats = [
        ['教材教辅', '📚'], ['服饰鞋包', '👕'], ['数码电子', '💻'], ['生活用品', '🧴'],
        ['运动户外', '⚽'], ['美妆护肤', '💄'], ['乐器音响', '🎸'], ['其他闲置', '📦']
    ];
    openSheet(`<div class="sheet-title">全部分类</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;padding:6px 0;">
        ${cats.map(([l, ic]) => `<div onclick="pickCategory('${l}')"
          style="text-align:center;font-size:11px;color:#4b5563;">
          <div style="width:46px;height:46px;border-radius:14px;background:#f3f4f6;margin:0 auto 6px;display:flex;align-items:center;justify-content:center;font-size:21px;">${ic}</div>
          ${l}</div>`).join('')}
      </div>
      <button class="sheet-btn plain" onclick="closeSheet()">取消</button>`);
}
function pickCategory(cat) {
    // 映射到已有分类，无对应商品的分类给出空结果提示
    const map = { '教材教辅': '教材', '服饰鞋包': '服饰', '数码电子': '数码', '生活用品': '生活' };
    currentCat = map[cat] || cat;
    document.querySelectorAll('.cat-item').forEach(c => {
        c.style.opacity = (!currentCat || c.dataset.cat === currentCat) ? '1' : '.4';
    });
    closeSheet(); renderProducts();
    showToast('已进入：' + cat);
}

// ============================================================
// 帖子更多 / 分享 / Banner / 第三方登录
// ============================================================
function openPostMore(idx) {
    openSheet(`<div class="sheet-title">更多操作</div>
      <div class="sheet-item" onclick="closeSheet();showToast('已收藏该帖子')">
        <span>⭐</span><span class="si-label">收藏帖子</span></div>
      <div class="sheet-item" onclick="copyLink()">
        <span>🔗</span><span class="si-label">复制链接</span></div>
      <div class="sheet-item" onclick="closeSheet();showToast('已静音，不再接收该帖通知')">
        <span>🔕</span><span class="si-label">消息免打扰</span></div>
      <div class="sheet-item" onclick="closeSheet();showToast('将减少此类内容推荐')">
        <span>🙈</span><span class="si-label">不感兴趣</span></div>
      <div class="sheet-item" onclick="reportPost(${idx})" style="color:#ef4444;">
        <span>🚩</span><span class="si-label">举报</span></div>
      <button class="sheet-btn plain" onclick="closeSheet()">取消</button>`);
}
function copyLink() {
    const link = location.origin + '/discover?post=' + Date.now();
    if (navigator.clipboard) {
        navigator.clipboard.writeText(link).then(() => showToast('链接已复制')).catch(() => showToast('链接已复制：' + link));
    } else showToast('链接已复制');
    closeSheet();
}
function reportPost(idx) {
    const reasons = ['垃圾广告', '色情低俗', '虚假信息', '违禁物品', '人身攻击', '其他'];
    openSheet(`<div class="sheet-title">举报原因</div>
      ${reasons.map(r => `<div class="sheet-item"
        onclick="closeSheet();showToast('举报已受理，我们会尽快核实处理')">
        <span class="si-label">${r}</span><span style="color:#c7c9cf;">›</span></div>`).join('')}
      <button class="sheet-btn plain" onclick="closeSheet()">取消</button>`);
}
function openShare(text) {
    const targets = [
        ['微信好友', '💬', '#07c160'], ['朋友圈', '🌐', '#1aad19'], ['QQ', '🐧', '#12b7f5'],
        ['校园墙', '🧱', '#f59e0b'], ['复制链接', '🔗', '#6b7280']
    ];
    openSheet(`<div class="sheet-title">分享到</div>
      <div style="display:flex;gap:6px;overflow-x:auto;padding:8px 0 12px;">
        ${targets.map(([l, ic, c]) => `<div onclick="doShare('${l}')"
          style="flex-shrink:0;width:62px;text-align:center;font-size:11px;color:#4b5563;">
          <div style="width:48px;height:48px;border-radius:50%;background:${c}1f;color:${c};margin:0 auto 6px;display:flex;align-items:center;justify-content:center;font-size:22px;">${ic}</div>${l}</div>`).join('')}
      </div>
      <div style="background:#f9fafb;border-radius:10px;padding:10px 12px;font-size:12px;color:#6b7280;max-height:70px;overflow:hidden;">${text}</div>
      <button class="sheet-btn plain" onclick="closeSheet()">取消</button>`);
}
function doShare(t) {
    closeSheet();
    if (t === '复制链接') copyLink();
    else showToast('✅ 已分享到' + t);
}
function openBanner(i) {
    const data = [
        { title: '春季焕新 · 毕业季好物流转', desc: '精选毕业生闲置好物，台灯、书架、收纳盒低至 3 折，校内面交更安心。', cat: null },
        { title: '教材回收计划', desc: '高数、英语、考研真题专区，低价淘好书，让知识循环起来。', cat: '教材' },
        { title: '潮流穿搭专场', desc: '学长学姐的品牌闲置，优衣库/Nike/ZARA 超低价格，尺码先到先得。', cat: '服饰' },
    ][i];
    openSheet(`<div class="sheet-title">${data.title}</div>
      <div style="font-size:13px;color:#4b5563;line-height:1.8;padding:4px 0 10px;">${data.desc}</div>
      <button class="sheet-btn primary" onclick="closeSheet();openBannerList('${data.cat || ''}')">查看相关商品</button>
      <button class="sheet-btn plain" onclick="closeSheet()">以后再说</button>`);
}
function openBannerList(cat) {
    if (cat) {
        currentCat = cat;
        document.querySelectorAll('.cat-item').forEach(c => {
            c.style.opacity = c.dataset.cat === cat ? '1' : '.4';
        });
    }
    switchPage('home');
}
function thirdLogin(platform) {
    openSheet(`<div class="sheet-title">${platform}快捷登录</div>
      <div style="display:flex;flex-direction:column;align-items:center;padding:10px 0 14px;">
        <div style="font-size:40px;">${platform === '微信' ? '💬' : platform === 'QQ' ? '🐧' : '🎫'}</div>
        <div style="font-size:13px;color:#4b5563;margin-top:10px;text-align:center;line-height:1.8;">
          将使用 ${platform} 账号登录<br>并自动绑定你的上商校园身份</div>
      </div>
      <button class="sheet-btn primary" onclick="doThirdLogin()">授权并登录</button>
      <button class="sheet-btn plain" onclick="closeSheet()">取消</button>`);
}
function doThirdLogin() {
    selectRole('user');
    closeSheet();
    document.getElementById('loginMask').classList.add('hide');
    renderProducts();
    switchPage('home');
    showToast('✅ 第三方登录成功');
}

// ===== Toast =====
let toastTimer;
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 1800);
}

// ===== Banner 轮播 =====
let bannerIdx = 0;
const banners = document.querySelectorAll('.banner');
const dots = document.querySelectorAll('.dot');
setInterval(() => {
    banners[bannerIdx].classList.remove('active');
    dots[bannerIdx].classList.remove('active');
    bannerIdx = (bannerIdx + 1) % banners.length;
    banners[bannerIdx].classList.add('active');
    dots[bannerIdx].classList.add('active');
}, 3500);

// ===== 初始化 =====
restore();   // 恢复本地持久化数据（商品/订单/收藏等）
// 首屏骨架屏（提升加载体验）
(function () {
    let skel = '';
    for (let i = 0; i < 6; i++) {
        skel += '<div class="skel-card"><div class="skel skel-img"></div><div class="skel skel-line"></div><div class="skel skel-line short"></div></div>';
    }
    const grid = document.getElementById('productGrid');
    if (grid) grid.innerHTML = '<div class="skel-wrap" style="grid-column:1/-1;padding:0;">' + skel + '</div>';
})();
setTimeout(() => {
    renderProducts();
    renderDiscover();
    renderMessages();
    renderAdminHome();
    refreshProfileStats();
    updateNotificationBadge();
}, 620);
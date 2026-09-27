// 临时脚本：为 front.js 注入 API 客户端层 + 改造核心函数调用后端
const fs = require('fs');
const file = 'd:/test/front.js';
let s = fs.readFileSync(file, 'utf8');
let changed = 0;
function rep(oldStr, newStr, tag) {
    if (!s.includes(oldStr)) { console.log('MISS: ' + tag); return; }
    s = s.replace(oldStr, newStr);
    changed++;
}

// ---------- 1. API 客户端层（插在数据定义之前） ----------
const apiClient = `// ============================================================
// API 客户端层：优先连接后端 MySQL，失败自动降级为本地模拟模式
// ============================================================
const API_BASE = location.origin;
let apiToken = localStorage.getItem('st_token') || '';
let apiOnline = false;   // 后端是否可用（启动时健康检查）
let apiUser = null;      // 后端返回的用户 {id, phone, nickname, role}

// 通用请求封装：自动带 Token
async function apiFetch(path, opts) {
    opts = opts || {};
    if (!opts.headers) opts.headers = {};
    if (apiToken) opts.headers['Authorization'] = 'Bearer ' + apiToken;
    if (opts.body && !(opts.body instanceof FormData)) {
        opts.headers['Content-Type'] = 'application/json';
        if (typeof opts.body !== 'string') opts.body = JSON.stringify(opts.body);
    }
    const res = await fetch(API_BASE + path, opts);
    return await res.json().catch(() => ({ code: -1 }));
}

// 启动时健康检查 + 从后端同步数据（覆盖本地 mock）
async function initApiSync() {
    try {
        const h = await fetch(API_BASE + '/api/health');
        const j = await h.json();
        if (j.code === 0) {
            apiOnline = true;
            console.log('[API] 后端已连接（MySQL 模式）');
            await syncProductsFromServer();
        }
    } catch (e) {
        apiOnline = false;
        console.log('[API] 后端未启动，使用本地模拟模式');
    }
}

// 从后端拉取商品，映射为前端数据格式
async function syncProductsFromServer() {
    try {
        const res = await apiFetch('/api/products?sort=new');
        if (res.code === 0 && Array.isArray(res.data) && res.data.length) {
            const localOnly = products.filter(p => p.localOnly);
            products.length = 0;
            res.data.forEach(db => {
                products.push({
                    id: db.id,
                    cat: db.category || '其他',
                    title: db.title,
                    price: Number(db.price),
                    img: db.cover_image || '',
                    seller: db.seller_name || '卖家',
                    location: db.location || '奉贤校区',
                    views: db.view_count || 0,
                    desc: db.description || '',
                    status: db.status === 1 ? 'online' : db.status === 0 ? 'pending' : db.status === 2 ? 'rejected' : 'sold',
                    isNew: false,
                    submitTime: db.created_at ? new Date(db.created_at).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }) : '',
                    rejectReason: db.reject_reason || '',
                    _dbId: db.id
                });
            });
            localOnly.forEach(p => products.push(p));
            renderProducts();
            console.log('[API] 商品已同步 ' + res.data.length + ' 件');
        }
    } catch (e) { console.log('[API] 商品同步失败，保留本地数据'); }
}
`;
rep('// ===== 数据 =====', apiClient + '\n// ===== 数据 =====', 'api-client');

// ---------- 2. doLogin：调用后端登录 ----------
rep(`    if (!agree) return showToast('请先同意用户协议');
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
}`, `    if (!agree) return showToast('请先同意用户协议');

    // ===== 调用后端登录接口（MySQL 真实账号） =====
    if (apiOnline) {
        try {
            const res = await apiFetch('/api/auth/login', { method: 'POST', body: { phone: phone, code: code } });
            if (res.code === 0 && res.data) {
                apiToken = res.data.token;
                apiUser = res.data.user;
                localStorage.setItem('st_token', apiToken);
                if (currentRole === 'user' && apiUser.nickname) profile.name = apiUser.nickname;
                showToast('登录成功（' + (currentRole === 'admin' ? '审核员' : apiUser.nickname || '普通用户') + '）');
                finishLogin();
                return;
            }
            showToast(res.msg || '登录失败');
            return;
        } catch (e) { console.log('[API] 登录请求异常，使用本地模式'); }
    }
    // 本地模拟登录（后端不可用时兜底）
    const regUsers = getRegisteredUsers();
    if (currentRole === 'user' && regUsers[phone]) profile.name = regUsers[phone].name;
    showToast('登录成功（' + (currentRole === 'admin' ? '审核员' : '普通用户') + '）');
    finishLogin();
}
function finishLogin() {
    setTimeout(() => {
        document.getElementById('loginMask').classList.add('hide');
        pageHistory = [];
        if (currentRole === 'admin') { renderAdmin(); renderAdminHome(); switchPage('adminhome'); }
        else { renderProducts(); switchPage('home'); }
    }, 600);
}`, 'doLogin');
rep('function doLogin() {', 'async function doLogin() {', 'doLogin-async');

// ---------- 3. submitPublish：调用后端发布 ----------
rep(`    // ===== 后端接口预留：POST /api/product/publish =====
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('price', price);
    // uploadImgs.forEach(img => formData.append('images', img));
    // fetch('/api/product/publish', { method:'POST', body: formData })
    //   .then(r => r.json()).then(data => { /* 等待审核员审核 */ });

    const catEl = document.querySelector('.chip.active');
    const newProduct = {
        id: products.length + 1,
        cat: catEl ? catEl.textContent : '其他',`, `    const catEl = document.querySelector('.chip.active');
    const catText = catEl ? catEl.textContent : '其他';
    const descText = document.getElementById('pDesc').value || '卖家很懒，什么都没留下～';

    // ===== 调用后端发布接口（写入 MySQL） =====
    if (apiOnline && apiUser) {
        try {
            const coverImg = uploadImgs[0] || '';
            const res = await apiFetch('/api/products/publish', {
                method: 'POST',
                body: { title: title, price: price, category: catText, description: descText, location: '奉贤校区', cover_image: coverImg }
            });
            if (res.code === 0) {
                products.push({
                    id: (res.data && res.data.id) || Date.now(),
                    cat: catText, title: title, price: Number(price),
                    img: coverImg, seller: profile.name, location: '奉贤校区',
                    views: 0, desc: descText, status: 'pending', isNew: false,
                    submitTime: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
                    rejectReason: '', _dbId: res.data && res.data.id
                });
                showToast('发布成功，等待审核员审核…');
                afterPublish();
                return;
            }
            showToast(res.msg || '发布失败');
            return;
        } catch (e) { console.log('[API] 发布请求异常，使用本地模式'); }
    }
    // 本地模拟发布
    const newProduct = {
        id: products.length + 1,
        cat: catText,`, 'publish-1');

rep(`        title: title,
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
    setTimeout(() => {`, `        title: title,
        price: Number(price),
        img: uploadImgs[0],
        seller: currentRole === 'admin' ? '审核员' : profile.name,
        location: '奉贤校区',
        views: 0,
        desc: descText,
        status: 'pending',
        isNew: false,
        submitTime: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
        rejectReason: '',
        localOnly: true
    };
    products.push(newProduct);
    showToast('发布成功，等待审核员审核…');
    afterPublish();
}
function afterPublish() {
    setTimeout(() => {`, 'publish-2');
rep('function submitPublish() {', 'async function submitPublish() {', 'publish-async');

// ---------- 4. approveProduct / rejectProduct：调用后端审核 ----------
rep(`function approveProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    // ===== 后端接口预留：POST /api/product/approve =====
    // fetch('/api/product/approve', {
    //   method:'POST',
    //   headers:{'Content-Type':'application/json'},
    //   body: JSON.stringify({ productId: id, approved: true })
    // }).then(r=>r.json());

    p.status = 'online';`, `async function approveProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;

    // ===== 调用后端审核接口（写入 MySQL + 生成通知） =====
    if (apiOnline && p._dbId) {
        try {
            const res = await apiFetch('/api/products/' + p._dbId + '/audit', { method: 'POST', body: { approved: true } });
            if (res.code !== 0) { showToast(res.msg || '审核失败'); return; }
        } catch (e) { showToast('网络异常，请重试'); return; }
    }

    p.status = 'online';`, 'approve');

rep(`function rejectProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    // 演示：使用统一的驳回理由（后端会弹窗让审核员选择原因）
    p.status = 'rejected';
    p.rejectReason = '商品图片不清晰，信息描述不完整，请修改后重新发布';`, `async function rejectProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const reason = '商品图片不清晰，信息描述不完整，请修改后重新发布';

    // ===== 调用后端驳回接口（写入 MySQL + 生成通知） =====
    if (apiOnline && p._dbId) {
        try {
            const res = await apiFetch('/api/products/' + p._dbId + '/audit', { method: 'POST', body: { approved: false, reason: reason } });
            if (res.code !== 0) { showToast(res.msg || '驳回失败'); return; }
        } catch (e) { showToast('网络异常，请重试'); return; }
    }

    p.status = 'rejected';
    p.rejectReason = reason;`, 'reject');

// ---------- 5. confirmOrder：调用后端下单 ----------
rep(`function confirmOrder() {
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
    orders.unshift({`, `async function confirmOrder() {
    const p = products.find(x => x.id === currentDetailId);
    if (!p) return;
    if (orders.some(o => o.productId === p.id && o.status !== 'canceled')) {
        showToast('该商品您已下单，请勿重复购买');
        return;
    }

    // ===== 调用后端下单接口（写入 MySQL + 商品置为已售 + 通知卖家） =====
    if (apiOnline && p._dbId && apiUser) {
        try {
            const res = await apiFetch('/api/orders/create', {
                method: 'POST',
                body: { productId: p._dbId, tradeType: '自提', tradePlace: '奉贤校区一食堂门口' }
            });
            if (res.code === 0 && res.data) {
                createLocalOrder(p, res.data.orderNo);
                return;
            }
            showToast(res.msg || '下单失败');
            return;
        } catch (e) { console.log('[API] 下单请求异常，使用本地模式'); }
    }
    createLocalOrder(p);
}
function createLocalOrder(p, serverOrderNo) {
    orders.unshift({`, 'order');

// 用后端 orderNo 替换本地生成的（如果有）
rep(`        orderNo: genOrderNo(),`, `        orderNo: serverOrderNo || genOrderNo(),`, 'order-no');

// ---------- 6. 初始化时连接后端 ----------
rep(`// ===== 初始化 =====
restore();   // 恢复本地持久化数据（商品/订单/收藏等）`, `// ===== 初始化 =====
restore();   // 恢复本地持久化数据（商品/订单/收藏等）
initApiSync(); // 尝试连接后端 MySQL，同步商品数据`, 'init');

// ---------- 7. logout：清除 token ----------
rep(`function logout() {
    document.getElementById('loginMask').classList.remove('hide');`, `function logout() {
    apiToken = ''; apiUser = null; localStorage.removeItem('st_token');
    document.getElementById('loginMask').classList.remove('hide');`, 'logout');

fs.writeFileSync(file, s, 'utf8');
console.log('done, changed: ' + changed + ' spots');

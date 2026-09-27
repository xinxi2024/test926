// 临时冒烟脚本：好友+私信全流程
const http = require('http');
function call(method, path, token, body) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const req = http.request({ host: 'localhost', port: 3000, path, method, headers: Object.assign({
      'Content-Type': 'application/json'
    }, data ? { 'Content-Length': Buffer.byteLength(data) } : {}, token ? { Authorization: 'Bearer ' + token } : {}) }, res => {
      let buf = '';
      res.on('data', c => buf += c);
      res.on('end', () => resolve(JSON.parse(buf)));
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}
(async () => {
  const A = (await call('POST', '/api/auth/login', null, { phone: '13800138000', code: '1234' })).data;
  const B = (await call('POST', '/api/auth/login', null, { phone: '13600136000', code: '1234' })).data;
  console.log('A =', A.user.id, A.user.nickname, '| B =', B.user.id, B.user.nickname);

  console.log('搜索(片段3600):', JSON.stringify((await call('GET', '/api/user/search?keyword=3600', A.token)).data));
  console.log('申请:', (await call('POST', '/api/friends/request', A.token, { toUserId: B.user.id, message: '你好呀' })).msg);
  const incoming = await call('GET', '/api/friends/requests/incoming', B.token);
  console.log('B收到申请数:', incoming.data.length, '| 留言:', incoming.data[0].message);
  console.log('B接受:', (await call('POST', '/api/friends/request/' + incoming.data[0].id + '/accept', B.token)).msg);

  console.log('A发消息:', (await call('POST', '/api/messages/send', A.token, { toUserId: B.user.id, content: '周末图书馆见吗？' })).msg);
  console.log('B发消息:', (await call('POST', '/api/messages/send', B.token, { toUserId: A.user.id, content: '好的，上午十点！' })).msg);

  const msgs = (await call('GET', '/api/messages/' + A.user.id, B.token)).data;
  console.log('对话记录:');
  msgs.forEach(m => console.log('  ', m.sender_id === B.user.id ? 'B>' : 'A>', m.content, '| 已读:', m.is_read));

  const af = (await call('GET', '/api/friends', A.token)).data;
  console.log('A的好友会话:', JSON.stringify(af));
})().catch(e => { console.error('FAIL', e); process.exit(1); });

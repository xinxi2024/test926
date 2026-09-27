const fs = require('fs');
const s = fs.readFileSync('d:/test/index.html', 'utf8');
let m;
const re = /id="page-([a-z]+)"/g;
const pages = [];
while ((m = re.exec(s)) !== null) pages.push(m[1]);
console.log('pages:', pages.join(', '));
console.log('---');
// back buttons: class + onclick in any order
const re2 = /<(span|div|button)[^>]*class="(back-btn|chat-back|sub-back)[^"]*"[^>]*>/g;
while ((m = re2.exec(s)) !== null) {
    const line = s.substring(0, m.index).split('\n').length;
    const onclick = (m[0].match(/onclick="([^"]+)"/) || [])[1] || 'NONE';
    console.log(line + ': [' + m[2] + '] onclick=' + onclick);
}

const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const FRAMES_DIR = 'd:/test/frames';
const durs = [4.27, 7.82, 13.27, 9.46, 8.57, 7.25, 4.42];
const total = durs.reduce((a,b)=>a+b,0);
const FPS = 20;
const VW = 1280, VH = 720;
const totalFrames = Math.ceil(total * FPS);

if(!fs.existsSync(FRAMES_DIR)) fs.mkdirSync(FRAMES_DIR);
// clean
fs.readdirSync(FRAMES_DIR).forEach(f=>fs.unlinkSync(path.join(FRAMES_DIR,f)));

function sceneAt(t){
  let acc=0;
  for(let i=0;i<durs.length;i++){
    if(t < acc+durs[i]) return i;
    acc += durs[i];
  }
  return durs.length-1;
}

(async()=>{
  const browser = await puppeteer.launch({
    executablePath: EDGE,
    headless: 'new',
    args: [`--window-size=${VW},${VH}`,'--force-device-scale-factor=1','--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({width:VW, height:VH, deviceScaleFactor:1});
  await page.goto('file:///d:/test/promo.html', {waitUntil:'networkidle0'});
  // hide controls for clean video
  await page.evaluate(()=>{ document.getElementById('controls').style.display='none'; });
  await new Promise(r=>setTimeout(r,500));

  for(let f=0; f<totalFrames; f++){
    const t = f/FPS;
    const s = sceneAt(t);
    await page.evaluate((i)=>{ show(i); }, s);
    // small wait for transition
    if(f%FPS===0) process.stdout.write(`frame ${f}/${totalFrames} (scene ${s})\n`);
    await page.screenshot({path: path.join(FRAMES_DIR, `f${String(f).padStart(5,'0')}.png`)});
  }
  await browser.close();
  console.log('DONE frames:', totalFrames);
})().catch(e=>{console.error(e); process.exit(1);});

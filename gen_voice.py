import os, asyncio, edge_tts
async def main():
    lines = open('d:/test/promo_script.txt', encoding='utf-8').read().strip().splitlines()
    out = []
    for line in lines:
        i, text = line.split('|', 1)
        fn = f'd:/test/promo_v{i}.mp3'
        await edge_tts.Communicate(text, 'zh-CN-XiaoxiaoNeural', rate='+8%').save(fn)
        from mutagen.mp3 import MP3
        dur = round(MP3(fn).info.length, 2)
        out.append((i, dur, text))
        print(f'v{i}: {dur}s - {text}')
    total = sum(d for _, d, _ in out)
    print(f'TOTAL: {round(total,1)}s')
asyncio.run(main())

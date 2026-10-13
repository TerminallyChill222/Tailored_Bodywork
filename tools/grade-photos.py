"""Color-grade source photos into Sage and Clay variants and export web sizes (800px + 1600px JPEGs).

Requires Pillow and numpy:  pip3 install pillow numpy
Usage:
  python3 tools/grade-photos.py "<source folder>" public/images <preview folder> name=file.png [name=file.png ...]
Writes public/images/<name>-sage-800.jpg, -sage-1600.jpg, -clay-800.jpg, -clay-1600.jpg,
plus a side-by-side preview sheet (original | sage | clay) in the preview folder.
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image

src_dir, out_dir, prev_dir = map(Path, sys.argv[1:4])
pairs = [a.split('=', 1) for a in sys.argv[4:]]
out_dir.mkdir(parents=True, exist_ok=True)
prev_dir.mkdir(parents=True, exist_ok=True)


def lum(a):
    return (0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2])[..., None]


def hexc(h):
    return np.array([int(h[i:i + 2], 16) / 255 for i in (1, 3, 5)])


def split_tone(a, shadow, highlight, amount_s, amount_h):
    y = lum(a)
    ws = np.clip(1 - y * 1.6, 0, 1) * amount_s          # weight toward shadows
    wh = np.clip((y - 0.55) * 2.2, 0, 1) * amount_h     # weight toward highlights
    a = a * (1 - ws) + (shadow * (0.6 + y)) * ws
    a = a * (1 - wh) + highlight * wh
    return a


def saturate(a, s):
    y = lum(a)
    return y + (a - y) * s


def hue_weight(a, lo, hi, soft=20):
    """Weight (0-1) of pixels whose hue falls in [lo, hi] degrees, scaled by saturation."""
    mx, mn = a.max(-1), a.min(-1)
    d = np.maximum(mx - mn, 1e-6)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    h = np.where(mx == r, ((g - b) / d) % 6, np.where(mx == g, (b - r) / d + 2, (r - g) / d + 4)) * 60
    sat = np.clip(d / np.maximum(mx, 1e-6), 0, 1)
    w = np.clip(np.minimum(h - lo, hi - h) / soft + 0.5, 0, 1)
    return (w * np.clip(sat * 2.5, 0, 1))[..., None]


def sage(a):
    warm = hue_weight(a, 15, 50)                          # golden/orange light
    a = a * (1 - warm * 0.35) + lum(a) * hexc('#e9e4d4') / 0.85 * warm * 0.35
    green = hue_weight(a, 55, 170)
    a = a * (1 - green * 0.35) + lum(a) * hexc('#8f9a7a') / 0.55 * green * 0.35  # leaves → sage
    a = saturate(a, 0.82)
    a = split_tone(a, hexc('#3d4535'), hexc('#f6f2ea'), 0.35, 0.15)
    a = 0.035 + a * 0.95
    return a


def clay(a):
    green = hue_weight(a, 55, 170)
    a = a * (1 - green * 0.75) + lum(a) * hexc('#b39f7e') / 0.6 * green * 0.75  # leaves → dry khaki
    warm = hue_weight(a, 10, 55)
    a = a * (1 - warm * 0.3) + lum(a) * hexc('#d9946a') / 0.62 * warm * 0.3   # golden → terracotta
    a = a * np.array([1.03, 0.98, 0.93])
    a = split_tone(a, hexc('#2a2927'), hexc('#f3eee7'), 0.5, 0.1)
    a = a + (a - 0.5) * 0.07
    a = 0.02 + a * 0.97
    return a


grades = {'sage': sage, 'clay': clay}
sheet_rows = []
for name, fname in pairs:
    img = Image.open(src_dir / fname).convert('RGB')
    base = np.asarray(img).astype(np.float32) / 255
    row = [img]
    for theme, fn in grades.items():
        out = np.clip(fn(base.copy()), 0, 1)
        im = Image.fromarray((out * 255 + 0.5).astype(np.uint8))
        for w in (800, 1600):
            h = round(im.height * w / im.width)
            im.resize((w, h), Image.LANCZOS).save(
                out_dir / f'{name}-{theme}-{w}.jpg', quality=80, optimize=True, progressive=True)
        row.append(im)
    sheet_rows.append(row)
    print('graded', name)

# preview contact sheet: original | sage | clay
tw = 420
rows = []
for row in sheet_rows:
    th = round(row[0].height * tw / row[0].width)
    rows.append([r.resize((tw, th)) for r in row])
H = sum(r[0].height for r in rows) + 10 * (len(rows) + 1)
sheet = Image.new('RGB', (tw * 3 + 40, H), (255, 255, 255))
y = 10
for r in rows:
    for i, im in enumerate(r):
        sheet.paste(im, (10 + i * (tw + 10), y))
    y += r[0].height + 10
sheet.save(prev_dir / 'sheet.jpg', quality=85)
print('sheet', prev_dir / 'sheet.jpg')

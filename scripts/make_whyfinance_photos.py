#!/usr/bin/env python3
"""Generate why-finance placeholder images 1-5."""
from PIL import Image, ImageDraw, ImageFont
import os

out = "/Users/h/.gemini/antigravity/scratch/portfolio/public/photos"
os.makedirs(out, exist_ok=True)

# Distinct muted tones for each card
palettes = [
    ("#C7D4E8", "#3A5278"),   # blue-slate
    ("#D8E8D4", "#2E5C3F"),   # sage green
    ("#E8D8C4", "#7A4A1E"),   # warm amber
    ("#E4D8E8", "#5A3878"),   # soft purple
    ("#E8DCDC", "#7A2E2E"),   # dusty rose
]

for i, (bg, fg) in enumerate(palettes, start=1):
    img = Image.new("RGB", (800, 800), bg)
    draw = ImageDraw.Draw(img)
    # Subtle grid lines
    for x in range(0, 800, 40):
        draw.line([(x, 0), (x, 800)], fill=fg + "18", width=1)
    for y in range(0, 800, 40):
        draw.line([(0, y), (800, y)], fill=fg + "18", width=1)
    # Center circle
    r = 120
    cx, cy = 400, 380
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=fg, width=2)
    # Text
    try:
        font_big = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 22)
        font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 14)
    except Exception:
        font_big = ImageFont.load_default()
        font_small = font_big
    label = f"WHY FINANCE"
    num = f"MOMENT {i}"
    hint = "Drop your photo here"
    draw.text((400, 360), label, fill=fg, font=font_big, anchor="mm")
    draw.text((400, 395), num, fill=fg, font=font_small, anchor="mm")
    draw.text((400, 560), hint, fill=fg, font=font_small, anchor="mm")
    path = os.path.join(out, f"why-finance-{i}.jpg")
    img.save(path, "JPEG", quality=85)
    print(f"Saved {path}")

print("Done.")

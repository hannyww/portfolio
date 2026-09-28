import os
from PIL import Image, ImageDraw, ImageFont

photos_dir = os.path.join(os.path.dirname(__file__), "../public/photos")

def make_img(filename, title, subtitle, bg_color=(240, 243, 245)):
    w, h = 800, 600
    img = Image.new("RGB", (w, h), bg_color)
    draw = ImageDraw.Draw(img)
    draw.rectangle([16, 16, w - 16, h - 16], outline=(220, 222, 225), width=2)
    
    try:
        font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 26)
        font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 16)
        font_mono = ImageFont.truetype("/System/Library/Fonts/Courier.dfont", 14)
    except Exception:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
        font_mono = ImageFont.load_default()
        
    cy = h // 2 - 20
    draw.text((w // 2, cy), title, fill=(25, 25, 25), font=font_large, anchor="mm")
    draw.text((w // 2, cy + 38), subtitle, fill=(100, 100, 100), font=font_small, anchor="mm")
    
    pill_text = f"Drop into: public/photos/{filename}"
    draw.rectangle([w // 2 - 160, cy + 70, w // 2 + 160, cy + 105], fill=(230, 232, 235))
    draw.text((w // 2, cy + 87), pill_text, fill=(40, 40, 40), font=font_mono, anchor="mm")
    
    out_path = os.path.join(photos_dir, filename)
    img.save(out_path, "JPEG", quality=92)
    print(f"Created {out_path}")

make_img("video-poster.jpg", "Short Personal Video", "Click to play personal intro", (238, 242, 245))
make_img("why-finance.jpg", "My Why Finance Story", "Click to read full story", (244, 241, 236))

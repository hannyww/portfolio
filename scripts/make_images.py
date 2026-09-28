import os
from PIL import Image, ImageDraw, ImageFont

photos_dir = os.path.join(os.path.dirname(__file__), "../public/photos")
os.makedirs(photos_dir, exist_ok=True)

def create_placeholder_image(filename, label, subtext, width=800, height=600, bg_color=(245, 245, 243)):
    img = Image.new("RGB", (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Border
    draw.rectangle([16, 16, width - 16, height - 16], outline=(220, 220, 218), width=2)
    
    # Center decorative circle
    cx, cy = width // 2, height // 2 - 40
    r = min(width, height) // 10
    draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(232, 232, 228))
    
    # Try default font or basic font
    try:
        font_large = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
        font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 16)
        font_mono = ImageFont.truetype("/System/Library/Fonts/Courier.dfont", 14)
    except Exception:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()
        font_mono = ImageFont.load_default()
        
    # Draw label
    draw.text((width // 2, cy + r + 30), label, fill=(30, 30, 30), font=font_large, anchor="mm")
    draw.text((width // 2, cy + r + 60), subtext, fill=(110, 110, 110), font=font_small, anchor="mm")
    
    # Path pill
    pill_text = f"Drop into: public/photos/{filename}"
    draw.rectangle([width // 2 - 160, cy + r + 85, width // 2 + 160, cy + r + 120], fill=(232, 232, 228))
    draw.text((width // 2, cy + r + 102), pill_text, fill=(40, 40, 40), font=font_mono, anchor="mm")
    
    output_path = os.path.join(photos_dir, filename)
    img.save(output_path, "JPEG", quality=90)
    print(f"Generated {output_path}")

photos = [
    ("about-photo-1.jpg", "Workspace & Daily Setup", "Click to reveal caption on page", 800, 600, (244, 245, 242)),
    ("about-photo-2.jpg", "Weekend Trail Exploration", "Click to reveal caption on page", 800, 600, (242, 244, 246)),
    ("work-1.jpg", "Experience 1 Showcase", "Product & Engineering", 800, 520, (245, 244, 240)),
    ("work-2.jpg", "Experience 2 Showcase", "Design Systems & Web", 800, 520, (240, 245, 244)),
    ("work-3.jpg", "Experience 3 Showcase", "Data Pipelines & Research", 800, 520, (244, 242, 245)),
    ("listening-cover.jpg", "Now Listening", "Album Artwork", 400, 400, (238, 242, 240)),
    ("reading-cover.jpg", "Active Book", "Book Cover", 400, 600, (242, 240, 236)),
    ("avatar.jpg", "Profile Avatar", "iMessage Header", 200, 200, (236, 238, 242)),
]

for filename, label, subtext, w, h, bg in photos:
    create_placeholder_image(filename, label, subtext, w, h, bg)


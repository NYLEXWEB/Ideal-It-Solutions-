import os
from PIL import Image

uploaded_file = r"C:\Users\hnith\.gemini\antigravity-ide\brain\f7eae6f4-908e-491a-9065-8cee1303cfdc\.user_uploaded\media_1791377638598.jpg"
out_dir = r"c:\Users\hnith\OneDrive\Desktop\IDEA IT\public\images\services"
os.makedirs(out_dir, exist_ok=True)

img = Image.open(uploaded_file)
W, H = img.size
print(f"Uploaded services image size: {W} x {H}")

# In the image:
# Header is at the top ~0% to 20%
# Row 1 (Computer Sales & CCTV): ~21% to 45%
# Row 2 (Networking & UPS): ~46% to 70%
# Row 3 (Home Auto & Video Door): ~71% to 95%
# Left cards: x from ~3% to 49% -> Image part: x from ~18% to 49%
# Right cards: x from ~51% to 97% -> Image part: x from ~66% to 97%

# Let's crop high-res individual card images:
crops = {
    # Row 1 Left: Laptop
    "computer_sales.jpg": (int(W * 0.19), int(H * 0.225), int(W * 0.49), int(H * 0.45)),
    # Row 1 Right: CCTV
    "cctv_security.jpg": (int(W * 0.67), int(H * 0.225), int(W * 0.965), int(H * 0.45)),
    # Row 2 Left: Networking
    "networking.jpg": (int(W * 0.23), int(H * 0.47), int(W * 0.49), int(H * 0.695)),
    # Row 2 Right: UPS & Inverter
    "ups_inverter.jpg": (int(W * 0.69), int(H * 0.47), int(W * 0.965), int(H * 0.695)),
    # Row 3 Left: Home Automation
    "home_automation.jpg": (int(W * 0.22), int(H * 0.715), int(W * 0.49), int(H * 0.945)),
    # Row 3 Right: Video Door Phone
    "video_door_phone.jpg": (int(W * 0.73), int(H * 0.715), int(W * 0.965), int(H * 0.945)),
}

for name, box in crops.items():
    cropped = img.crop(box)
    save_path = os.path.join(out_dir, name)
    cropped.save(save_path, "JPEG", quality=95)
    print(f"Saved {name}: {cropped.size}")

print("Services images cropped successfully.")

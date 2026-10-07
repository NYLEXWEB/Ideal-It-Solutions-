import os
import numpy as np
from PIL import Image

uploaded_dir = r"C:\Users\hnith\.gemini\antigravity-ide\brain\f7eae6f4-908e-491a-9065-8cee1303cfdc\.user_uploaded"
out_dir = r"c:\Users\hnith\OneDrive\Desktop\IDEA IT\public\images\partners"

# 1. Dahua
dahua_file = os.path.join(uploaded_dir, "media_1791377158443.png")
if os.path.exists(dahua_file):
    img = Image.open(dahua_file).convert("RGBA")
    arr = np.array(img)
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    white_mask = (r >= 240) & (g >= 240) & (b >= 240)
    arr[white_mask, 3] = 0
    res = Image.fromarray(arr)
    bbox = res.getbbox()
    if bbox:
        res = res.crop(bbox)
    res.save(os.path.join(out_dir, "dahua.png"), "PNG")
    print("Processed dahua.png")

# 2. Hikvision (has checkerboard background where squares are white ~255 and gray ~204)
hik_file = os.path.join(uploaded_dir, "media_1791377169819.png")
if os.path.exists(hik_file):
    img = Image.open(hik_file).convert("RGBA")
    arr = np.array(img)
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    # In Hikvision:
    # Text is either Red (R is high ~180-230, G is low < 50, B is low < 50)
    # OR dark gray (R ~ 60-100, G ~ 60-100, B ~ 60-100, where R, G, B are roughly equal and max < 140)
    # Background checkerboard is gray (R=G=B > 180) or white (R=G=B > 240)
    
    # Keep red text
    is_red = (r > 150) & (g < 60) & (b < 60)
    # Keep dark text
    is_dark = (r < 130) & (g < 130) & (b < 130) & (a > 100)
    
    keep_mask = is_red | is_dark
    arr[~keep_mask, 3] = 0
    res = Image.fromarray(arr)
    bbox = res.getbbox()
    if bbox:
        res = res.crop(bbox)
    res.save(os.path.join(out_dir, "hikvision.png"), "PNG")
    print("Processed hikvision.png")

# 3. TP-Link
tp_file = os.path.join(uploaded_dir, "media_1791377184528.png")
if os.path.exists(tp_file):
    img = Image.open(tp_file).convert("RGBA")
    arr = np.array(img)
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    white_mask = (r >= 240) & (g >= 240) & (b >= 240)
    arr[white_mask, 3] = 0
    res = Image.fromarray(arr)
    bbox = res.getbbox()
    if bbox:
        res = res.crop(bbox)
    res.save(os.path.join(out_dir, "tplink.png"), "PNG")
    print("Processed tplink.png")

print("All partner logos processed.")

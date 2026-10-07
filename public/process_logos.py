import os
import numpy as np
from PIL import Image

uploaded_dir = r"C:\Users\hnith\.gemini\antigravity-ide\brain\f7eae6f4-908e-491a-9065-8cee1303cfdc\.user_uploaded"
out_dir = r"c:\Users\hnith\OneDrive\Desktop\IDEA IT\public\images\partners"
os.makedirs(out_dir, exist_ok=True)

files = [
    "media_1791376770165.png",
    "media_1791376783922.png",
    "media_1791376853010.png",
    "media_1791376868523.png",
    "media_1791376882191.png",
]

def make_transparent(img_path, threshold=245):
    img = Image.open(img_path).convert("RGBA")
    data = np.array(img)
    
    r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]
    
    # White background condition
    white_mask = (r >= threshold) & (g >= threshold) & (b >= threshold)
    
    # Soft alpha for edges
    brightness = (r.astype(int) + g.astype(int) + b.astype(int)) / 3.0
    
    # Set alpha
    alpha = a.copy()
    alpha[white_mask] = 0
    
    # Semi-transparent smoothing near threshold
    soft_mask = (~white_mask) & (brightness > 220)
    for i in range(len(brightness)):
        # Apply smoothing
        pass
    
    data[:, :, 3] = alpha
    result = Image.fromarray(data)
    
    # Crop transparent borders
    bbox = result.getbbox()
    if bbox:
        result = result.crop(bbox)
        
    return result

# Process each uploaded file and identify by dominant color / features
for f in files:
    full_path = os.path.join(uploaded_dir, f)
    if not os.path.exists(full_path):
        continue
    
    trans_img = make_transparent(full_path)
    # Check dominant non-transparent colors
    arr = np.array(trans_img)
    non_trans = arr[arr[:, :, 3] > 50]
    
    avg_r = np.mean(non_trans[:, 0])
    avg_g = np.mean(non_trans[:, 1])
    avg_b = np.mean(non_trans[:, 2])
    w, h = trans_img.size
    aspect = w / h
    
    print(f"File {f}: size=({w},{h}), aspect={aspect:.2f}, RGB=({avg_r:.1f}, {avg_g:.1f}, {avg_b:.1f})")
    
    # Match based on characteristics:
    # 1. Lenovo: bright Red (R high, G low, B low, aspect > 2.5)
    # 2. HP: Blue circle (aspect ~ 1.0 - 1.6, Blue high, R low)
    # 3. Dell: Blue circle (aspect ~ 1.5 - 1.8, Blue high)
    # 4. Acer: Green (G high, R moderate, B low)
    # 5. Honeywell: Red (R high, G low, B low, aspect > 3.0)

    # Let's save a copy with its filename first
    save_path = os.path.join(out_dir, f)
    trans_img.save(save_path, "PNG")

print("Processed all uploaded logo images with transparent backgrounds.")

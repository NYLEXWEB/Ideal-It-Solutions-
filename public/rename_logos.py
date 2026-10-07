import os
import shutil
from PIL import Image, ImageDraw, ImageFont

out_dir = r"c:\Users\hnith\OneDrive\Desktop\IDEA IT\public\images\partners"

mapping = {
    "media_1791376770165.png": "lenovo.png",
    "media_1791376783922.png": "hp.png",
    "media_1791376853010.png": "dell.png",
    "media_1791376868523.png": "acer.png",
    "media_1791376882191.png": "honeywell.png",
}

for src_name, dst_name in mapping.items():
    src_file = os.path.join(out_dir, src_name)
    dst_file = os.path.join(out_dir, dst_name)
    if os.path.exists(src_file):
        shutil.copyfile(src_file, dst_file)
        print(f"Saved {dst_name}")

print("All partner logos mapped successfully.")

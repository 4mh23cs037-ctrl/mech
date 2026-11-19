import urllib.request
import os

os.makedirs('client/public/images/mit', exist_ok=True)

new_lab_images = [
    ('design_lab2.jpg', 'https://mitmysore.in/wp-content/uploads/2026/01/DesignLab2-scaled.jpg'),
    ('material_testing_lab.jpg', 'https://mitmysore.in/wp-content/uploads/2026/01/MTLab3-scaled.jpg'),
    ('machine_shop2.jpg', 'https://mitmysore.in/wp-content/uploads/2026/01/MSLab2-scaled.jpg'),
    ('machine_shop3.jpg', 'https://mitmysore.in/wp-content/uploads/2026/01/MSLab3-scaled.jpg'),
    ('foundry_forging_lab.jpg', 'https://mitmysore.in/wp-content/uploads/2026/01/FFLab1-scaled.jpg'),
    ('energy_conversion_lab.jpg', 'https://mitmysore.in/wp-content/uploads/2026/01/ECLab.jpg'),
    ('mmm_lab6.jpg', 'https://mitmysore.in/wp-content/uploads/2026/01/MMMLab6-scaled.jpg')
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for fname, url in new_lab_images:
    dest = os.path.join('client/public/images/mit', fname)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp, open(dest, 'wb') as out:
            out.write(resp.read())
        print(f"Downloaded {fname} ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"Failed {fname}: {e}")


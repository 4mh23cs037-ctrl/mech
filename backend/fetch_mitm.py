import urllib.request
import re

urls = [
    'https://mitmysore.in/',
    'https://mitmysore.in/mechanical-engineering/',
    'https://mitmysore.in/departments/mechanical-engineering/',
    'https://mitmysore.in/gallery/'
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            print(f"=== URL: {url} (Length: {len(content)})")
            imgs = re.findall(r'src=["\']([^"\']+\.(?:jpg|jpeg|png|webp))["\']', content, re.IGNORECASE)
            print(f"Images found: {len(imgs)}")
            for img in set(imgs):
                if 'logo' not in img.lower() and 'icon' not in img.lower():
                    print("  IMG:", img)
    except Exception as e:
        print(f"Error on {url}: {e}")


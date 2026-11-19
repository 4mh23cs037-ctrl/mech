import urllib.request
import re
import os

req = urllib.request.Request('https://mitmysore.in/mechanical-engineering/', headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=15) as r:
        html = r.read().decode('utf-8', errors='ignore')
    imgs = re.findall(r'https?://mitmysore\.in/wp-content/uploads/[^"\'\s>]+\.(?:jpg|jpeg|png|webp)', html)
    print(f"Total imgs found: {len(imgs)}")
    for u in sorted(set(imgs)):
        print(u)
except Exception as e:
    print("Error:", e)


import urllib.request
import json
import re

url = "https://mitmysore.in/wp-json/wp/v2/pages?slug=mechanical-engineering"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=15) as r:
        data = json.loads(r.read().decode('utf-8'))
    content = data[0]['content']['rendered']
    imgs = re.findall(r'src="([^"]+?\.(?:jpg|png|webp|jpeg))"', content)
    print("Found images in page content:", len(imgs))
    for u in sorted(set(imgs)):
        print(u)
except Exception as e:
    print("Error:", e)


import urllib.request
import re

url = 'https://mitmysore.in/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        
        # Find all image tags and print surrounding context (up to 300 chars)
        for match in re.finditer(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html):
            src = match.group(1)
            if 'wp-content/uploads' in src and '150x36' not in src and 'logo' not in src.lower():
                start = max(0, match.start() - 250)
                end = min(len(html), match.end() + 250)
                snippet = html[start:end]
                # clean tags
                clean = re.sub(r'<[^>]+>', ' ', snippet)
                clean = re.sub(r'\s+', ' ', clean).strip()
                print(f"SRC: {src}")
                print(f"CONTEXT: {clean[:200]}")
                print("="*40)
except Exception as e:
    print('Error:', e)


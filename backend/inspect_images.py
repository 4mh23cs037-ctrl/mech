import urllib.request
import re

url = 'https://mitmysore.in/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        matches = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html)
        for tag in set(matches):
            if 'wp-content/uploads' in tag and '150x36' not in tag and 'logo' not in tag.lower():
                print("IMG:", tag)
except Exception as e:
    print('Error:', e)

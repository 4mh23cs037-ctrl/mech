import urllib.request
import re

url = 'https://mitmysore.in/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        links = re.findall(r'href=["\'](https?://mitmysore\.in/[^"\']+)["\']', html)
        for link in set(links):
            if 'mech' in link.lower() or 'gallery' in link.lower() or 'achieve' in link.lower():
                print("LINK:", link)
except Exception as e:
    print('Error:', e)


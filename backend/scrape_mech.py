import urllib.request
import re

url = 'https://mitmysore.in/index.php/mechanical-engineering/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        print("Page length:", len(html))
        # Find all images
        imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', html)
        for img in set(imgs):
            print("MECH IMG:", img)
            
        # Find headings and text
        headings = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', html, re.DOTALL)
        for h in headings[:15]:
            clean = re.sub(r'<[^>]+>', '', h).strip()
            if clean:
                print("HEADING:", clean)
except Exception as e:
    print('Error:', e)


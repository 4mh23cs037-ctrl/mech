import urllib.request
import json
import re

url = 'https://mitmysore.in/wp-json/wp/v2/pages?slug=mechanical-engineering'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        if data:
            page = data[0]
            rendered = page.get('content', {}).get('rendered', '')
            print("Page Title:", page.get('title', {}).get('rendered', ''))
            print("Content Length:", len(rendered))
            
            # Find all images
            imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', rendered)
            print("Images on Mechanical page:", len(imgs))
            for img in set(imgs):
                print("  MECH_PAGE_IMG:", img)
                
            # Find all links (PDFs, docs, newsletters)
            links = re.findall(r'href=["\']([^"\']+)["\']', rendered)
            for link in set(links):
                if any(ext in link.lower() for ext in ['.pdf', '.jpg', '.jpeg', '.png', 'mech', 'news', 'award']):
                    print("  MECH_LINK:", link)
                    
            # Print text snippets
            clean_text = re.sub(r'<[^>]+>', ' ', rendered)
            clean_text = re.sub(r'\s+', ' ', clean_text).strip()
            print("Text sample:", clean_text[:600])
except Exception as e:
    print('Error:', e)


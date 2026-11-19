from bs4 import BeautifulSoup
import re

with open('mech_content.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# Search for faculty tables, rows, images
faculty_list = []
# Look for images with METE or alt text
imgs = soup.find_all('img')
print("Total images found in page:", len(imgs))

for img in imgs:
    src = img.get('src', '')
    alt = img.get('alt', '')
    parent = img.parent
    # Check if this image belongs to a faculty member
    grandparent = parent.parent if parent else None
    text_nearby = grandparent.get_text(separator=' ', strip=True) if grandparent else ''
    if 'METE' in src or 'Dr.' in text_nearby or 'Prof' in text_nearby or 'Professor' in text_nearby or 'Faculty' in text_nearby:
        faculty_list.append({
            'src': src,
            'alt': alt,
            'text': text_nearby[:150]
        })

print(f"Faculty images candidate count: {len(faculty_list)}")
for f in faculty_list:
    print(f"SRC: {f['src']}")
    print(f"ALT: {f['alt']}")
    print(f"TEXT: {f['text']}\n" + "-"*40)


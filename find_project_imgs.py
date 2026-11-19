import re

with open('mech_content.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find all img tags and their src and alt
pattern = r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>'
matches = re.findall(r'<img[^>]+>', html)
print("Found img tags:", len(matches))

found = []
for tag in matches:
    src_m = re.search(r'src=["\']([^"\']+)["\']', tag)
    alt_m = re.search(r'alt=["\']([^"\']*)["\']', tag)
    src = src_m.group(1) if src_m else ''
    alt = alt_m.group(1) if alt_m else ''
    if any(k in src.lower() or k in alt.lower() for k in ['project', 'lab', 'mechismos', 'acrex', 'training', 'convocation', 'expo', 'student', 'batch', 'talk', 'meeting', 'award', 'felicitation']):
        found.append((alt, src))

for alt, src in sorted(set(found)):
    print(f"{alt} ===> {src}")


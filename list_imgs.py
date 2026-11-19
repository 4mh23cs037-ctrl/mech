import json
import re

try:
    with open('exact_mech.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    content = data[0]['content']['rendered']
    imgs = re.findall(r'src="([^"]+?\.(?:jpg|png|webp|jpeg))"', content)
    print("Found images:", len(imgs))
    for u in sorted(set(imgs)):
        print(u)
except Exception as e:
    print(e)


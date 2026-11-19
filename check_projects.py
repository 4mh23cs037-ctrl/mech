import urllib.request
import json

req = urllib.request.Request('http://127.0.0.1:8000/api/projects')
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read().decode())
    print('Total Projects returned:', len(data))
    for p in data:
        print(f"- [{p['category']}] {p['title']} => {p['image_url']}")


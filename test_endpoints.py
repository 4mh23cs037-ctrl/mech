import urllib.request
import json

try:
    req = urllib.request.Request('http://127.0.0.1:8000/api/gallery')
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode())
        print(f"Total Gallery items returned: {len(data)}")
        for item in data[:5]:
            print(f"- [{item['category']}] {item['title']} -> {item['image_url']}")

    # Check stats endpoint
    req_stats = urllib.request.Request('http://127.0.0.1:8000/api/stats')
    with urllib.request.urlopen(req_stats) as resp:
        stats = json.loads(resp.read().decode())
        print("Stats:", stats)

except Exception as e:
    print("Error:", e)


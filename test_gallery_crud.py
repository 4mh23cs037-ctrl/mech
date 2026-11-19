import urllib.request
import json
import uuid

# Test update on one item
test_id = 'mitm-fac-print-01'
update_payload = json.dumps({
    "caption": "Updated caption via Admin test: Dual nozzle FDM station with heated chamber."
}).encode('utf-8')

req = urllib.request.Request(
    f'http://127.0.0.1:8000/api/gallery/{test_id}',
    data=update_payload,
    headers={'Content-Type': 'application/json'},
    method='PUT'
)

try:
    with urllib.request.urlopen(req) as resp:
        print("PUT /api/gallery Response:", resp.read().decode())
except Exception as e:
    print("PUT Error:", e)


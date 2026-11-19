import urllib.request

urls = [
    'http://127.0.0.1:5173/images/faculty/hod_mohamed_khaisar.jpg',
    'http://127.0.0.1:5173/images/faculty/dr_b_harish.jpg',
    'http://127.0.0.1:5173/images/faculty/dr_chethan_yd.jpg',
    'http://127.0.0.1:5173/images/faculty/dr_ravikumar_ks.jpg'
]

for u in urls:
    try:
        with urllib.request.urlopen(u) as resp:
            print(f"{u}: Status {resp.status}, length: {len(resp.read())}")
    except Exception as e:
        print(f"Error {u}: {e}")


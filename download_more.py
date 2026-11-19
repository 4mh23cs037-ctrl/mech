import urllib.request
import os

os.makedirs('client/public/images/mit', exist_ok=True)

more_images = [
    ('acrex_2025.jpg', 'https://mitmysore.in/wp-content/uploads/2026/01/ACREX-2025-at-BIEC-Bangalore.jpg'),
    ('vtu_rank_2015.jpg', 'https://mitmysore.in/wp-content/uploads/2026/01/Rank-Felicitation-2015.jpg'),
    ('faculty_felicitation.jpg', 'https://mitmysore.in/wp-content/uploads/2026/01/Felicitation-for-Decade-Year-of-Service.jpg'),
    ('farewell_batch.jpg', 'https://mitmysore.in/wp-content/uploads/2026/01/FARWWELL-24-25-BATCH.jpg'),
    ('academic_council.png', 'https://mitmysore.in/wp-content/uploads/2026/01/Academic-Council-Meeting-19.9.25.png')
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for fname, url in more_images:
    dest = os.path.join('client/public/images/mit', fname)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp, open(dest, 'wb') as out:
            out.write(resp.read())
        print(f"Downloaded {fname} ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"Failed {fname}: {e}")


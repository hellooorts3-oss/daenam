import base64, json, os, sys, urllib.request

API_KEY = os.environ.get("GEMINI_API_KEY", "")
if not API_KEY:
    sys.exit("Set GEMINI_API_KEY environment variable before running.")
MODEL = "gemini-3.1-flash-image"
URL = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={API_KEY}"

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(OUT, exist_ok=True)

STYLE = ("Professional, photorealistic, bright clean commercial photography for a premium "
         "Korean solar energy company website. Natural daylight, crisp, high detail, "
         "modern, trustworthy, blue sky tones. No text, no watermark, no logos, no people faces close up.")

JOBS = [
    ("hero-solar", "4:3",
     "A modern factory rooftop fully covered with sleek dark blue solar photovoltaic panels in neat rows, "
     "bright sunny clear blue sky, slight aerial three-quarter view, glossy panels reflecting the sun, "
     "vivid and optimistic. " + STYLE),
    ("factory-solar", "4:3",
     "Aerial top-down view of a large industrial warehouse and factory complex with its entire flat rooftop "
     "covered in rows of solar panels, surrounded by green fields, clear day. " + STYLE),
    ("residential-solar", "4:3",
     "A modern Korean two-story single-family house with clean all-black solar panels neatly installed on its "
     "sloped roof, tidy garden, blue sky, warm sunny afternoon, architectural photography. " + STYLE),
    ("om-monitoring", "4:3",
     "A solar maintenance engineer wearing a safety helmet and vest holding a tablet, inspecting rows of solar "
     "panels on a rooftop, shot from behind, focus on the panels and tablet data, sunny clear sky. " + STYLE),
    ("ground-solar", "16:9",
     "A vast ground-mounted solar power farm with endless rows of solar panels stretching to the horizon under "
     "a bright blue sky with soft clouds, wide landscape shot. " + STYLE),
    ("cta-field", "16:9",
     "A large solar panel field photographed at golden hour sunset, warm orange and blue sky, panels glowing, "
     "cinematic peaceful wide landscape, gentle lens flare. " + STYLE),
]

def gen(name, ar, prompt):
    body = {
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": ar}},
    }
    req = urllib.request.Request(URL, data=json.dumps(body).encode(), headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r:
        data = json.load(r)
    for part in data["candidates"][0]["content"]["parts"]:
        if "inlineData" in part:
            raw = base64.b64decode(part["inlineData"]["data"])
            path = os.path.join(OUT, name + ".png")
            with open(path, "wb") as f:
                f.write(raw)
            print(f"OK {name}.png ({len(raw)//1024} KB)")
            return True
    print(f"NO IMAGE for {name}: {json.dumps(data)[:300]}")
    return False

if __name__ == "__main__":
    only = sys.argv[1:] if len(sys.argv) > 1 else None
    for name, ar, prompt in JOBS:
        if only and name not in only:
            continue
        try:
            gen(name, ar, prompt)
        except Exception as e:
            print(f"ERR {name}: {e}")

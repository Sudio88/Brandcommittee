"""Generate Hormozi-style 3D portraits with Gemini, then derive lip-sync frames.

Needs GEMINI_API_KEY in the environment. Work files go to tools/portraits/work/ (not committed).
Add a seat to DESIGN below, then run base, look at work/<key>-base.png, re-run base until you
like it, then frames, check the four frames, then final.

usage: python3 gen.py base <key>...      # new base renders (keeps old ones as base-<n>.png)
       python3 gen.py frames <key>...    # open / mid / blink frames from the chosen base
       python3 gen.py final <key>...     # key out green, align, write 560x560 webp to the app
"""
import base64, io, json, os, sys, time, urllib.request
import numpy as np
from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
HERE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "work")
os.makedirs(HERE, exist_ok=True)
KEY = os.environ.get("GEMINI_API_KEY", "")
APP = os.path.join(ROOT, "app", "public", "portraits")
MODEL = os.environ.get("GEM_MODEL", "gemini-3-pro-image")
GREEN = (0, 255, 0)
MAGENTA_SEATS = {"mkp"}  # green clothes: shoot these on magenta instead

DESIGN = {
    "sales": "a Thai man in his late 30s, Head of Sales Performance: neat short black hair with a side part, thin rectangular dark-rimmed glasses, calm precise half-smile, navy blazer over a light blue open-collar shirt, small blue bar-chart lapel pin",
    "promo": "a Thai woman in her mid 30s, Head of Pricing and Promotion: sleek black chin-length bob, shrewd confident smile with one eyebrow slightly raised, coral-orange blouse, small gold percent-sign brooch",
    "kol": "a young Thai woman in her late 20s, Head of Creator Strategy: long glossy dark-brown hair with a pearl hair clip, warm bright smile, pink blazer over a white top, small gold hoop earrings, a soft circular ring-light glow behind her head",
    "live": "an energetic Thai man around 30, Head of Live Commerce and livestream host: styled black quiff, big friendly grin, a thin black headset microphone with the boom by his cheek, red jacket over a black t-shirt",
    "mkp": "a practical Thai man in his early 40s, Head of Marketplace operations: short neat crew cut greying slightly at the temples, steady trustworthy expression, green polo shirt, small gold shopping-bag pin",
    "mkt": "a stylish Thai woman in her early 30s, Head of Marketing and Growth: black hair in a high top bun with a violet streak, confident creative smile, purple blazer over a black turtleneck, small rocket lapel pin, gold hoop earrings",
    "godin": "a caricature of marketing author Seth Godin: completely bald head, his signature thick bright yellow eyeglasses, big warm smile, plain black shirt",
}

STYLE = ("Create a NEW character portrait rendered in EXACTLY the same style as the FIRST reference image: "
         "the same stylised 3D caricature render (Pixar-like CGI, slightly oversized head, soft subsurface skin, "
         "detailed hair strands, realistic fabric), the same studio lighting, the same camera angle, the same framing and scale: "
         "a head-and-shoulders bust facing the camera, head centred, shoulders running off the bottom edge, head about the same size in frame. "
         "Mouth closed with a gentle smile, eyes open looking at the camera. "
         "Use the SECOND reference image only as a loose guide for the character design (hair, glasses, clothing colours, accessories); the text description wins. "
         "The character: {d}. "
         "Background: a perfectly flat, uniform pure chroma-key green (#00FF00) with no gradient, no shadow, no floor and nothing else. "
         "No text, no logos. Square image.")

FRAME = {
    "open": "Return this exact same image with ONE change only: the mouth is wide open as if saying 'aah', showing teeth and tongue naturally. Keep everything else identical: face, eyes, hair, clothes, lighting, framing, background.",
    "mid": "Return this exact same image with ONE change only: the mouth is half open in a rounded shape as if saying 'oh'. Keep everything else identical: face, eyes, hair, clothes, lighting, framing, background.",
    "blink": "Return this exact same image with ONE change only: both eyes are fully closed in a natural blink (eyelids down), mouth exactly as it is now. Keep everything else identical: hair, glasses, clothes, lighting, framing, background.",
}


def png_bytes(im):
    b = io.BytesIO(); im.save(b, "PNG"); return b.getvalue()


def on_green(path, size=1024):
    im = Image.open(path).convert("RGBA")
    bg = Image.new("RGBA", im.size, GREEN + (255,)); bg.alpha_composite(im)
    return bg.convert("RGB").resize((size, size), Image.LANCZOS)


def gemini(prompt, images):
    parts = [{"text": prompt}] + [{"inline_data": {"mime_type": "image/png", "data": base64.b64encode(png_bytes(i)).decode()}} for i in images]
    body = {"contents": [{"parts": parts}], "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "1:1"}}}
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={KEY}"
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, json.dumps(body).encode(), {"content-type": "application/json"})
            r = json.load(urllib.request.urlopen(req, timeout=240))
            for c in r.get("candidates", []):
                for p in c.get("content", {}).get("parts", []):
                    d = p.get("inline_data") or p.get("inlineData")
                    if d:
                        return Image.open(io.BytesIO(base64.b64decode(d["data"]))).convert("RGB")
            print("  no image in response:", json.dumps(r)[:400])
        except Exception as e:
            print("  error:", str(e)[:300])
        time.sleep(4 * (attempt + 1))
    raise SystemExit("gemini failed")


def base(key):
    if not KEY:
        raise SystemExit("Set GEMINI_API_KEY first.")
    ref = on_green(f"{APP}/hormozi-base.webp")
    # the seat's current portrait (if any) guides the character design
    old = on_green(f"{APP}/{key}-base.webp") if os.path.exists(f"{APP}/{key}-base.webp") else ref
    prompt = STYLE.format(d=DESIGN[key])
    if key in MAGENTA_SEATS:
        prompt = prompt.replace("pure chroma-key green (#00FF00)", "pure chroma-key magenta (#FF00FF)")
    im = gemini(prompt, [ref, old])
    n = len([f for f in os.listdir(HERE) if f.startswith(f"{key}-base")])
    im.save(f"{HERE}/{key}-base-{n}.png"); im.save(f"{HERE}/{key}-base.png")
    print(key, "base", im.size)


def frames(key):
    b = Image.open(f"{HERE}/{key}-base.png").convert("RGB")
    for fr, prompt in FRAME.items():
        im = gemini(prompt, [b]).resize(b.size, Image.LANCZOS)
        im.save(f"{HERE}/{key}-{fr}-raw.png")
        # keep only the pixels that changed in the face area, so frames match the base everywhere else
        a, e = np.asarray(b).astype(int), np.asarray(im).astype(int)
        diff = np.abs(a - e).sum(2)
        h, w = diff.shape
        box = np.zeros_like(diff, bool)
        box[int(h * .18):int(h * .80), int(w * .25):int(w * .75)] = True
        m = (diff > 60) & box
        mask = Image.fromarray((m * 255).astype("uint8")).filter(ImageFilter.MaxFilter(15)).filter(ImageFilter.GaussianBlur(6))
        out = Image.composite(im, b, mask)
        out.save(f"{HERE}/{key}-{fr}.png")
        print(key, fr, "changed px:", int(m.sum()))


def key_green(im, magenta=False):
    a = np.asarray(im.convert("RGB")).astype(float)
    r, g, b_ = a[..., 0], a[..., 1], a[..., 2]
    if magenta:
        greenness = np.minimum(r, b_) - g             # how much magenta dominates
    else:
        greenness = g - np.maximum(r, b_)             # how much green dominates
    alpha = np.clip(1 - (greenness - 40) / 80, 0, 1)  # >120 = background, <40 = subject
    # despill: pull green down to the other channels on edge pixels
    spill = np.clip(greenness, 0, None)
    if magenta:
        cap = g + spill * 0.15
        out = np.dstack([np.where(spill > 0, np.minimum(r, cap), r), g, np.where(spill > 0, np.minimum(b_, cap), b_), alpha * 255]).astype("uint8")
    else:
        g2 = np.where(spill > 0, np.maximum(r, b_) + spill * 0.15, g)
        out = np.dstack([r, np.minimum(g, g2), b_, alpha * 255]).astype("uint8")
    return Image.fromarray(out, "RGBA")


def final(key):
    # one alignment for all four frames, computed on the base
    keyed = {fr: key_green(Image.open(f"{HERE}/{key}-{fr}.png"), key in MAGENTA_SEATS) for fr in ["base", "open", "mid", "blink"]}
    al = np.asarray(keyed["base"])[..., 3] > 128
    ys, xs = np.where(al)
    top, cx = ys.min(), (xs.min() + xs.max()) / 2
    W = keyed["base"].width
    # match Hormozi: head top near 6% of the frame, bust filling the bottom edge
    ref = np.asarray(Image.open(f"{APP}/hormozi-base.webp").convert("RGBA"))[..., 3] > 128
    rys, rxs = np.where(ref)
    ref_top = rys.min() / ref.shape[0]
    scale = (1 - ref_top) / ((W - top) / W)           # subject height from top to bottom edge
    for fr, im in keyed.items():
        S = int(W * scale)
        big = im.resize((S, S), Image.LANCZOS)
        canvas = Image.new("RGBA", (S, S), (0, 0, 0, 0))
        dx = int(S / 2 - cx * scale); dy = int(ref_top * S - top * scale)
        canvas.alpha_composite(big, (max(0, dx), max(0, dy)) if dx >= 0 and dy >= 0 else (0, 0))
        if dx < 0 or dy < 0:
            canvas = Image.new("RGBA", (S, S), (0, 0, 0, 0)); canvas.paste(big, (dx, dy), big)
        canvas.resize((560, 560), Image.LANCZOS).save(f"{APP}/{key}-{fr}.webp", quality=92)
    print(key, "final written")


if __name__ == "__main__":
    cmd, keys = sys.argv[1], sys.argv[2:]
    for k in keys:
        {"base": base, "frames": frames, "final": final}[cmd](k)

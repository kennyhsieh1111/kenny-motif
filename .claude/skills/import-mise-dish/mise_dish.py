#!/usr/bin/env python3
"""Pull the card info for one recipe from the mise. API, for a le dressage symphony dish.

  python3 mise_dish.py <title|slug|id> [--api http://localhost:8000] [--img-dir site/img] [--name file-stem]

Copies the cover photo into --img-dir (480 px) and prints what a dish card in SYMPHONIES
(site/symphonies.html) needs: `img`/`pos` ready to paste, plus the {zh,en} title and summary
and the mise. tags to write `note` and `tags` from.
ponytail: needs the mise. API running; read api/mise.db directly if that ever gets in the way.
"""
import argparse, json, re, subprocess, sys, urllib.parse, urllib.request


def get(api, path):
    with urllib.request.urlopen(api + path, timeout=10) as r:
        return json.load(r)


def find(api, query):
    try:
        return get(api, "/recipes/" + urllib.parse.quote(query))
    except urllib.error.HTTPError:
        pass
    # search covers both languages (recipes.alt), so an English or 中文 title both work
    hits = get(api, "/recipes?q=" + urllib.parse.quote(query))
    exact = [h for h in hits if query in (h["title"], (h.get("alt") or {}).get("title"))]
    hits = exact or hits
    if len(hits) != 1:
        sys.exit(f"{len(hits)} recipes match {query!r}: " + ", ".join(h["title"] for h in hits[:10]))
    return get(api, "/recipes/" + hits[0]["id"])


def two(r, field):
    """mise. keeps text in `lang` and the other language in `alt`."""
    main = r.get("lang") or "zh"
    other = "en" if main == "zh" else "zh"
    return {"zh": "", "en": "", main: r.get(field) or "", other: (r.get("alt") or {}).get(field) or ""}


def js(v):
    return json.dumps(v, ensure_ascii=False)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("query")
    ap.add_argument("--api", default="http://localhost:8000")
    ap.add_argument("--img-dir", default="site/img")
    ap.add_argument("--name", help="image file stem; default: English title slug")
    a = ap.parse_args()
    try:
        r = find(a.api.rstrip("/"), a.query)
    except urllib.error.URLError as e:
        sys.exit(f"mise. API not reachable at {a.api} ({e.reason}). Start it: cd mise-en-place/api && uv run --env-file .env uvicorn app.main:app --port 8000")
    title, summary = two(r, "title"), two(r, "summary")
    print(f"// title:   zh {js(title['zh'])}  en {js(title['en'])}")
    print(f"// summary: zh {js(summary['zh'])}")
    print(f"//          en {js(summary['en'])}")
    print(f"// tags:    {', '.join(t['name'] for t in r['tags'])}")
    cover = r.get("cover_media")
    if not cover:
        return print("// no cover photo in mise.")
    stem = a.name or re.sub(r"[^a-z0-9]+", "-", (title["en"] or r["slug"]).lower()).strip("-")
    dest = f"{a.img_dir.rstrip('/')}/{stem}.jpg"
    urllib.request.urlretrieve(cover["url"], dest)
    subprocess.run(["sips", "-s", "format", "jpeg", "-Z", "480", dest, "--out", dest], check=True, capture_output=True)  # ponytail: macOS sips
    print(f"img:{js(dest.split('site/', 1)[-1])}" + (f", pos:{js(cover['focus'])}" if cover.get("focus") else ""))


if __name__ == "__main__":
    main()

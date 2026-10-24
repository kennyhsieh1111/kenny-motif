---
name: import-mise-dish
description: Import a recipe from the mise. app (mise-en-place repo) into a dish card of a le dressage symphony (site/symphonies.html), in both 中文 and English. Trigger when the user says "import <recipe> from mise into <dish>", "enrich <symphony dish> with <mise recipe>", "用 mise 的 X 豐富交響曲的 Y", or names a mise recipe alongside a symphony dish.
---

# Import a mise. dish into a symphony

mise. is the prep, le dressage is the serve. This brings only what a dish card in the `SYMPHONIES` array of `site/symphonies.html` shows: the photo, the one-line `note`, and `tags`, each in 中文 and English. No ingredients or steps.

Inputs: the **mise. recipe** (中文 or English title, slug or id) and the **target dish** (symphony id + dish name). Ask only if either is ambiguous.

## Steps

1. **mise. API must be up** (`http://localhost:8000`). Check with `curl -s localhost:8000/healthz`. If it is down, start it from `../mise-en-place/api`:
   `uv run --env-file .env uvicorn app.main:app --port 8000` (background).
2. **Pull the card info** from the le-dressage repo root:
   ```sh
   python3 .claude/skills/import-mise-dish/mise_dish.py "<recipe>" --name <file-stem>
   ```
   It copies the cover photo to `site/img/<file-stem>.jpg` at 480 px. It prints a pasteable `img`/`pos` line, plus the {zh,en} title, the {zh,en} summary and the mise. tags. More than one match → it lists the titles; rerun with the exact title or id.
3. **Update the target dish** in `SYMPHONIES`:
   - Keep the dish `name` unless the user asks to rename it.
   - Paste the `img`/`pos` line onto the dish object.
   - Rewrite `note` ({zh,en}) from the summary, about the length of the old note. Keep the menu voice: one short sentence or two, what is on the plate, ending on a serving beat. Correct claims the recipe contradicts, e.g. "炭烤" when it is oven-grilled.
   - Rework `tags` ({zh,en}, 2–3) from the mise. tags. mise. tags are in one language only; write the other side yourself.
   - Both languages must read naturally. mise. translations are AI-made; fix any that are wrong.
   - Never touch other dishes, movements or the entry `code`.
4. **Verify** in both languages. Serve `site/` with `python3 -m http.server -d site 8090`. Open `symphonies.html?s=<id>&lang=zh` and `&lang=en`. Unlock with the symphony's `code`, or set `localStorage['symph-<id>']='1'`. Check the photo crop and dark mode (`&theme=dark`).

## Notes

- `pos` is the mise. focal point (CSS `object-position`). Drop it or change it if the 72 px thumbnail misses the dish.
- Image download and resize use macOS `sips`.

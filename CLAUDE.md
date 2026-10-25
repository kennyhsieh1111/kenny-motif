# le dressage

Static bilingual menu site: the event menu (`site/index.html`, tabs 菜單 / 契機) and Symphonies, full-course dinner programmes behind an entry code (`site/symphonies.html`). No build step. **Version 0.0.1** (`README.md`, `CHANGELOG.md` — bump together).

**Design system:** [Le Dressage](https://claude.ai/artifact/4SAq4UJfqT4viF7YMDHpPc) — read its `project/README.md` before styling anything. It is the serve-side sibling of the mise. design system (`../mise-en-place/.claude/skills/mise-en-place-design/`): same olive / clay / sand ramps, same three typefaces, same mark construction. Tokens and the shared parts (top bar, hero title, section heads, tags, footer) live in `site/style.css` (light tokens at the top, dark below); both pages link it, then add their own layout in an inline `<style>`. Colours go through tokens; never write a literal colour or a `html[data-theme="dark"]` override for one. The plating motif's geometry is `site/plating.js` (the menu paints it to canvases, Symphonies draws it as SVG). Change a value here and in the design system together.

**Shared shell with mise.:** the top bar, the settings panel and the credit footer copy mise.'s (`Shelf.tsx` topbar + `PlaceNav.tsx`, `SettingsMenu.tsx`, the `.credit` footer in `app/layout.tsx`; CSS in `web/src/styles/app.css`): same sizes, places, icons (Lucide) and labels. Change one, change the other.

**Changelog:** `CHANGELOG.md`, one entry per version. Update it whenever you ship a visible change.

## Git flow (releases batch features)

Same flow as mise.

- **`main` holds released versions only**, each tagged `vX.Y.Z`. A push to `main` deploys `site/` to GitHub Pages, so `main` is what guests see. Never open a feature PR against `main`.
- **One open release branch at a time: `release/vX.Y.Z`** — the next unreleased version (the newest `release/v*` with no matching tag; `git tag -l 'v*'` vs `git branch -r --list 'origin/release/*'`). If none exists, cut it from `main` with the next patch version, bump the version (the places above) and open the `CHANGELOG.md` entry `vPREV → vX.Y.Z (this rev)` — then push it.
- **Feature/fix branches** (`feat/…`, `fix/…`, `docs/…`, `chore/…`) branch from that release branch and their PRs **target it** (`gh pr create --base release/vX.Y.Z`). Each one adds its part to the **same** changelog entry — one entry per version, never one per PR.
- **Releasing happens only when the user asks**: first bring every doc up to date with what the release ships, on the release branch (a `docs/release-vX.Y.Z` branch → PR into it). Never release with stale docs:
  - **CHANGELOG.md** — the entry covers every merged PR (`git log main..release/vX.Y.Z`); drop "(this rev)" from the previous entry.
  - **README.md** — *Features* and *Architecture*.
  - **CLAUDE.md** — this file.
  - **`docs/architecture.html`** — if pages, data flow or storage changed.
  - **Design system** — tokens and components match `site/style.css` and the pages.
  - **Version** — vX.Y.Z everywhere listed above; `git grep -nF <previous version>` finds leftovers (past changelog entries are expected hits).

  Then PR `release/vX.Y.Z` → `main`. After it merges, tag the merge commit and push the tag: `git tag -a vX.Y.Z <merge-sha> -m "vX.Y.Z" && git push origin vX.Y.Z`. The next change then cuts the next release branch.

## Run

```sh
docker compose up -d          # http://localhost:8080 (PORT=8081 to move it)
python3 -m http.server -d site 8090   # no Docker
```

Check both pages in 中文 and English, light and dark (`?lang=en&theme=dark`), at phone width.

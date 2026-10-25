<img src="site/logo/le-dressage-mark.svg" width="56" alt="le dressage mark">

# le dressage

*Dressage* is the French kitchen word for plating — the moment a dish is dressed and served. It is the sister of **mise.** (*mise en place*, everything in its place): mise. is the prep, le dressage is the serve. The two share one visual system — olive, clay and sand on ivory; Bricolage Grotesque, Hanken Grotesk and Spline Sans Mono.

**Version 0.0.1** · [changelog](CHANGELOG.md) · design system: [Le Dressage](https://claude.ai/artifact/4SAq4UJfqT4viF7YMDHpPc)

Static menu site for le dressage《上桌之前 BEHIND THE SERVE》 (菜單 / 契機 / 交響曲), live at https://kennyhsieh1111.github.io/le-dressage/. All content hard-coded in `site/index.html`.

```sh
docker compose up -d
open http://localhost:8080
```

Port 8080 busy? `PORT=8081 docker compose up -d`.

Fonts load from Google Fonts; everything else is local. Google Analytics tag removed.

## Architecture

[`docs/architecture.html`](docs/architecture.html) is an interactive system diagram (open it in a browser). In short: a push to `main` makes GitHub Actions upload `site/` to GitHub Pages with no build step; `docker compose` serves the same folder through nginx for local preview. Both pages (`index.html`, `symphonies.html`) load `i18n.js` in `<head>`, keep all content as JS objects inline, and remember language, theme, favourites, lite mode and symphony unlocks in `localStorage`. The only server call is `likes.php` for favourite counts, made on `localhost` only; that endpoint is not in this repo.

## Features

- **Language toggle** (EN / 中) and **theme toggle** (sun / moon) in the header. Choice is saved in `localStorage`; first visit follows the browser language and OS colour scheme.
- `site/i18n.js` holds the English dictionary and the theme/lang bootstrap. Colour and type tokens follow the mise. design system: light tokens at the top of the `<style>` block in `index.html`, dark tokens at the end. `symphonies.html` keeps its own copy.
- URL overrides for sharing a specific view: `?lang=en&theme=dark`.
- **Symphonies** tab → `site/symphonies.html`, a standalone full-course menu site in the same look. The landing lists every concert; `?s=<id>` opens one behind an entry code. Each symphony is one object in the `SYMPHONIES` array (`id`, `date`, `code`, movements, ambience). The code is plain text in the file and the unlock is remembered in `localStorage`, so it steers guests rather than secures anything.
- **Logo**: `site/logo/le-dressage-mark.svg` (favicon + header) and `le-dressage-wordmark.svg`. Same olive tile and plate ring as the mise. mark; the clay moves from beside the plate onto it as a sauce swoosh.

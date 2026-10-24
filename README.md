<img src="site/logo/le-dressage-mark.svg" width="56" alt="Le Dressage mark">

# Le Dressage

*Dressage* is the French kitchen word for plating — the moment a dish is dressed and served. It is the sister of **mise.** (*mise en place*, everything in its place): mise. is the prep, Le Dressage is the serve. The two share one visual system — olive, clay and sand on ivory; Bricolage Grotesque, Hanken Grotesk and Spline Sans Mono.

Static menu site for Le Dressage《動機 MOTIF》 (菜單 / 契機 / 交響曲), live at https://kennyhsieh1111.github.io/le-dressage/. All content hard-coded in `site/index.html`.

```sh
docker compose up -d
open http://localhost:8080
```

Port 8080 busy? `PORT=8081 docker compose up -d`.

Fonts load from Google Fonts; everything else is local. Google Analytics tag removed.

## Features

- **Language toggle** (EN / 中) and **theme toggle** (sun / moon) in the header. Choice is saved in `localStorage`; first visit follows the browser language and OS colour scheme.
- `site/i18n.js` holds the English dictionary and the theme/lang bootstrap. Colour and type tokens follow the mise. design system: light tokens at the top of the `<style>` block in `index.html`, dark tokens at the end. `symphonies.html` keeps its own copy.
- URL overrides for sharing a specific view: `?lang=en&theme=dark`.
- **Symphonies** tab → `site/symphonies.html`, a standalone full-course menu site in the same look. The landing lists every concert; `?s=<id>` opens one behind an entry code. Each symphony is one object in the `SYMPHONIES` array (`id`, `date`, `code`, movements, ambience). The code is plain text in the file and the unlock is remembered in `localStorage`, so it steers guests rather than secures anything.
- **Logo**: `site/logo/le-dressage-mark.svg` (favicon + header) and `le-dressage-wordmark.svg`. Same olive tile and plate ring as the mise. mark; the clay moves from beside the plate onto it as a sauce swoosh.

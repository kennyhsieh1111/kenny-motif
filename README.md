# kenny-motif

Static site for 肯尼計畫《動機 MOTIF》 (菜單 / 後援品牌 / 契機), live at https://kennyhsieh1111.github.io/kenny-motif/. All content hard-coded in `site/index.html`.

```sh
docker compose up -d
open http://localhost:8080
```

Port 8080 busy? `PORT=8081 docker compose up -d`.

Fonts load from Google Fonts; everything else is local. Google Analytics tag removed.

## Clone additions

- **Language toggle** (EN / 中) and **theme toggle** (sun / moon) in the header. Choice is saved in `localStorage`; first visit follows the browser language and OS colour scheme.
- `site/i18n.js` holds the English dictionary and the theme/lang bootstrap. Dark theme tokens live at the end of the `<style>` block in `index.html`.
- URL overrides for sharing a specific view: `?lang=en&theme=dark`.
- **Symphonies** tab → `site/symphonies.html`, a standalone full-course menu site in the same look. The landing lists every concert; `?s=<id>` opens one behind an entry code. Each symphony is one object in the `SYMPHONIES` array (`id`, `date`, `code`, movements, ambience). The code is plain text in the file and the unlock is remembered in `localStorage`, so it steers guests rather than secures anything.

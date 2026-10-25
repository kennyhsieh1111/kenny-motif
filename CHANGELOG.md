# Changelog

One entry per version, newest first. Feature and fix PRs into `release/vX.Y.Z` add their part to that version's entry.

## v0.0.1 (this rev)

First versioned release. Everything before it (PRs #1–#6: the rebrand from the MOTIF clone to le dressage on the mise. palette, lowercase brand, Symphonies, the architecture diagram, the import-mise-dish skill) ships as the baseline.

**Refurbished on the Le Dressage design system.**
- **Plated backdrop.** The polar-rose backdrop is now a dressed plate: rim, spoon swooshes, dot trails, herbs and crumbs, each layer turning at its own speed. Symphonies gets the same plate in its hero (seeded 11, for 11/11), and its hub line moves from Jost to Hanken Grotesk like the rest of the site.
- **The serve footer.** 「謝謝你，成為這一杯的最後一步」 / "Thank you for being the last step of every cup", with copy about the preparation behind the serve. The tag-handle tiers and their copy button are gone.
- **One stylesheet.** `site/style.css` carries the tokens and shared parts for both pages; Symphonies no longer keeps a copy. Every colour is a token, so dark mode is token values only.
- **Legibility.** Captions and meta text (`ink-3`) darken to sand-600 in light mode (3.6:1 → 5.3:1). Dish notes use the same colour. A pressed maker chip fills with a deeper clay (white text 4.4:1 → 5.9:1); the wordmark's period stays clay-500. The pressed heart is a deeper rose (4.7:1 on its tint). Labels on olive in dark mode turn dark instead of white.
- **On the family scale.** Corner radii move to the mise. steps (12 / 16 / 20 / pill): the photo wall, venue and partner cards 18 → 20, the sheet 22 → 20, small photos and inputs 10 / 14 → 12, ingredient rows 14 → 16. Half-pixel type sizes round onto the scale (11.5 / 12.5 → 12, 13.5 → 13, 14.5 → 15, 16.5 → 16).

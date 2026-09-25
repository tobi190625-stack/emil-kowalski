# Vertic design system: lift-station signage

The store reads like the signs at a lift base station. Navigation is a set of sign plates with arrows; everything else stays out of the way of the photography.

## Tokens (`shopify/assets/vertic.css`)

| Token | Value | Use |
| --- | --- | --- |
| `--vx-lift` | `#0c3a8a` | Header, secondary sign plate |
| `--vx-lift-deep` | `#082c6b` | Page ground behind tiles, board, footer, hero scrim |
| `--vx-plate` | `#f3f5f6` | Enamel sign plate, text on blue |
| `--vx-ink` | `#0b1526` | Text on plates and on yellow |
| `--vx-signal` | `#ffc629` | Arrow tiles, announcement bar, board labels, focus ring, selection |
| `--vx-muted-on-lift` | `#c9d6ee` | Secondary text on blue |
| `--vx-radius` | `6px` | Every corner: plates, tiles, board, buttons |

Type: Barlow Condensed 600/700 (display, uppercase) and Barlow 400/500/600 (text), from Google Fonts.

## Components

- **Sign plate** (`.vx-plate`): white or lift-blue plate, uppercase condensed label, yellow arrow tile on the right. Always a real `<a href>`. Presses scale to 0.97 in 140ms.
- **Signpost** (`.vx-signpost`): plates hung on a steel pole in the hero, bottom right. On phones the pole drops away and the plates go full width.
- **Range tile** (`.vx-tile`): 4:5 photo with a plate hung at the bottom left.
- **Info board** (`.vx-board`): dark lift-status panel, yellow labels, plain detail text.

## Motion

One authored moment: on load the hero photo settles from 1.05 scale, the headline fades up, and the sign plates swing in from the pole (`--vx-ease-hang`, a light overshoot used only here). Range tiles reveal once with a clip-path as they scroll in. After that, only press feedback. Reduced motion keeps the fades and drops all movement.

## Rules

- Hover effects live inside `@media (hover: hover) and (pointer: fine)` only.
- Entrance start states exist only under `html.vx-motion`, which is set in `<head>` outside the theme editor, with a 3s failsafe that reveals everything.
- No click handlers on navigation. Links navigate on the first tap.
- No eyebrows, no em dashes, one accent (signal yellow).

# Vertic design system: monochrome, photo-led

The homepage keeps the owner's layout: a half-screen banner, then Men and Women as two flush click-through tiles that fill the rest of the first screen, then a newsletter sign-up. Everything around the photos is black and white so the photography carries the colour.

## References and what was taken from each

- **Represent**: strict black and white, centred wordmark, slow photo zoom on hover.
- **Arc'teryx**: banner headline bottom left with one pill button; category tiles labelled bottom left.
- **Aimé Leon Dore**: headline words slide up from behind a mask; underlined text links.
- **Norrøna / Nike**: big tap targets, smooth page-to-page fades.

## Tokens (`shopify/assets/vertic.css`)

| Token | Value | Use |
| --- | --- | --- |
| `--vx-ink` | `#111111` | Text, announcement bar, selection |
| `--vx-white` | `#ffffff` | Header, buttons, text on photos |
| `--vx-line` | `rgba(17,17,17,.12)` | Header and footer hairlines |
| `--vx-ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` | Entrances, hovers, presses |
| `--vx-ease-in-out` | `cubic-bezier(0.77, 0, 0.175, 1)` | Tile wipe reveal |

Type: Geist 400 to 700 from Google Fonts. Headlines 600 weight, tight tracking (-0.035em). Nav in small uppercase with wide tracking. All buttons and inputs are full pills.

## Motion

- Banner: photo settles from 1.08 scale, headline words rise out of masks one after another, text and button fade up.
- Tiles: photos wipe up from the bottom when they scroll in, then the label fades up. Hover zooms the photo to 1.04 and redraws the underline; press eases it back.
- Banner drifts slower than the page as it scrolls away (CSS scroll-driven animation, where supported).
- Page to page: 220ms cross-fade via cross-document view transitions.
- Reduced motion removes all movement.

## Rules

- Hover effects live inside `@media (hover: hover) and (pointer: fine)` only.
- Entrance start states exist only under `html.vx-motion`, set in `<head>` outside the theme editor, with a 3s failsafe that reveals everything.
- No click handlers on navigation. Every tile and button is a plain link.
- Photos are real (Pexels licence), never generated.

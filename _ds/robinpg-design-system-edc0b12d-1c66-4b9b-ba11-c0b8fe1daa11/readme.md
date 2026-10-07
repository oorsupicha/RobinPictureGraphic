# RobinPG Design System

**Robin Picture Graphic (RobinPG)** is an independent studio producing **game motion &
animation for Unreal Engine 5**. Their flagship product is the *Basic Movement Female*
animation set — a complete female-character locomotion library (walk, run, crouch, jump,
roll, pivot, mantle: 269 UE5 animations) built for the **Advanced Locomotion System (ALS
v4)** blueprint and sold on the Unreal **FAB Marketplace**. They ship FBX source, a child
ALS blueprint, install guides, and a free in-engine demo.

This design system captures a **refreshed brand direction** for RobinPG: the robin-teal
mark, the **Coolvetica** display face, and the **Vollkorn** serif the studio supplied —
expressed as an "engine viewport" aesthetic (dark teal-ink surfaces, a single teal glow,
hairline grids) that feels native to game-dev tooling while staying warm and readable.

> **Note on the refresh.** The studio's *current live site* uses Syne + Inter on near-black
> with a gold accent. The uploaded brand kit (Coolvetica, Vollkorn, the teal logo) points a
> new way, so this system is built around **teal + Coolvetica + Vollkorn**, not the old
> gold/Syne pairing. If the gold direction is still wanted, flag it and we'll branch.

---

## Sources

- **GitHub repo:** `oorsupicha/RobinPIctureGraphic` — the live marketing site
  (`index.html`, `basic-movement.html`, `blueprint-guides.html`, `faqs.html`,
  `contact.html`, `style.css`, `nav.js`). Explore this repo to mine real product copy,
  page structure, and the animation catalogue.
- **Local codebase mount:** `Github_RobinPIctureGraphic/` (same files, read-only).
- **Brand kit (uploads):** `coolvetica *.otf` (display), `Vollkorn *.ttf/.otf` (serif),
  `logo_RPG.png` (teal robin mark, 3000×3000, transparent).
- **External links found in the codebase** (store for reference; reader may not have access):
  FAB listing `fab.com/listings/f903e60f-…`, free demo on Google Drive, YouTube
  `@RobinPG`, Discord, Facebook `RobinPictureGraphic`.

Reading the GitHub repo directly is the best way to extend this system with accurate
product copy and screens.

---

## CONTENT FUNDAMENTALS

**Voice — a helpful indie creator talking to fellow developers.** Warm, plain-spoken,
encouraging. The studio writes as **"we"** and addresses the reader as **"you"**
("We've got you covered", "bringing *your* female character to life", "Try it before you
buy it"). Never corporate, never hype-heavy.

- **Tone:** confident but humble. They openly credit ALS v4 / LongmireLocomotion and state
  "We do not hold rights or ownership of that blueprint." Honesty over polish.
- **Casing:** Headlines in **sentence case** ("Game motion & animation production",
  "Try it before you buy it"). Eyebrows / labels / buttons in **UPPERCASE** with wide
  tracking ("WHAT'S INCLUDED", "BUY ON FAB", "FREE DOWNLOAD").
- **Sentence length:** short, scannable. Feature copy is 1–2 sentences. Reading copy
  (guides, about) is a touch longer but never academic.
- **Numbers are the proof.** The brand leans on precise counts — *269 animations,
  10-direction locomotion, 4-direction rolling, ALS v4, UE 5.2+.* Use real numbers as
  headlines; they signal craft and completeness.
- **Calls to action are direct verbs:** "Buy on FAB", "Download Free Demo",
  "View animations", "Read the guide", "Browse FAQs".
- **Audience vocabulary:** speak Unreal fluently — *locomotion, blueprint, retarget,
  enumerator, overlay state, mantle, FBX, pivot, child blueprint, GameMode*. Don't dumb
  it down; do explain setup step-by-step for newcomers ("New to ALS?").
- **Emoji:** used *very sparingly* as a friendly punctuation — a single 🎮 to close a
  successful setup. Treat as rare seasoning, never decoration in UI chrome.
- **Punctuation flourish:** the em-dash and the middot separator ("Windows OS · Unreal
  Engine 5 · Free") carry the spec-sheet rhythm. The arrow "→" trails every text link.

**Example phrases (real):** "Perfect for bringing your female character to life with style
and grace." · "Walk, run, crouch, jump, roll — every move covered." · "Try before you
buy." · "Enjoy the experience! 🎮"

---

## VISUAL FOUNDATIONS

**The big idea: an Unreal Engine viewport.** Dark teal-ink surfaces, hairline gridlines,
and a single robin-teal light source. Content sits in a precise, instrument-panel grid;
imagery (character renders) provides the warmth and color.

- **Color.** One hero hue — **Robin Teal `#39CCCE`**, sampled from the logo. It is the
  only saturated UI color: links, focus, active states, primary buttons, the glow.
  Surfaces are teal-tinted charcoals (`--ink-900 #0A1314` app bg → `--ink-700` cards).
  Text is warm **bone** (`#FBF9F3`→muted) so it reads softly against cool ink — this warm/
  cool tension is the signature. **Ember `#F2A93F`** is a secondary accent for "buy"/
  warning energy only — use it once per view, max. A light **paper** scope (`.paper`)
  flips to warm `#FBF9F3` surfaces with `#0E1A1B` ink for docs/print.
- **Type.** **Coolvetica** for everything loud — a wide, rounded, friendly grotesque that
  reads "arcade/game". **All headlines & topic titles use Coolvetica Regular** (`--font-display`),
  with the **Coolvetica Regular Italic** cut for the emphasized word or topic accent (the
  hero's italic teal word). Numerals also use Coolvetica Regular. The cramped Compressed cut
  was dropped. Eyebrows/labels use the **Condensed** cut, UPPERCASE, wide-tracked. **Vollkorn**
  (warm humanist serif) carries *all* reading copy — body, descriptions, guides — its
  bracketed serifs add craft and contrast the geometric display. Mono for engine paths/
  blueprint names. Never set body in Coolvetica or headlines in Vollkorn.
- **Spacing & layout.** 4px base scale. Centered max-width container (~1100px) with a
  2rem gutter. Layouts favor **full-width hairline grids** — cards butt together separated
  only by 1px `--border` lines (a `gap:1px` on a bordered background), echoing engine
  panels. Sections are divided by full-bleed 1px rules with an UPPERCASE eyebrow label.
- **Backgrounds.** Flat dark ink — *no busy gradients*. The one permitted gradient is a
  soft radial **teal glow** behind hero content (`--glow-soft`) and the protection
  gradient under image labels (transparent→ink). Character renders are shown full-bleed,
  edge-to-edge in strips, slightly desaturated at rest and brought to full saturation on
  hover.
- **Corners.** Tight and geometric — the mark is built from sharp triangles. Default
  control radius is **4px** (`--radius-md`); many surfaces use **0**. Pills only for
  status dots/tags. Never large soft cards.
- **Cards.** Flat fills (`--surface-card`) with a 1px hairline border, **no drop shadow**
  by default; on hover they lift one ink step (`--surface-hover`). Elevation on dark is
  expressed with **glow** (`--glow-teal`), not shadow. Drop shadows appear only on true
  overlays (dialogs, toasts) and in the paper scope.
- **Borders.** Hairline `1px` `--border` everywhere — the grid is the decoration. A
  `2px` teal border marks active/selected. Left-accent borders (3px teal/ember) flag
  info & tip callouts, lifted directly from the guides page.
- **Motion.** Restrained and functional. Fades and short transl(120–360ms) on
  `--ease-out`; a single **`--ease-snap`** overshoot reserved for playful moments (a dot
  pulse, a toggle). Links grow their trailing-arrow gap on hover. A slow pulse animates
  the "available now" status dot. Respect `prefers-reduced-motion`.
- **Hover / press.** Hover = lighten surface one step *or* raise opacity to full /
  brighten teal to `--accent-hover`. Primary press darkens to `--accent-press`; controls
  may nudge `translateY(1px)` or scale 0.98 on press. Text links brighten + extend arrow.
- **Transparency & blur.** Sticky nav uses `rgba(ink)` + `backdrop-filter: blur(12px)`.
  Image labels use a transparent→ink protection gradient. Otherwise surfaces are opaque.
- **Iconography motif.** The logo's vocabulary — **D-pad triangles (▲▼◄►), playback
  chevrons, and a loop/refresh arc** — is the brand's icon language: direction, playback,
  motion. Prefer these geometric glyphs for anything about locomotion or animation.

---

## ICONOGRAPHY

RobinPG's brand uses a set of **custom teal category icons** (a friendly 2px line / solid
style on transparent grounds), backed by the logo motif and a small amount of typographic
glyphs:

- **Brand category icons** — `assets/icons/` ships the five used across the site:
  `gamepad.png` (game animations), `stand-up.png` (locomotion / basic movement),
  `architectural.png` (blueprint & guides), `youtube.png` (video preview), `how-to.png`
  (FAQ / how-to). All are robin-teal `#39CCCE` on transparent, 3000×3000 PNG — size them
  ~46–64px and let them sit on the dark ink. These replace the old photo strip on the home
  page (one icon per content section).
- **Lucide** (`https://unpkg.com/lucide-static`) for any *additional* UI glyphs not covered
  by the brand set — clean 1.5–2px stroke, rounded joins, which matches the brand icons'
  weight. Loaded from CDN. *(Flagged substitution: only the five category icons are
  first-party; everything else is Lucide.)*
- **Logo motif glyphs** — directional triangles (▲ ▼ ◄ ►), playback (► ❚❚ ◼), and a
  loop/refresh arc — drawn from the mark for locomotion/animation contexts.
- **Unicode used as UI**: the arrow `→` on every link, the middot `·` separator, the
  `+`/`×` toggle on FAQ accordions, `✓` checks on feature tags.
- **Emoji:** essentially none in chrome; a lone 🎮 appears as a success flourish.
- **Logo asset:** `assets/logo/logo_RPG.png` — teal robin + D-pad, transparent
  background, works on dark and light. Use small (28–40px) in nav, larger as a poster.

---

## Index / Manifest

**Foundations (root)**
- `styles.css` — the single entry point consumers link (imports only).
- `tokens/fonts.css` · `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css`
- `base.css` — element defaults + display helpers (`.ds-display`, `.ds-hero`, `.ds-eyebrow`).
- `assets/fonts/` — Coolvetica (4 cuts) + Vollkorn (6 weights).
- `assets/logo/logo_RPG.png` — primary mark.
- `guidelines/` — foundation specimen cards (Design System tab).

**Components** (`components/`) — see each directory's card + `.prompt.md`:
- `core/` — Button, IconButton, Badge, Tag, Chip, StatBlock
- `forms/` — Input, Select, Checkbox, Switch
- `layout/` — Card, Eyebrow, Callout
- `feedback/` — Accordion, Toast

**UI kits** (`ui_kits/`)
- `website/` — the RobinPG marketing site recreation (home, product, guide).

**Other**
- `SKILL.md` — makes this system usable as a downloadable Claude Skill.
- `readme.md` — this file.

To extend with accurate product screens, read the GitHub repo
`oorsupicha/RobinPIctureGraphic` and reuse the copy + structure there.

# Mihrab — Sanctuary V37

A mobile-first spatial redesign of Mihrab built only with HTML, CSS, SVG, and Vanilla JavaScript.

## What changed in V37

V37 keeps the Sanctuary direction and focuses on polish, tactility, and performance:

- The mobile sanctuary is lighter and shorter, while retaining the portal identity.
- Atmospheric drift/breathe is slower; broad permanent `will-change` hints are removed.
- Low Power is one consolidated performance override: it removes continuous compositor-heavy effects without flattening the material language.
- Tasks use an accessible custom checkbox treatment plus tactile press, hover illumination, completion ripple/rail/sink motion, and Undo.
- Desktop Now/Next/Later notes drift slowly and deliberately rather than snapping.
- Pointer inertia is softer and remains RAF-batched.
- Responsive media rules for 840px, 390px, and reduced motion are consolidated into single blocks.

## Architecture

The app remains HTML/CSS/SVG/Vanilla JavaScript. No React, Vue, Svelte, Three.js, WebGL, Canvas loops, or particle engine was introduced.

The existing localStorage model, routes, brand SVG, Rafiq bridge, content library, history, Focus Mode, themes, language switching, and PWA structure remain in place.

## Data safety

Historical completion data is event-based where available. Legacy completed records without a recorded completion date remain undated; the app does not synthesize a historical completion date.

## Verification actually performed for V37

- `node --check app.js`: PASS.
- CSS brace balance: PASS.
- One `:root`: PASS.
- One 840px responsive block: PASS.
- One 390px responsive block: PASS.
- One reduced-motion block: PASS.
- One consolidated Low Power architecture: PASS.
- No broad permanent `will-change` usage: PASS.
- Manifest JSON: PASS.
- Local asset references in `index.html`: checked.

Not verified in this environment: physical touch on a real device, GitHub Pages production behavior, and service-worker update lifecycle on the deployed origin. The environment blocked reliable Chromium navigation to the local project, so no browser/device claims are made here.

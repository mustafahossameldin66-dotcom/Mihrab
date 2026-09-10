# Current State
Mihrab Sanctuary Final is implemented from the V30 baseline. The Home experience is a spatial sanctuary rather than a conventional dashboard: a full-screen entry threshold, cinematic portal scene, living atmosphere, Now/Next/Later execution layer, six-room constellation, and deeper daily execution chamber. Islamic Studies is now generic/data-driven and completion history is event-based.

# Architecture
- router: one hash router in `app.js`
- render model: one route renderer per main view; Home rebuilt around a spatial sanctuary composition
- state model: existing localStorage state and legacy migration, with a dedicated persisted Daily Momentum record
- CSS architecture: one `:root`, one material/atmosphere language, one responsive system with Sanctuary-specific responsive composition
- responsive architecture: mobile-first behavior at <=840px plus 390px/320px safeguards
- pointer/ambient system: one centralized pointer RAF engine with CSS variables; no per-card pointer listeners
- modal system: one shared modal/overlay system
- theme system: existing theme tokens plus System/Auto behavior
- content library system: generic library records shared by System and Islamic Studies
- series progress/completion system: generic session completion, automatic 100% completion, history snapshots, 25/50/75/100 milestones
- consistency/history system: recorded events + daily plan snapshots; metrics do not infer missing history
- service-worker/cache system: `mihrab-v31-sanctuary`

# Completed
- Added full-screen Mihrab-native entry threshold and entry/skip transitions.
- Entry uses the exact original Mihrab SVG geometry and exact Arabic/English brand treatment.
- Rebuilt Home spatial composition around a central portal, Now/Next/Later, six rooms, and protected execution.
- Added layered aurora, architectural mesh, micro-stars, rings, living surface motion, and low-power/reduced-motion handling.
- Added deliberate mobile composition and verified no horizontal overflow at 390px.
- Added persisted Daily Momentum using `mihrab.dailyMomentum.v1`.
- Fixed task interaction so checkbox changes are handled by one delegated change listener and each completion generates one event.
- Added completion Undo with a short toast window.
- Added generic Islamic Studies library renderer with active/paused/completed states and importance badges.
- Added generic session completion, automatic 100% completion, history snapshots, and 25/50/75/100 milestone records.
- Preserved undated legacy completed records without synthesizing dates.
- Added Recently Completed and Achievement Timeline surfaces in System.
- Expanded local-first consistency metrics to week/month/quarter/year/all-time with tracked-vs-unknown behavior.
- Updated service worker cache to `mihrab-v31-sanctuary`.
- Updated README and progress handoff documentation.

# In Progress
None for the Sanctuary implementation phase.

# Next Step
Deploy the exact package to the user's target GitHub Pages repository and perform real-device touch testing.

# Known Issues
- Production service-worker behavior depends on the user's deployed origin and cannot be reproduced exactly in this environment.
- Physical touch testing on a real phone/tablet is not available here.
- Chromium screenshot/compositing in the synthetic CDP document harness can show transition frames before a CSS transition has fully settled; functional DOM/runtime verification is not affected.

# Verification
- `node --check app.js`: passed.
- CSS brace-balance: passed (605 opening / 605 closing braces at the final verification point).
- JS brace-balance: passed (761 opening / 761 closing braces at the final verification point).
- One `:root` declaration confirmed.
- One `pointermove` listener confirmed.
- One delegated document `click` listener and one delegated document `change` listener confirmed.
- No global `touch-action:none`.
- No React/Vue/Svelte/Three.js/WebGL/canvas-loop implementation.
- Original `assets/mihrab-logo.svg` and `assets/icon.svg` SHA-256 remain `92be1fa93cf8741af027d621d49877aa1b3e2c12f455665b3d2558f76114220e`.
- Controlled Chromium/CDP browser harness executed the actual JS/CSS and verified boot, entry threshold, six routes, Home composition, generic future Islamic series rendering, session completion, automatic 100% completion, milestones, undated legacy completion, daily momentum persistence/stability, task completion event count, Undo, shared modal, theme/language switching, and runtime errors.
- Mobile viewport verification at 390x844 confirmed `scrollWidth === clientWidth` and no horizontal overflow.
- Not verified: physical touch on a real device, production GitHub Pages browser behavior, and production service-worker lifecycle.

# Important Decisions
- Entry scene is shown on each new page load. It is a visual threshold only and does not alter application state.
- Daily Momentum is persisted separately so its once-per-day behavior is robust even across state reloads.
- Completed legacy series keep `completionDate: null` when the original record has no historical date.
- Islamic series are rendered through one generic library model; new Islamic records require no custom renderer.
- Session progress is append-event driven for long-term history, while current library records remain editable.
- No backend, framework, WebGL, canvas loop, or particle engine was introduced.
- Spatial richness is produced with CSS/SVG layers, gradients, masks, transforms, controlled blur, and one pointer engine.

# Files Changed
- `index.html`
- `app.js`
- `styles.css`
- `sw.js`
- `README.md`
- `progress.md`

# Data / Migration Notes
No existing storage key was renamed or deleted. The legacy key `dersh-integrated-v4` remains a migration source. The current key remains `study-dashboard-focus-v7`. Daily Momentum uses the additional local key `mihrab.dailyMomentum.v1`. No stored user data is reset by the Sanctuary refactor. New history fields are additive and backward compatible.


## V34 refinement pass (2026-09-10)
- Corrected the Low Power implementation: it no longer globally removes shadows/animations or flattens the spatial stage. It now suspends ambient/pointer-heavy motion, reduces blur, and preserves essential material depth and interaction feedback.
- Made the paper/system-light material system theme-aware across the topbar, utility controls, floating notes, room cards, stage, and common surfaces.
- Reworked the desktop room constellation into a clear non-overlapping 3x2 spatial suite while preserving depth through Z separation.
- Pointer engine now explicitly respects low-power and prefers-reduced-motion state; system theme re-renders when the OS theme changes.
- Updated asset query versions to 34.0 and service-worker cache to v34.
- Verification performed: JS syntax, browser runtime, six routes, light/dark/low-power modes, task interaction, system-theme state reaction, mobile widths 320/360/375/390/430, and horizontal overflow checks. Real-device touch testing remains unperformed.


## V35 Refinement Pass
- Reduced compositor-heavy blur and backdrop-filter usage while retaining the spatial material language.
- Added architectural horizon/floor cues to the Home sanctuary without adding canvas/WebGL.
- Tuned hero scale, portal balance, floating notes, and desktop negative space.
- Low Power now removes expensive backdrop filters and live blur while retaining shadows, surfaces, hierarchy, and interaction.
- Added content containment/content-visibility for below-fold Home sections.
- Verification target: static syntax + Playwright runtime + responsive overflow + theme/low-power checks.

## V36 Smoothness / UX Pass
- Mobile now has one navigation system: the bottom dock; duplicate top navigation hidden below 840px.
- Reduced route/entry blur cost while preserving spatial arrival.
- Lightened dark-mode secondary text slightly for readability.
- Tightened mobile sanctuary height and removed non-essential floating notes/stat on small screens.

## V36 Verification
- app.js passes Node syntax check.
- Single-page Playwright smoke test: entry threshold, six rooms, paper theme, low-power compositor reduction, route change, and no horizontal overflow all passed.
- Low Power removes backdrop filters and live background animation while preserving stage shadow/material and page structure.
- Service worker cache name bumped to mihrab-v36-sanctuary.
- Real-device touch and production GitHub Pages lifecycle remain unverified here.

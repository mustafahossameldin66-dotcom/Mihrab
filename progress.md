# Current State
V38 Personal OS refinement built from V37 baseline. Added unified execution model with projects, areas, protected worship, focus, and period-based progress. Primary architecture is Home / Execution / Focus / Progress / System, with legacy content rooms retained behind Execution.

# Architecture
- router: single router with 5 primary routes + 4 legacy content routes
- render model: centralized render map
- state: backward-compatible localStorage; schemaVersion 5; projects/areas/worship/progressPeriod added with defaults
- CSS: single styles.css with V38 consolidated refinement section
- responsive: mobile-first execution/focus/progress layouts
- pointer/ambient: existing centralized engine; suppressed under Low Power and reduced motion
- modal: existing shared modal
- theme: existing theme architecture + Low Power/Auto support
- content library: existing generic system
- history: existing event-like history + worship events
- service worker: cache updated to V38

# Completed
- Reframed primary navigation into Home, Execution, Focus, Progress, System.
- Added Projects + Areas model without removing legacy task/content routes.
- Added protected worship rail: prayer completion, sunnah toggles, dhikr counter, today's fast toggle.
- Added Progress Observatory with Day/Week/Month/Year selector.
- Expanded Smart Time to 5/15/30/45/60/90 minutes in command palette.
- Added project creation modal.
- Added richer Focus room with task chooser.
- Added task touch/hover details and direct Focus actions.
- Preserved original branding assets.
- Reduced motion / Low Power behavior remains a premium 2D fallback.

# In Progress
- Visual/runtime verification of V38 across desktop/mobile sizes and interaction smoke tests.

# Next Step
- Run syntax, DOM, responsive and interaction verification; fix any runtime issue; package final ZIP.

# Known Issues
- Real-device touch and production PWA lifecycle cannot be verified in this environment.

# Verification
Static verification passed: single :root, one router, one pointermove listener, one delegated click/change layer, no touch-action:none, no body overflow lock, required route/view IDs present, all primary feature functions present. Browser navigation is blocked by the environment policy, so no browser/real-device claim is made.

# Important Decisions
- Mihrab remains a Personal OS for achievement; Qur'an/study/marketing remain content areas, not separate primary apps.
- Worship is core but intentionally quiet and non-gamified.
- Progress uses one observatory with a period selector rather than multiple dashboard screens.

# Files Changed
index.html, app.js, styles.css, progress.md, sw.js

# Data / Migration Notes
No existing storage keys renamed. New fields default safely: projects, areas, worship, progressPeriod.


# Follow-up Fix Pass — RTL / Shared World / Localization

## What was actually broken
- The previous localization guard itself could throw during render when Arabic content still contained one of the banned English UI tokens; this could interrupt the route render instead of reporting the problem safely.
- Required translation keys for several common labels were missing from the shared I18N table.
- Execution area cards had a variable-name collision (`icon` data value shadowing the `icon()` renderer), which caused a runtime failure in the Execution route.
- Legacy content routes still contained route-specific flat styling and several raw emoji/symbol UI markers.
- Completed task text used the muted token in a way that could reduce legibility against dark surfaces.
- Weekly-review guidance was exposed inline rather than progressively disclosed.
- Mobile navigation still declared six grid columns for five primary destinations.

## Root cause
The follow-up pass exposed a mixture of older route templates, duplicated presentation assumptions, and an over-aggressive runtime localization audit. The localization failure was not a missing try/catch problem: the audit was throwing after rendering and was therefore able to convert a localization regression into a render failure. Separately, a naming collision in the newly shared icon integration made the Execution renderer call the data string as a function.

## Changed
- Expanded the shared I18N table with the required Arabic UI keys and their English values.
- Changed the localization audit to remain non-blocking in production: it records `window.__MIHRAB_I18N_AUDIT__` and `window.__MIHRAB_RENDER_I18N_AUDIT__` and reports failures loudly via `console.error` without destroying the rendered route.
- Added `check-i18n.js` as a dev/build-time check for required keys and banned direct UI tokens.
- Fixed the Execution icon variable collision and added the missing Personal line icon.
- Replaced remaining route-level generic emoji/symbol UI affordances with the shared inline line-icon system where they represented UI iconography.
- Unified legacy route surfaces under the shared Mihrab glass/material variables, with lighter blur on constrained/mobile surfaces and no cream fallback unless the selected/system theme is light.
- Increased completed-task text contrast while preserving the Dark Matter treatment.
- Collapsed weekly-review guidance behind a Details disclosure.
- Changed the mobile navigation grid from six to five columns.
- Corrected RTL body font targeting to use `html[dir="rtl"] body`.
- Bumped the application asset/service-worker revision to V39.

## Verification
### Static checks
- `node --check app.js` — PASS.
- `node check-i18n.js` — PASS.
- One `:root` — PASS.
- One `pointermove` listener — PASS.
- One `function route` — PASS.

### Runtime / interaction smoke test
A Node VM smoke harness with DOM/browser stubs executed the real `app.js` and exercised all 9 registered views (5 primary + 4 legacy) without renderer exceptions after the fixes. It also performed a live `window.setLang('en')` → `window.setLang('ar')` switch and confirmed the Home DOM remained populated and the render-localization audit reported `{ok:true,bad:[]}`.

### Browser / device status
A real Chromium browser navigation test could not be completed in this environment: both local `file://` and `127.0.0.1` navigation are blocked by the environment policy (`ERR_BLOCKED_BY_ADMINISTRATOR`). Therefore I am NOT marking the required live-browser RTL reproduction matrix as verified. Real-device touch testing and production PWA lifecycle testing remain unverified.

## Next step
Use the V39 build as the candidate follow-up build for an actual browser/device matrix: fresh Arabic load, live EN→AR switch, and all six historical content routes plus the five primary Personal OS routes in dark/light themes at mobile and desktop widths.

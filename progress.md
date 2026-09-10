# Current State
Mihrab V33 is a refined Sanctuary build with the V32 spatial visual system plus the planned spiritual-rhythm features recovered from the developer-planning conversation: Islamic/civil date separation, prayer reminders, Sunnah fasting tracking, Istighfar tally, private Kaffara/Nadhr tracking, Proof Vault, and Recent Story.

# Architecture
- router: one hash router in `app.js`
- render model: one route renderer per main view; Home is a spatial sanctuary composition; Shari adds a generic spiritual rhythm layer
- state model: existing localStorage state and legacy migration plus additive `state.faith` data; no existing storage key renamed or deleted
- CSS architecture: one `:root`; one material/atmosphere language; one responsive system
- responsive architecture: mobile-first, with explicit safeguards at 320 / 360 / 375 / 390 / 430px
- pointer/ambient system: one centralized pointer RAF engine; no per-card pointer listeners
- modal system: one shared modal/overlay system
- theme system: existing theme tokens plus System/Auto behavior
- content library system: generic series/library records and future-safe renderer
- series progress/completion system: generic session completion, automatic 100% completion, history snapshots, 25/50/75/100% milestones
- consistency/history system: recorded events + daily plan snapshots; no inferred/fabricated history
- spiritual date system: `spiritualDate()` uses configurable Maghrib as the civil/Islamic boundary; `islamicFromGregorian()` provides an arithmetic/tabular planning conversion
- prayer rhythm: five editable prayer reminder times + daily prayer log mirrored to `pr_f`…`pr_i` tasks
- fasting rhythm: local log keyed by spiritual date with recognized planning windows; no leaderboard/competitive state
- quiet tally: Istighfar daily + all-time counters, local-first
- private obligations: minimal type/quantity/completion only; no sensitive narrative stored
- proof/history surfaces: Recent Story derived from real completion events; Proof Vault stores lightweight user-entered evidence metadata only
- service-worker/cache system: `mihrab-v33-sanctuary`

# Completed
- Integrated the additional developer-planning requirements into the V32 sanctuary rather than creating a parallel application.
- Added a dedicated spiritual-day clock separate from the existing 5am task-day logic so civil and Islamic date transitions remain distinct.
- Added arithmetic Hijri conversion with an explicit UI warning that local moon-sighting/adopted calendars may differ.
- Added editable Fajr, Dhuhr, Asr, Maghrib, and Isha reminder times.
- Added quiet next-prayer signal on Home.
- Added prayer completion rail that mirrors the existing daily prayer tasks and produces the normal task completion history event exactly once.
- Added Sunnah fasting opportunity tracker for Monday/Thursday, white days, Shawwal, first ten of Dhu al-Hijjah, ʿArafah, and ʿAshura planning states.
- Added Istighfar tally with daily reset by spiritual date and all-time count, explicitly non-competitive.
- Added minimal private Kaffara/Nadhr tracker and privacy/fiqh-source guidance.
- Added local-first Proof Vault and Recent Story surfaces.
- Added System controls for prayer times and the Maghrib boundary.
- Incremented schema version to 5; all new fields are additive and backward-compatible.
- Updated PWA cache version to `mihrab-v33-sanctuary`.
- Fixed final horizontal-overflow issue by using `overflow-x: clip` containment at the document level; this was verified at 320 / 360 / 375 / 390 / 430px.

# In Progress
None. V33 is ready for user acceptance testing.

# Next Step
User review of the deployed build, especially the spiritual-rhythm room on a real phone and the production PWA update lifecycle.

# Known Issues
- Production service-worker behavior depends on the user's deployed GitHub Pages origin.
- Physical touch testing on a real phone/tablet is not available here.
- The arithmetic Hijri calendar can differ from local moon-sighting/adopted calendars; the UI labels it as a planning aid.
- Prayer times are manually editable in-app reminders, not authoritative astronomical/prayer calculations.

# Verification
- `node --check app.js`: passed.
- CSS brace balance: passed.
- JS brace balance: passed.
- One `:root` declaration confirmed.
- One `pointermove` listener confirmed.
- One delegated document `click` listener and one delegated document `change` listener confirmed.
- No global `touch-action:none`.
- No React/Vue/Svelte/Three.js/WebGL/canvas-loop implementation.
- Controlled Chromium harness executed actual project HTML/CSS/JS and verified: entry threshold; all six routes; no internal route errors; Islamic date; five prayer controls; prayer-to-task sync; Istighfar increment; obligation add/save; Recent Story; Proof Vault; prayer-time settings; Home paper theme.
- Responsive containment verified at 320 / 360 / 375 / 390 / 430px with `scrollWidth === clientWidth`.
- Not verified: physical touch, user's production GitHub Pages origin, production service-worker lifecycle.

# Important Decisions
- The existing task-day logic at 5am was not repurposed for the Islamic-day model. The two concepts remain separate and explicit.
- Maghrib is the configurable boundary for the spiritual-day calculation.
- The Hijri conversion is arithmetic/tabular and therefore treated as planning data, not an authority over local moon-sighting.
- Prayer times are user-editable reminders; the app does not present them as a religious authority.
- Kaffara/Nadhr storage is deliberately minimal to protect privacy and avoid encoding a fiqh decision into app logic.
- Fasting tracking is a calm log of opportunities, not an achievement/leaderboard system.
- No sensitive confessions, names, private client data, passwords, or similar content are encouraged in Proof Vault or private obligations.
- No backend was introduced.

# Files Changed
- `index.html`
- `styles.css`
- `app.js`
- `sw.js`
- `README.md`
- `progress.md`

# Data / Migration Notes
- Existing `study-dashboard-focus-v7` and legacy migration source remain intact.
- `state.faith` is additive with defaults for: `sunsetMinutes`, `calendarSource`, `prayerTimes`, `prayerLog`, `fastingLog`, `istighfar`, `obligations`, and `proofVault`.
- Schema version is now 5.
- No stored user data is reset.
- Legacy completed series still retain unknown completion dates when the original data contains none.

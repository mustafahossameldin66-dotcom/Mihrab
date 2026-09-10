# Mihrab — Progress Log (Spatial Ethereal Rework)

**How to resume after a context/limit reset:** upload the latest zip + this file, say "كمل من progress.md". Claude reads this whole file before touching anything, per the audit rule in the original spec (section 73).

**Scope note (important, read first):** the person's full 80-section spec ("ULTRA-PREMIUM Spatial Ethereal") is a multi-session rewrite, not a one-shot task. This file breaks it into phases. Do not attempt all phases in one sitting — verify each phase, update this file, then continue.

---

# Current State

Baseline: `Mihrab_V27_Polish.zip` (the font-wiring + ring-animation session), now being reworked toward the full spatial spec.

## Audit findings (Phase 0 — done)
Read index.html, app.js (456 lines), styles.css (151 lines → now larger), sw.js, manifest, README, PRODUCT_PRINCIPLES in full before any edit, per spec section 73.

**Already well-implemented, matching spec intent — do NOT rebuild these:**
- **One pointer engine** (`bindThemePointer` in app.js): RAF-batched, inertia-eased (`x+=(tx-x)*.12`), sets `--px`/`--py` on `documentElement`. Already disabled for non-fine-pointer (touch) devices via `matchMedia('(pointer:fine)')`. This satisfies spec section 11 as-is — extend it by reading the same variables in more places, never add a second listener.
- **One router**: `route(id)` aliased to `window.navigate`. No duplicate routing logic found.
- **One `:root`**: confirmed via grep, no duplicate theme roots.
- **One modal system**: `openModal`/`closeModal`/`ensureModals`.
- **Reduced-motion**: global `@media (prefers-reduced-motion:reduce)` override already present and correct.
- **Low-power mode**: `body[data-low-power="true"]` already pauses ambient animations.
- **Mobile performance**: explicit code comment in styles.css documents a deliberate decision to strip `backdrop-filter` from repeated card surfaces on mobile (perf > decoration) — respect this precedent for any new mobile-facing effects.
- **Generic-ish library/series model**: `state.library` array with `status: active/paused/done` already covers most of spec section 38–41 (archived vs completed as different states, records never deleted). Not yet a dedicated "achievement history" view, but the data model underneath is sound.
- **Day modes / quick time actions**: `.mode-pill`, `smartTime(15/30)` already exist in some form — needs closer review in Phase 5, not confirmed complete.

**Genuine gaps (real work needed, not yet present):**
- No weekly/monthly/yearly/all-time consistency analytics (spec 44–53) — this is the single biggest net-new feature in the whole spec.
- No dedicated "Recently Completed" / achievement timeline widget (spec 42–44).
- Task completion is a single-stage glow (from the previous session), not the 7-stage "Dark Matter" sequence spec section 24 describes, and has no Undo.
- No `system/auto` theme option following `prefers-color-scheme` (spec 54) — current themes are 5 fixed named palettes.
- No page-transition choreography (spec 27–30) — view switching is instant show/hide (`.view.active{display:block}`).
- No Focus Mode "light tunnel" treatment yet (spec 31–32) — needs to be viewed/confirmed in the parts of app.js not yet read line-by-line.
- Content entrance stagger (spec 30) not present.

---

# Phase Plan

- [x] **Phase 0 — Audit.** Findings above.
- [x] **Phase 1 — Foundation: material & atmosphere depth (partial, this session).**
  - Done: split shared card background into two material tiers — primary (`.hero-main`, `.awareness`) vs secondary (`.hero-side`, `.card`, `.section-box`), matching spec section 7 ("do not make every surface identical").
  - Done: added a third, independently-timed ambient layer (`.app::before`, 46s breathing nebula, heavily damped read of the existing `--px`/`--py`) so the background now has 3 distinct speeds instead of 1, matching spec section 13. No new event listener added — still one pointer engine.
  - Done: `data-low-power` now also hides the new nebula layer.
  - **Not yet done in Phase 1:** edge-hierarchy differentiation per component role (spec 18 — currently most cards still share the same border treatment), SVG/mask micro-texture (spec 15–16), holographic `translateZ` on key content (spec 9).
- [ ] **Phase 2 — Spatial navigation & hero.** Topbar-as-portal refinement, hero cinematic entrance (blur-to-sharp, no constant animation), page transition choreography (spec 27–30).
- [ ] **Phase 3 — Task completion "Dark Matter" + stats as instruments.** Replace the current single-stage glow with the staged sequence from spec 24 (ripple → pulse → z-shift → darken → dark matter), add Undo. Rework `.stat-card` toward "precision instrument" treatment (spec 22).
- [ ] **Phase 4 — Consistency/Analytics engine.** The big net-new feature: weekly/monthly/yearly/all-time tracking, streaks, plan-vs-reality, weekly review, restrained visualizations (heatmap/arc/ring — not a generic dashboard). Needs its own data model design before any UI work — do this as a sub-session on its own.
- [ ] **Phase 5 — Achievement history.** Dedicated "Recently Completed" + milestone timeline, built on top of the existing `state.library` status model (no data migration needed, additive only).
- [ ] **Phase 6 — Focus Mode "light tunnel" + Now/Next/Later + 15-min/No-Energy modes.** Audit what already exists here first (marked unconfirmed in Phase 0) before writing new code.
- [ ] **Phase 7 — Modal/boot/empty-state unification pass.**
- [ ] **Phase 8 — System/Auto theme (`prefers-color-scheme`).**
- [ ] **Phase 9 — Final quality audit** (spec section 77) + honest testing report (spec section 78 — static syntax checks only were run so far; no real browser/device testing has occurred yet in any session).

---

# Next Step
Continue Phase 1: edge-hierarchy differentiation (spec 18) — give interactive/focused/completed elements visually distinct edge treatments instead of the current mostly-uniform `1px solid var(--line))` everywhere.

# Known Issues
- None found that break existing functionality. All changes so far are additive CSS only.

# Verification (be honest — see spec section 78)
- ✅ Static: `node --check app.js` passes.
- ✅ Static: CSS brace count balanced (330/330) after edits.
- ❌ NOT verified: no real browser rendering, no mobile device test, no visual review of the new nebula layer's actual on-screen appearance. Treat Phase 1's visual result as unverified until you look at it yourself and report back.

# Important Decisions
- Treating this as a multi-session project with an explicit phase plan, per the person's own stated priority order (Qur'an memorization > study-period system > this).
- Extending the existing single pointer engine rather than adding new listeners, per spec section 74 (refactor, don't stack).
- Analytics (Phase 4) deliberately deferred to its own sub-session — it's the largest, most architecturally significant piece (new data model, event-based history per spec 53) and should not be rushed alongside visual polish.

# Files Changed (this session)
- `styles.css`: material tier split (section ~91-93), new `.app::before` nebula layer + keyframes, low-power guard extended.

# Data / Migration Notes
- No storage schema changes this session. `state.library`, task state, theme, language — all untouched.

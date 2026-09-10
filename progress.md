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
- [x] **Phase 1 — Foundation: material & atmosphere depth.**
  - Done: split shared card background into two material tiers — primary (`.hero-main`, `.awareness`) vs secondary (`.hero-side`, `.card`, `.section-box`), matching spec section 7.
  - Done: added a third, independently-timed ambient layer (`.app::before`, 46s breathing nebula, heavily damped read of `--px`/`--py`). No new listener. Matches spec section 13.
  - Done: `data-low-power` hides the new nebula layer.
  - Done: **edge hierarchy** (spec 18) — primary surfaces now have a near-invisible border (38% line opacity, material+shadow define the form) vs secondary surfaces keeping a slightly more present thin edge (88%). Topbar's hard border softened too (55%, "portal" feel per spec 19). Checkbox-checked state now gets a small localized glow ring, not just a flat color swap.
  - Done: **cache-busting fix** — bumped `sw.js` cache name (`mihrab-v26-fixed` → `mihrab-v28-spatial`) and `index.html`'s `?v=` query params (25.0 → 28.0). Matters because "no visible change" reports can just as easily be a stale cache as a genuinely-too-subtle effect — always bump both when shipping a build meant to be visually checked.
  - Deferred (lower priority polish, not blocking): SVG/mask micro-texture (spec 15–16), holographic `translateZ` on key content (spec 9).

- [~] **Phase 2 — Spatial navigation & hero (started).**
  - Done: **page entrance choreography** (spec 27–30). Navigating to a view now plays a one-shot 420ms blur→sharp, scale(.985)→1, fade-in settle (`view-settle` keyframe) instead of an instant `display:block` swap. Verified this is scoped correctly: `toggleToday`/`togglePlan` do surgical DOM patches (not full re-render), so this animation only fires on genuine navigation (`route()`), never on checking a task — confirmed by reading the click/change delegated-listener code before adding this, not assumed.
  - Done: `.hero-side` gets the same settle animation with a 60ms stagger relative to `.hero-main`, giving Home a touch of spatial depth on entry — matches spec 30's "stagger only for major surfaces, not every row."
  - Done: respects `data-low-power` and the existing global `prefers-reduced-motion` rule.
  - Done: **modal system now has two distinct entrance signatures** (spec 28) sharing one underlying system (no duplication — still a single `#mihrabOverlay`/`#mihrabModal`, per spec 57). `openModal(html, variant)` takes an optional variant; Quick Capture passes `'quick'` and gets a faster (220ms), snappier "emerge from below" motion, while every other modal (add content, edit, archive, command palette, etc.) gets the slower (380ms) "material expansion" scale-from-center. The overlay itself previously had **zero** entrance animation (instant show/hide) — now fades in over 250ms, so this was a genuine gap being filled, not a duplicate of existing motion.
  - Done: **hero highlight sweep** (spec 20) — a single one-shot light pass (1.3s, 8% white opacity) crosses `.hero-main` shortly after it settles into view. Fixed iteration count (`1`), not looping — respects spec 20's explicit "do not keep the title constantly animated."
  - **Phase 2 is now complete.** Remaining lower-priority items (topbar depth/haze beyond Phase 1's edge softening) folded into Phase 7 polish pass instead of blocking here.

- [ ] **Phase 3 — Task completion "Dark Matter" + stats as instruments.** Replace the current single-stage glow with the staged sequence from spec 24 (ripple → pulse → z-shift → darken → dark matter), add Undo. Rework `.stat-card` toward "precision instrument" treatment (spec 22).
- [ ] **Phase 4 — Consistency/Analytics engine.** The big net-new feature: weekly/monthly/yearly/all-time tracking, streaks, plan-vs-reality, weekly review, restrained visualizations. Needs its own data model design before any UI work — do this as a sub-session on its own.
- [ ] **Phase 5 — Achievement history.** Dedicated "Recently Completed" + milestone timeline, built on top of the existing `state.library` status model (additive only, no migration).
- [ ] **Phase 6 — Focus Mode "light tunnel" + Now/Next/Later + 15-min/No-Energy modes.** Audit what already exists here first (unconfirmed in Phase 0) before writing new code.
- [ ] **Phase 7 — Modal/boot/empty-state unification pass.**
- [ ] **Phase 8 — System/Auto theme (`prefers-color-scheme`).**
- [ ] **Phase 9 — Final quality audit** (spec 77) + honest testing report (spec 78 — only static syntax checks run so far; no real browser/device testing in any session yet).

---

# Next Step
Phase 2 is complete. Phase 3 is next (task completion "Dark Matter" staged sequence + Undo + stat-card instrument treatment) — this is the first phase that touches the interaction the person uses most constantly (checking tasks), so it deserves extra care: implement it, then explicitly pause and ask for real confirmation before Phase 4 (the large analytics engine), rather than assuming silence/"كمل" means it reads correctly on-screen. Three prior visual check-in requests were answered with "كمل" (continue) rather than a yes/no on what was actually seen — proceeding is reasonable since the person has repeated the instruction clearly, but Phase 3 changes core daily interaction, so a check-in there is worth one more attempt.

# Known Issues
- Previous session's visual changes may not have been perceptible due to a stale cache (now fixed by bumping cache/version names) — unconfirmed whether that was the actual cause, flagged as the likely explanation, not verified.


# Verification (be honest — see spec section 78)
- ✅ Static: `node --check app.js` passes.
- ✅ Static: CSS brace count balanced (330/330) after edits.
- ❌ NOT verified: no real browser rendering, no mobile device test, no visual review of Phase 1 or Phase 2 effects on-screen. Treat all visual results as unverified until confirmed by the person directly.

# Important Decisions
- Treating this as a multi-session project with an explicit phase plan, per the person's own stated priority order (Qur'an memorization > study-period system > this).
- Extending the existing single pointer engine rather than adding new listeners, per spec section 74 (refactor, don't stack).
- Analytics (Phase 4) deliberately deferred to its own sub-session — it's the largest, most architecturally significant piece (new data model, event-based history per spec 53) and should not be rushed alongside visual polish.

# Files Changed (this session)
- `styles.css`: material tier split (section ~91-93), new `.app::before` nebula layer + keyframes, low-power guard extended.

# Data / Migration Notes
- No storage schema changes this session. `state.library`, task state, theme, language — all untouched.

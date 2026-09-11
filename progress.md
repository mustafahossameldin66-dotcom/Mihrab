# Mihrab — Progress Log (Spatial Ethereal Rework)

**How to resume after a context/limit reset:** upload the latest zip + this file, say "كمل من progress.md". Claude reads this whole file before touching anything, per the audit rule in the original spec (section 73).

**Scope note (important, read first):** the person's full 80-section spec ("ULTRA-PREMIUM Spatial Ethereal") is a multi-session rewrite, not a one-shot task. This file breaks it into phases. Do not attempt all phases in one sitting — verify each phase, update this file, then continue.

---

# Current State

Baseline: `Mihrab_V27_Polish.zip` (the font-wiring + ring-animation session) → reworked through Phases 0–2 in a prior session (shipped as `Mihrab_V28_SpatialPhase1.zip`) → resumed from that exact upload and completed Phase 3 → resumed again and completed Phase 4a (analytics foundation) → this session continued in the same sitting and completed Phase 4b (rollups + UI).

## ⚠️ Regression found and fixed this session (not part of the spatial spec — flagged separately)
Auditing `dayTasks()` before building the history/streak engine on top of it (Phase 4 needs to know exactly what "core complete" means per day) turned up something important: **the Zad Academy daily-lecture fix from an earlier, separate work thread had been lost.** `extra['السبت'..'الخميس']` still had the old bug — "3 lectures" listed on every day except Friday (which was "optional catch-up only") — the exact reverse of what was asked for and fixed before. This V28 lineage was evidently forked from a baseline that predates that fix, not from the checkpoint that included it.
**Reapplied it this session** (verified against a functional test harness, not just re-typed from memory — see Verification): one lecture on every day, 3 lectures on Friday, with the Maghreb-checkbox (`pr_m`) shift so the switch-over happens at the actual Sharia-day boundary (Thursday evening → Friday; Friday evening → Saturday), not the app's 5am cutoff. This is unrelated to the visual spec — flagging it prominently so it isn't mistaken for spec-driven work, and so it doesn't get silently lost a second time if another fork happens.

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

- [x] **Phase 3 — Task completion "Dark Matter" + stats as instruments.**
  - Done: re-audited `toggleToday`/`animateRingTo`/CSS before touching anything (per the standing audit-first rule) — confirmed against the actual uploaded zip, not assumed from memory, since a context reset happened between Phase 2 and this session.
  - Done: `.just-checked`/`check-pop`/`glow-bloom` rewritten as **one continuous 1.05s timeline** (not parallel/stacked effects): ripple (0–22%) → luminous pulse (22–38%) → backward `translateZ` shift (38–62%, "recede") → fades into the resting `.done` state's darker inset shadow (62–100%). Matches spec 24's stage list without adding new classes.
  - Done: **Undo** (spec 24's explicit requirement, previously missing). `toggleToday` now calls `showUndo(id,label)` only on the false→true transition (never on unchecking). A single shared `#undoToast` pill (created once, reused) shows the task's own label + an Undo button, auto-dismisses after 4.2s, sits above the mobile nav bar on small screens. Clicking Undo calls `undoLastCheck(id)`, which re-runs `toggleToday` (so the same code path handles both directions — no parallel "undo" state machine).
  - Done: `.stat-card` reworked toward spec 22's "precision instrument" language — layered gradient using the existing `--surface-3` token (no new color), inset top highlight + bottom shadow for a bezel feel, a thin luminous baseline (reusing the same hairline-gradient language as the task-row hover line elsewhere, so it reads as the same visual system, not a new one), `tabular-nums` on the numbers so they don't jitter in width as they animate.
  - Done: bumped cache again (`mihrab-v28-spatial` → `mihrab-v28-phase3`, index.html `?v=28.0`→`28.1`) — this is now the established per-build habit from Phase 1's lesson, not a one-off.
  - **Found, not fixed (logged for Phase 7, not fixed now to keep this phase's diff scoped and easy to verify in isolation):**
    - `app.js` line ~300 has a delegated listener for `input[type="checkbox"][data-today-id]` — grepped the whole file, **nothing renders that attribute** (only `data-task-id` is ever set). This listener is dead code.
    - `styles.css` comma-groups almost every task-row rule across four selectors: `.task-item, .mtask, .lecture, .task`. Grepped for where `.mtask`/`.lecture`/`.task` markup is actually generated — **found none**; every real checklist row in the current codebase renders as `.task-item`. These three extra selector names appear to be dead CSS from an earlier markup version. Safe to remove (they match nothing), but left alone this phase to avoid mixing unrelated cleanup into a phase that's supposed to be about completion/stats only.

- [~] **Phase 4 — Consistency/Analytics engine (foundation done — "Phase 4a"; the rest is "Phase 4b", not started).**
  - Done: **fixed a real bug this phase depends on** — `resetDay()` previously only ran once, at page load, so a day boundary crossed while the tab/PWA stayed open was silently missed until a manual reload (flagged as a known issue in an earlier, separate work thread; never fixed until now because the work pivoted to the visual spec before it was addressed). Added a 60s `setInterval` poll plus a `visibilitychange` catch-up. This matters directly for Phase 4: a streak/history system built on a day-boundary check that doesn't reliably fire would silently miss or duplicate days.
  - Done: **append-only daily history** — `state.history[dateKey] = {coreDone, coreTotal, allDone, allTotal, coreComplete}`, committed exactly once by `commitDaySnapshot()` inside `resetDay()`, for the day that just ended, using *that day's* actual task list (`dayTasks(prevDayName)` — correctly reflects whichever weekday it was, not today's). Never rewritten afterward. Gaps (app not opened that day) are left absent rather than fabricated as failures, per spec 46's explicit instruction.
  - Done: **current streak** (`computeStreak()`) and **best streak** (`computeBestStreak()`, not yet surfaced in the UI — held for Phase 5's achievement view). Streak counts today if core is already complete *right now* (live, not waiting for tonight's snapshot), then walks backward through committed history until a gap or an incomplete day breaks the chain.
  - Done: **this week's signal** (`weekSummary()`) — active days and completion % for the current Arabic week (Saturday-start, matching `DAYS[0]`), using live data for today and committed history for prior days.
  - Done: **Home now shows two more stat-cards** — "This week" (%, with days-count in the tooltip) and "Current streak" — added to the existing `.stats-grid` (no new CSS needed, inherits Phase 3's instrument treatment) and live-patched in `updateRing()` alongside the existing two, so checking a task updates them immediately, not just on next page load.
  - **Real functional testing this phase, not just static syntax checks** (see Verification) — a stubbed-DOM test harness caught a genuine definitional bug before shipping: `weekSummary()`'s `activeDays` was counting *today* as active from the moment the day started, even with zero tasks checked, because `liveTodayRecord()` always returns a non-null object. Fixed to require `allDone>0`. This would not have been caught by `node --check` alone.
  - **Deliberately deferred to Phase 4b** (this phase's scope was "foundation," per the Phase Plan description below — the rest still needs its own design pass): monthly/yearly/all-time rollups, Plan-vs-Reality, a dedicated weekly-review UI (there's already an unrelated one-time `state.weekly.rating` — a marketing-context weekly self-rating — worth reconciling with the new consistency concept rather than duplicating), and restrained visualizations (heatmap/ring/timeline per spec 48). Best streak is computed but not shown anywhere yet.

- [x] **Phase 4b — Analytics continued.**
  - Design decision made (was blocking this phase, see previous session's Next Step): kept `state.weekly.rating` (existing, marketing-specific subjective self-rating) **separate** from the new objective consistency system — they measure different things (a subjective weekly feeling vs. an objective task-completion log) and merging them would conflate two concepts and risk breaking the existing marketing weekly-review feature for no real benefit. Logged under Important Decisions.
  - Done: **one generic `periodSummary(startDate,endDate)`**, not four parallel implementations — `weekSummary()`, `monthSummary()`, `yearSummary()`, and `allTimeSummary()` are now thin wrappers over the same function with different date ranges, per spec 46's "one generic renderer" philosophy (already applied elsewhere in this codebase to `state.library`, now applied here too). Refactored `weekSummary()` to use it and re-verified against the harness to confirm identical output before and after (no regression).
  - Done: **monthly/yearly/all-time rollups** surfaced in a new "📈 الالتزام مع الوقت / Consistency over time" section, placed in the System view directly under the existing Weekly Review section (that view is already titled "System & review" and already hosts a review-type feature, so this extends existing information architecture rather than inventing a 7th nav tab — a new tab would have touched the router, nav rendering, and mobile nav layout for a feature that fits naturally where review-type content already lives).
  - Done: **`monthlyBreakdown()` + `strongestWeakestMonth()`** (spec 46's "strongest/weakest month") — only considers months with at least one recorded active day; shows a plain "not enough data yet" note instead of fabricating a comparison when fewer than one qualifying month exists, per spec 46.
  - Done: **restrained month heatmap** (`monthHeatmapCells()`, spec 48) — one small cell per day of the current calendar month, three states (done / active-not-complete / no-data) plus a dashed "future" state for days that haven't happened yet. Static CSS only, no chart library, no per-cell animation — consistent with spec 48's "avoid generic spreadsheet charts... keep them restrained."
  - **Real functional testing caught a second genuine bug this phase** (see Verification) — `periodSummary`'s original loop guard compared `Date` objects directly (`cursor<=endDate`), but `endDate` for a full/live period is `effectiveDate()` (today's actual current time), while `cursor` sits at a fixed noon time-of-day. Run before noon, the loop stopped one day early and silently dropped *today* from `allTimeSummary()`/`yearSummary()` — a bug that depended on what time of day the code happened to run, so it could pass on one test run and fail on another. Fixed by comparing date-key strings (`YYYY-MM-DD`) instead of Date magnitudes on both boundaries. Re-verified: `allTimeSummary()` now correctly includes today regardless of current clock time.
  - Deferred, not started: **Plan-vs-Reality** as a distinctly-labeled feature (spec 47) — the data (`elapsed` vs `doneDays`) is already sitting right there in every `periodSummary()` result, so this is mostly a labeling/framing decision for a future UI pass, not new computation. **Dedicated weekly-review UI** for the new consistency concept (distinct from the existing marketing rating) also deferred — folded into Phase 5 or a later phase, not urgent.

- [ ] **Phase 5 — Achievement history.** Dedicated "Recently Completed" + milestone timeline, built on top of the existing `state.library` status model (additive only, no migration).
- [ ] **Phase 6 — Focus Mode "light tunnel" + Now/Next/Later + 15-min/No-Energy modes.** Audit what already exists here first (unconfirmed in Phase 0) before writing new code.
- [ ] **Phase 7 — Modal/boot/empty-state unification pass** (+ the dead-code removal logged in Phase 3).
- [ ] **Phase 8 — System/Auto theme (`prefers-color-scheme`).**
- [ ] **Phase 9 — Final quality audit** (spec 77) + honest testing report (spec 78).

---

# Next Step
Phase 4 (both parts) is done — the analytics foundation and its surfaced UI. Testing debt is now real and worth naming plainly rather than keep logging quietly: **five phases deep with zero real browser/device confirmation from the person.** Next session should open with one concrete, one-line-answerable question rather than a general "does it look right" — e.g. "open System — do you see a new 'Consistency over time' section under Weekly review, with four percentages and a small grid of squares at the bottom?" If the answer is "كمل" again, that itself is informative (the person is choosing to trust the static+functional verification over a manual look for now) and Phase 5 should proceed on that basis rather than stalling — but the offer should keep being made each phase until it's explicitly answered either way, not silently dropped.
Phase 5 (Achievement history) is next: dedicated "Recently Completed" + milestone timeline, built on the existing `state.library` status model. Read that model fully before writing anything (it wasn't re-confirmed line-by-line this session — Phase 0's audit is now two phases old and this codebase has had regressions slip in before).

# Known Issues
- Dead code found in Phase 3's audit, not yet removed: the `data-today-id` listener in app.js, and the `.mtask`/`.lecture`/`.task` CSS selector groups. Deferred to Phase 7.
- Undo/Dark-Matter animation only fires on rows using `.task-item[data-task-id]` markup — that's every real checklist row today (confirmed by grep), but a future checklist added through different markup needs the same data attribute to get this treatment.
- Plan-vs-Reality (spec 47) and a dedicated consistency-focused weekly review UI are the two pieces of the original Phase 4 scope still not built — see Phase 4b notes above. Not hard, just not done.
- `computeBestStreak()` is used by the new Consistency section now (shown as "Best streak") — the note in an earlier version of this file saying it was unused is stale/resolved.

# Verification (be honest — see spec section 78)
- ✅ Static: `node --check app.js` passes; CSS brace count balanced (370/370).
- ✅ **Functional testing this phase, extended from Phase 4a's harness** — same stubbed-DOM `vm` approach (still no jsdom, no network to install it). Built 70 days of synthetic history with a known pattern (every 5th day a miss) and hand-verified `weekSummary`/`monthSummary`/`yearSummary`/`allTimeSummary`/`computeStreak`/`computeBestStreak`/`monthlyBreakdown`/`strongestWeakestMonth`/`monthHeatmapCells` against manually-computed expected numbers — all matched after fixing the time-of-day bug described above. Also called `consistencySection()` itself (the actual render function, not just its data dependencies) and confirmed it returns non-empty HTML containing the heatmap markup without throwing.
- This is now the second phase in a row where real execution (not just `node --check`) caught a genuine bug before shipping — worth taking as a standing lesson: for any function involving dates/streaks/rollups, run it, don't just read it.
- ❌ NOT verified: no real browser rendering, no mobile device test, no visual review of Phase 1–4 effects on-screen. Treat all visual results as unverified until confirmed by the person directly. Five phases deep now without a single real look.

# Important Decisions
- Treating this as a multi-session project with an explicit phase plan, per the person's own stated priority order (Qur'an memorization > study-period system > this).
- Extending the existing single pointer engine rather than adding new listeners, per spec section 74 (refactor, don't stack).
- History is append-only and derived-on-read (streak/week/month/year/all-time numbers are computed from `state.history` each time, never stored pre-computed) — so a future bug in any rollup function can be fixed and recomputed correctly from the raw log, rather than needing a data migration. This paid off directly this phase: the time-of-day bug fix required zero data changes, only a function fix.
- Reapplied the lost Zad fix immediately on discovery rather than deferring it — it was a small, already-solved, previously-approved regression fix, not a new decision being made on the person's behalf.
- Kept `state.weekly.rating` (subjective marketing rating) and the new consistency system (objective task-completion log) as two separate, unreconciled concepts rather than merging them — a design choice made without asking, on the reasoning that merging carries real risk (breaking an existing feature) for unclear benefit, and can still be revisited later if the person wants them unified.
- Put the new analytics UI inside the existing System view rather than creating a new nav tab — smaller, safer diff; a dedicated tab remains an option for a later phase if this section grows too large for where it lives.

# Files Changed (this session — Phase 4b)
- `app.js`: added `periodSummary()` (generic rollup used by all of week/month/year/all-time); `monthBounds()`, `monthSummary()`, `yearBounds()`, `yearSummary()`, `firstTrackedKey()`, `allTimeSummary()`, `monthlyBreakdown()`, `strongestWeakestMonth()`, `monthHeatmapCells()`, `consistencySection()`; refactored `weekSummary()` onto `periodSummary()`; wired `consistencySection()` into `renderSystemBase()` right after the Weekly Review section; fixed the time-of-day date-comparison bug in `periodSummary()`.
- `styles.css`: added `.month-heatmap`/`.hm-cell` (+ `.hm-done`/`.hm-active`/`.hm-future` states).
- `sw.js`: cache bumped to `mihrab-v28-phase4b`.
- `index.html`: `?v=` bumped to 28.3 on both asset tags.

# Data / Migration Notes
- No new storage fields this phase — everything here reads `state.history` (added last phase) and derives numbers on the fly. Nothing is pre-computed or cached in storage, so there is nothing to migrate if a rollup function's logic changes later (as already happened once this phase).

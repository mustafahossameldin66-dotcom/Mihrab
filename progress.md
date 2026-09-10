# Mihrab — Progress Log

**Baseline this session:** `Mihrab_V26_Fixed.zip` (418-line app.js, 128-line styles.css — the "Fixed" rebuild, smaller/cleaner than the earlier V19 Lifelong branch).

**How to resume after a context/limit reset:** upload the latest zip + this file, and say "كمل من progress.md". Claude reads the "Next up" section below and continues from there.

---

## ✅ Done this session

1. **Animated ring + counter** (`app.js` → `updateRing`/`animateRingTo`, `styles.css` → `@property --p`)
   - The home-ring percentage and the `n/total` count now animate smoothly (850ms, ease-out-cubic) instead of jumping instantly when a task is checked/unchecked.
   - Respects `prefers-reduced-motion`: animation is skipped (instant update) if the user's OS asks for reduced motion.

2. **Completion glow** (`styles.css` → `.just-checked`, `glow-bloom` keyframes)
   - Checking a task now blooms a slower, warmer glow (1.15s) around the row instead of the old instant hard-edged flash.

3. **100% ring celebration** (`styles.css` → `.ring.burst`, `ring-burst-*` keyframes; `app.js` → burst trigger inside `animateRingTo`)
   - When the ring crosses from <100% to 100% for the day, it plays a one-time soft light burst (radiant glow + gentle number pop) for ~1.5s, then settles back to the normal resting glow.

4. **Typography pass** (`styles.css`, top of file)
   - Reordered the system-font stack to prioritize better Arabic-rendering fonts per platform (`SF Arabic`, `Segoe UI`, `Noto Sans Arabic`, `Noto Kufi Arabic`) while keeping `Inter` for Latin text (numbers, English labels, acronyms like SWOT/SEO).
   - Added a **commented-out `@font-face` scaffold** for a self-hosted premium Arabic display font (used only on `.brand-ar` for now). This keeps the app's stated "offline-first, no remote font service" principle intact — nothing is fetched from the internet.
   - **Action needed from you (optional):** if you want a distinctive premium Arabic display face (e.g. Amiri, Aref Ruqaa, Lateef, or a paid font you own), download the `.woff2` file yourself, drop it at `./assets/fonts/display-ar.woff2`, and uncomment the `@font-face` block near the top of `styles.css`. I can't fetch font files myself (no network access in this tool), so this step has to happen on your end.

---

## 🕒 Next up (requested, not done yet — backlog, in the order you mentioned them)

- [ ] **"Feel alive/motivated on open"** — beyond the existing time-of-day smart banner, consider a slightly richer opening moment (e.g. a one-time settle-in animation for the hero on first paint of the day, not on every render).
- [ ] **Slower/calmer micro-animations app-wide** — current pass only touched the ring + task glow. Nav switching, card hovers, and modal open/close still use the original faster timings (0.2s). Worth a consistent "slow, calm" pass across all of them, not just the two most visible spots.
- [ ] **Broader "visually stunning" pass** — you asked for creative additions here specifically. Some options to pick from next time: subtle parallax depth on hero cards on pointer move (there's already an ambient pointer listener at the bottom of `app.js` driving `--px`/`--py` — could extend it to tilt cards slightly), a softer multi-layer ambient glow behind the ring itself (not just on burst), animated gradient text sweep on headings.
- [ ] **Other completion moments** — the glow bloom currently only fires on `.just-checked` (daily task list). `togglePlan` (weekly plan/library checkboxes) doesn't get the same treatment yet — worth deciding if it should.

---

## ⚠️ Standing note (not a code task — a reminder for both of us)
This project is explicitly a "later, once the study-period system is stable" project per our agreement. Treat every session on Mihrab as optional bonus work, not the priority — the Qur'an memorization schedule and the study-period trackers come first. If a session starts and the memorization/study plan hasn't been checked on recently, ask before diving into more Mihrab work.

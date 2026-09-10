# Mihrab — Sanctuary / Spiritual Rhythm

A mobile-first spatial redesign of Mihrab built only with HTML, CSS, SVG, and Vanilla JavaScript.

## Experience

Mihrab opens through a full-screen native threshold: Open → enter the portal → arrive in the sanctuary → move through rooms. The Home room is a spatial sanctuary, not a conventional dashboard, with a cinematic portal, Now / Next / Later execution, protected work, six rooms, long-run progress, and living ambient atmosphere.

## Spiritual rhythm layer

The Islamic Studies room now contains a local-first spiritual rhythm layer alongside the existing generic study-library system:

- Islamic date derived from a documented arithmetic/tabular conversion.
- Separate spiritual-day boundary based on the user's editable Maghrib time, so civil-date and Islamic-date transitions do not collide around midnight/fajr.
- Editable five-prayer reminder times with a quiet in-app next-prayer signal.
- Prayer completion controls mirrored to the existing daily prayer tasks.
- Sunnah-fasting opportunity tracker for Monday/Thursday, white days, Shawwal, the first ten of Dhu al-Hijjah, ʿArafah, and ʿAshura planning states.
- A simple Istighfar tally with a daily counter and all-time total. It intentionally has no competitive streak or leaderboard behavior.
- Private obligation tracking for Kaffara Yamin and Nadhr with quantity/completion state only. Sensitive circumstances are not stored, and the UI explicitly points fiqh-sensitive decisions back to the user's trusted source.
- Proof Vault and Recent Story remain local-first and contain only lightweight evidence/achievement metadata, not secrets or sensitive confessions.

Calendar and prayer features are planning aids. The arithmetic Hijri calendar may differ from local moon-sighting or an adopted calendar, and prayer times are editable reminders rather than an authority.

## Architecture and data safety

The application retains one router, one render pipeline, one pointer/ambient engine, one modal system, one theme architecture, and one responsive system. No framework, WebGL, Three.js, React, Vue, Svelte, or canvas loop is used.

Existing localStorage keys remain intact. New spiritual data is additive under `state.faith`; schema version is incremented to 5. No stored user data is reset. Legacy completed records remain undated when no historical completion date exists.

Completion history is event-based. Series milestones are recorded at 25 / 50 / 75 / 100%. Daily completion history and the spiritual layer use real recorded events and do not invent historical activity.

## PWA

The application remains an installable offline-capable PWA. Service-worker cache is versioned as `mihrab-v33-sanctuary` so the new shell can supersede older cached assets safely.

## Verification performed

Static checks:
- `node --check app.js` passed.
- CSS and JS brace balance passed.
- one `:root` declaration.
- one `pointermove` listener.
- one delegated `click` listener and one delegated `change` listener.
- no global `touch-action:none`.
- no forbidden framework/graphics runtime.

Controlled Chromium harness using the actual project HTML/CSS/JS:
- entry threshold appears and can be exited.
- all six main routes render without the internal error state.
- Islamic date renders.
- five prayer controls render and mirror the existing daily prayer task state.
- Istighfar increments persist during the session.
- obligation modal/save path works.
- Proof Vault and Recent Story surfaces render and accept a proof record.
- prayer-time settings render.
- mobile widths 320 / 360 / 375 / 390 / 430 have no horizontal overflow after the final containment fix.
- paper theme still renders the Home and spiritual surfaces.

Not verified here: physical touch on a real phone/tablet, production GitHub Pages behavior on the user's origin, and the service-worker lifecycle on the production origin.

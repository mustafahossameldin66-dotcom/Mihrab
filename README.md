# Mihrab — Sanctuary Final

A mobile-first spatial redesign of Mihrab built only with HTML, CSS, SVG, and Vanilla JavaScript.

## First impression

Mihrab now opens through a full-screen native threshold rather than dropping the user directly into a dashboard:

**Open → enter the portal → arrive in the sanctuary → move through rooms.**

The exact original Mihrab brand geometry and typography relationship are preserved. The atmosphere is created with layered CSS gradients, SVG geometry, depth, masks, restrained blur, and a centralized pointer system. No WebGL, Three.js, React, Vue, Svelte, canvas loop, or particle engine is used.

## Spatial architecture

The Home room is organized around:

- cinematic portal / hero scene
- Now / Next / Later execution
- protected daily work
- six navigable rooms inside the same visual world
- long-run progress signal
- living ambient atmosphere

The Islamic Studies room is data-driven: active, paused, and completed series are rendered from the generic library model. Future Islamic series use the same renderer without series-specific code.

## History and data

Completion events are recorded locally and used for consistency metrics. Series session milestones are recorded at 25%, 50%, 75%, and 100%. Existing completed records with no recorded completion date remain undated; the app never synthesizes a historical completion date.

The existing localStorage keys and legacy migration path are retained. No backend is introduced for analytics.

## Preserved functionality

The existing six routes, task state, completion, editing, task progress, Quick Capture, Command Palette, Focus Mode, theme switching, language switching, forms/modals, local state, schedules, progress data, PWA shell, offline cache architecture, backup/restore, Rafiq bridge, content library, course/marketing/Qur’an/Islamic logic, and settings remain in the application.

## Verification

Verified in a controlled Chromium/CDP browser harness using the actual application JavaScript and CSS:

- startup and full-screen entry threshold
- all six main routes with no render error
- Home room constellation and daily task field
- generic Islamic series rendering
- session completion and automatic series completion
- 25/50/75/100% milestone creation
- legacy completed record with unknown date remains undated
- Daily Momentum is stable for the day and persisted in its local key
- task completion records exactly one completion event per interaction
- Undo records an uncompletion event
- shared modal opens/closes
- System/Auto theme and Arabic/English switching
- low-power attribute path
- 390px mobile width without horizontal overflow
- JavaScript syntax and CSS brace balance

Not verified here: physical touch on a real phone/tablet, browser behavior on the user's deployed GitHub Pages origin, and service-worker update behavior on that production origin.

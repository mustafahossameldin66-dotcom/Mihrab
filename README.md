# Mihrab

**بناء النفس، وصناعة الأثر، وتحقيق الاستقلال.**

Mihrab is a local-first PWA designed to stay useful for the long run: today-first execution, protected essentials, adaptive day modes, editable content tracks, backups, focus mode, and Arabic/English UI.

## Deploy
- Push the repository to GitHub.
- Connect GitHub directly to Cloudflare Pages.
- No build command; publish the repository root.

## GitHub Pages
- Enable Pages from `main` / root for a project-site preview.

## Local preview
- Open `index.html` for a basic preview.
- PWA installation/service worker require HTTPS or localhost.

## Data
- Progress and settings are stored locally in the browser.
- Use System → Backup & restore to export/import a JSON backup.
- Content Library lets you add, edit, activate, pause, replace, and complete tracks without editing code. Archive finished tracks instead of deleting them.

## Rafiq Quran
- Rafiq remains an external Cloudflare site and can be opened or embedded from the Qur'an section.


## Performance
- System → Performance includes Low Power Mode to disable the ambient canvas and reduce live effects.
- Live effects respect `prefers-reduced-motion` and are paused while the tab is hidden.

## Lifelong use
- Day modes are per-day overrides; they do not rewrite the base plan.
- Missed daily work is not carried forward as debt.
- Content tracks are separate from the schedule so you can swap finished content without changing the code.
- Close Today records the day without moving unfinished work forward. It is a gentle end-of-day ritual, not a reset penalty.
- Daily notes and track notes keep small insights close to the relevant day or content path without becoming a second task manager.
- The Year Journey turns the marketing curriculum into four visible stages so small daily work stays connected to a long-term direction.

## Momentum features
- A rotating daily signal, a personal opening line, and 5/15/30/60-minute launch buttons make reopening the app feel useful immediately.
- A local Proof Vault stores links, output locations, and short notes for work you have actually produced.
- Recent Story keeps a compact local timeline of saved proof and intentionally closed days.
- Signature and Calm visual modes let you choose between a rich live atmosphere and a quieter experience; sound and vibration confirmations are optional.
- Installed-app shortcuts can open Focus or Quick Capture directly where the platform supports PWA shortcuts.
- A 25-minute reminder is available only while the open app remains active. Reliable background scheduling and native home-screen widgets require a native mobile app.

## Signature visual layer
- The interface uses slow ambient light, travelling edge lighting, layered glass, cinematic view transitions, and animated progress illumination.
- Arabic headings use an elegant local-font stack; no remote font service is required, so the app remains private and works offline with its system fallbacks.
- All live visual effects respect `prefers-reduced-motion`, Calm mode, and Low Power Mode.




Architecture note: styles.css was consolidated into one token/theme layer and one responsive/interaction layer. Legacy stacked override blocks were removed.

### Mobile-first navigation
On screens up to 760px, Mihrab switches to a native-feeling bottom navigation bar. The desktop navigation is hidden and the same navigation state is rendered into the mobile bar, so page switching works reliably on touch devices.


## Mobile-first performance
- The primary UX is the mobile layout with a fixed bottom navigation.
- The dashboard renders only the active view instead of rebuilding all views.
- Ambient motion is CSS-only; there is no continuous canvas particle loop.
- Heavy backdrop blur is limited to the topbar and primary hero.
- Reduced-motion and Low Power Mode disable ambient animation.

## Visual polish
- The refreshed interface uses a subtle architectural background pattern, layered colour light, and a calmer animated pulse around key progress elements.
- Cards, action buttons, and completed tasks provide clear touch and keyboard feedback without relying on costly effects.
- The design adapts its spacing, navigation, visual density, and effects below 760px so it feels native on a phone while retaining a spacious laptop layout.
- All decorative effects are CSS-only. `prefers-reduced-motion` and Low Power Mode turn off the moving accents.


Mihrab V12 adds a single touch-first mobile navigation engine, two-accent theme discipline, daily momentum signals, completion micro-feedback, and mobile-specific performance safeguards.

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

# Mihrab V27 Progress

## Current
Deployment-safe clean build based on V26 reviewed.

## Fixes
- Versioned JS/CSS filenames to bypass stale GitHub Pages/service-worker query caches.
- Static primary/mobile navigation fallback exists before JS boot.
- New service-worker cache namespace: mihrab-v27-clean.
- Network-first navigation fallback.
- Boot guard reports initialization failures instead of silent blank shell.
- Existing V26 functionality, two-tone themes, mobile layout, live background, task states, Rafiq bridge glow, modals, backup, and library lifecycle preserved.

## Verification
- node --check app-v27.js: pending final check
- local asset existence: verified by build script

# RideShare · Java 6 · PWA dhe leximi offline

## Çfarë u ndërtua

- Manifesti i RideShare AAB dhe ikonat PNG në `aplikacioni/public/icons/`.
- `GET /api/udhetimet`, që kthen vetëm fushat publike të udhëtimit.
- Service worker network-first për listën, me kopje lokale vetëm pas përgjigjes së suksesshme (`aplikacioni/public/sw.js`).
- `aplikacioni/public/offline.html`, një lexues i pavarur nga asetet e Next.js, me kohën dhe burimin e listës.
- Regjistrimi i worker-it në aplikacion. Hyrja, paneli dhe kërkesat POST nuk ruhen.

## Kontrollet e kryera këtu

- Ikonat zyrtare u shkarkuan nga lidhjet e ushtrimit; emrat dhe madhësitë 192×192 e 512×512 u verifikuan.
- TypeScript (`tsc --noEmit`): kaloi.
- Sintaksa e `aplikacioni/public/sw.js` dhe skriptit të `aplikacioni/public/offline.html` (`node --check`): kaloi.
- `npm run build` nga `aplikacioni/`: kaloi.
- Serveri lokal në modalitet zhvillimi: manifesti, API-ja, faqja offline dhe service worker-i u përgjigjën me HTTP 200. API-ja ktheu 3 udhëtime demo me fushat `id`, `nisja`, `destinacioni`, `ora`, `vendtakimi`, `vende`.
- Simulimi i service worker-it: kaloi për ruajtjen e përgjigjes 08:15, fallback offline, përditësimin në 08:25 pas rilidhjes dhe përjashtimin e POST/panelit.

## Provat praktike

Mjedisi nuk ka browser/DevTools të disponueshëm, prandaj rezultatet më poshtë
dallojnë kontrollet HTTP dhe simulimin nga provat reale në telefon/shfletues.

### Prova 1 · Manifesti dhe vizita online

- Hapat: U kërkuan `/manifest.webmanifest`, `/api/udhetimet`, `/offline.html` dhe `/sw.js` në serverin lokal.
- Rezultati i pritur: Manifesti ka dy ikona; API-ja jep tri udhëtime publike.
- Rezultati real: HTTP 200 për të katër adresat; manifesti dha ikonat 192×192 dhe 512×512, API-ja dha 3 udhëtime me fushat publike.
- Kaloi / Dështoi: Kaloi kontrolli HTTP. Instalimi i worker-it në browser nuk u provua.

### Prova 2 · Pa internet, edhe pas rifreskimit

- Hapat: U simulua përgjigjja 08:15, ndërprerja e rrjetit dhe kërkesa e radhës.
- Rezultati i pritur: Shfaqet kopja 08:15 me burim `cache`; POST dhe paneli nuk ruhen.
- Rezultati real: Simulimi verifikoi kopjen offline dhe përjashtimin e POST/panelit. Rifreskimi real në DevTools nuk u provua.
- Kaloi / Dështoi: Kaloi simulimi; prova në browser mbetet për t'u kryer.

### Prova 3 · Rikthe lidhjen dhe merr listën e re

- Hapat: Simulimi mori fillimisht 08:15, pastaj përgjigje të re 08:25 dhe më pas u ndërpre rrjeti.
- Rezultati i pritur: Kopja e re 08:25 shfaqet edhe pasi kërkesa e radhës dështon.
- Rezultati real: Simulimi verifikoi zëvendësimin e kopjes 08:15 me 08:25. Ndryshimi real në Neon/SQL nuk u krye sepse nuk ka konfigurim databaze në këtë projekt.
- Kaloi / Dështoi: Kaloi simulimi; prova me Neon mbetet për t'u kryer.

## Publikimi

- Repository personal:
- Commit:
- Push origin:
- Dorëzimi në formular:

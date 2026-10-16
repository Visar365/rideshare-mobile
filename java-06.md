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
- Neon-i ekzistues kishte skemën e Javës 4; u aplikua migrimi shtues `aplikacioni/schema-java05.sql` që krijon `profilet` dhe kolonën `shofer_id`. Asnjë rresht udhëtimi nuk u fshi.
- Serveri lokal me Neon real: manifesti, API-ja, faqja offline dhe service worker-i u përgjigjën me HTTP 200. API-ja ktheu tri udhëtime me vetëm fushat publike `id`, `nisja`, `destinacioni`, `ora`, `vendtakimi`, `vende`.
- Prova reale në Edge: service worker-i u aktivizua, rifreskimi online lexoi ndryshimin real 08:25 nga Neon, ndërsa rifreskimi pasi serveri u ndal lexoi tri kartat nga cache dhe shfaqi paralajmërimin për të dhëna të vjetra.
- Pamja në 375 px: lexuesi shfaqi tri karta, pa tejmbushje horizontale (`scrollWidth` 375 px).
- Simulimi i service worker-it: kaloi për ruajtjen e përgjigjes 08:15, fallback offline, përditësimin në 08:25 pas rilidhjes dhe përjashtimin e POST/panelit.

## Provat praktike

Provat u bënë në Edge desktop me DevTools Protocol dhe viewport 375 px. Instalimi
si ikonë në telefon nuk u bë; ushtrimi e shënon si opsional.

### Prova 1 · Manifesti dhe vizita online

- Hapat: U kërkuan `/manifest.webmanifest`, `/api/udhetimet`, `/offline.html` dhe `/sw.js` në serverin lokal me Neon real.
- Rezultati i pritur: Manifesti ka dy ikona; API-ja jep tri udhëtime publike.
- Rezultati real: HTTP 200 për të katër adresat; manifesti dha ikonat 192×192 dhe 512×512. Edge aktivizoi worker-in dhe API-ja ktheu tri udhëtimet reale me fushat publike.
- Kaloi / Dështoi: Kaloi në Edge dhe në kontrollin HTTP. Instalimi si ikonë në telefon nuk u provua; është opsional sipas ushtrimit.

### Prova 2 · Pa internet, edhe pas rifreskimit

- Hapat: Pas ruajtjes së listës së re, u ndal serveri dhe u rifreskua faqja offline në Edge.
- Rezultati i pritur: Shfaqet lista e fundit nga `cache`; nuk pretendohet rezervim i konfirmuar.
- Rezultati real: Pas ndërprerjes së serverit, Edge rifreskoi faqen e ruajtur, shfaqi tri kartat dhe mesazhin “Lista e fundit e ruajtur · Mund të jetë vjetruar. Serveri nuk u arrit.” Butoni i rezervimit mbeti i çaktivizuar.
- Kaloi / Dështoi: Kaloi prova offline në shfletues. Simulimi veçmas verifikoi përjashtimin e POST/panelit.

### Prova 3 · Rikthe lidhjen dhe merr listën e re

- Hapat: U lexua 08:15 nga Neon; në Neon u ndryshua ora e udhëtimit 2 në 08:25, pastaj u shtyp “Rifresko listën” online dhe u rifreskua faqja pasi serveri u ndal.
- Rezultati i pritur: Kopja e re 08:25 shfaqet edhe pasi kërkesa e radhës dështon.
- Rezultati real: Edge mori 08:25 nga serveri/Neon dhe pas rifreskimit offline e lexoi të njëjtën orë nga cache. Më pas ora në Neon u kthye në 08:15; API-ja dhe cache-i i shfletuesit u rifreskuan dhe u verifikuan sërish me 08:15.
- Kaloi / Dështoi: Kaloi prova reale me Neon dhe Edge. Gjendja e databazës u rikthye në vlerën fillestare.

## Publikimi

- Repository personal: https://github.com/Visar365/rideshare-mobile
- Commit-i fillestar i PWA-së: `065c42b` — Add Java 6 offline PWA
- Push origin: u shty te `main`.
- Dorëzimi: [Issue #589 · Java 6](https://github.com/arbenl/arbenl-mobile-assignments-2026-2027/issues/589).
- Kontrolli automatik: 5/5 kontrolle teknike kaluan te commit-i `e17514d`; ky kontroll nuk ekzekuton aplikacionin dhe nuk është notë.

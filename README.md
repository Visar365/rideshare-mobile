# RideShare

Projekt demonstrues për udhëtimet e AAB-së. Java 5 shton hyrjen GitHub, panelin e përdoruesit dhe kontrollin server-side të rolit/pronësisë, duke ruajtur faqet ekzistuese të Java 4.

## Nisja lokale

```powershell
cd aplikacioni
npm ci --ignore-scripts
npm run dev
```

Hape http://localhost:3000. Pa kredenciale, zhvillimi lokal ofron të dhëna dhe role demo; ndryshimet ruhen vetëm në memorien e serverit dhe humbin kur procesi ndalet.

Për GitHub dhe Neon realë, kopjo `aplikacioni/.env.example` te `aplikacioni/.env.local`, plotëso kredencialet lokalisht dhe ekzekuto `aplikacioni/schema-java05.sql` në Neon SQL Editor. GitHub OAuth callback duhet të jetë `http://localhost:3000/api/auth/callback/github`. Mos publiko `.env.local`.

## Kontrolli

```powershell
cd aplikacioni
npm run typecheck
npm run build
```

Si shofer real, roli caktohet në tabelën `profilet` dhe `shofer_id` lidhet me udhëtimin nga administratori i databazës. Serveri kontrollon rolin dhe pronësinë në çdo përditësim. Demonstrimi lokal nuk është autentikim prodhimi dhe nuk përdoret në build-in production.

## Java 6 · PWA dhe leximi offline

Java 6 shton manifestin dhe ikonat PWA, endpoint-in publik `GET /api/udhetimet`,
service worker-in me strategji network-first dhe faqen e pavarur `aplikacioni/public/offline.html`.
Hap aplikacionin një herë online që worker-i të ruajë listën; pastaj provo `/offline.html`.
Kopja mund të jetë e vjetër dhe nuk konfirmon rezervime. Provat dhe rezultatet janë te `java-06.md`.

## Java 8 · Vendndodhja dhe vendtakimi

Faqja e provës `http://localhost:3000/java-08-test` përdor komponentin e njëjtë të vendtakimit si faqja e detajeve të udhëtimit. Ajo përdor udhëtim fiktiv lokal dhe hapet pa hyrje, Neon ose sekrete. Vendndodhja kërkohet vetëm pas klikimit; vendimi manual mbetet i disponueshëm nëse leja refuzohet ose API-ja mungon.

`mobile-week08.json` përcakton rrugën e faqes për kontrollin e Java 8. Paketa dhe `package-lock.json` janë bashkë te `aplikacioni/`. GitHub Actions ekzekuton `npm ci --ignore-scripts`, `npm run typecheck` dhe `npm run build` me Node.js 22. Provat manuale dhe rezultati i kontrollit të jashtëm dokumentohen te `java-08.md`.

# RideShare — Java 8

## Çfarë ndërtova
Shtova përfundimin e udhëtimit me vendtakim manual dhe me vendndodhjen e pajisjes. Komponenti `Vendtakimi` përdoret si në detajet e udhëtimit ashtu edhe në faqen e provës `/java-08-test`. Faqja e provës përdor udhëtim lokal fiktiv dhe nuk kërkon hyrje, Neon ose sekrete. Leja kërkohet vetëm pas klikimit; refuzimi, skadimi dhe mungesa e mbështetjes e lënë aktive zgjedhjen manuale. Vendimi manual konfirmohet veçmas; ndryshimi i fushës pa konfirmim nuk e ndryshon vendimin e ruajtur.

## Provat që bëra

### Prova 1: Leja nuk kërkohet sapo hapet faqja.
- **Hapat:** Kërkova faqen `/java-08-test` pa shtypur butonin.
- **Rezultati i pritur:** Faqja hapet pa kërkuar leje dhe statusi fillestar është `idle`.
- **Rezultati:** Rruga u përgjigj me HTTP 200 dhe përmbante ndërfaqen e provës. Kodi nis kërkesën vetëm nga klikimi. Nuk e provova kërkesën reale të sistemit në shfletues.

### Prova 2: Lejimi i vendndodhjes.
- **Hapat:** Pas klikimit, shfletuesi duhet të lejojë përdoruesin të japë lejen.
- **Rezultati i pritur:** Statusi bëhet `success`, shfaqen koordinatat dhe saktësia në metra.
- **Rezultati:** TypeScript dhe build kaluan. Leja reale dhe GPS-i nuk janë provuar në pajisje.

### Prova 3: Refuzimi nuk e bllokon vendimin manual.
- **Hapat:** Refuzo lejen; pastaj shkruaj dhe konfirmo vendtakimin manual.
- **Rezultati i pritur:** Statusi bëhet `denied`; fusha dhe butoni manual vazhdojnë të punojnë.
- **Rezultati:** Përfundimi nga gabimi `PERMISSION_DENIED` është implementuar; refuzimi real në shfletues nuk është provuar.

### Prova 4: Ndryshimi pa konfirmim dhe teksti bosh.
- **Hapat:** Konfirmo “Biblioteka”, ndrysho fushën në “Parkingu” pa konfirmuar, pastaj provo fushë me vetëm hapësira.
- **Rezultati i pritur:** Vendimi mbetet “Biblioteka” derisa të konfirmohet një tjetër; teksti bosh shfaq gabim dhe ruan vendimin e mëparshëm.
- **Rezultati:** Logjika përdor `trim()` dhe gjendje të ndara për draftin, gabimin dhe konfirmimin. Prova interaktive në shfletues mbetet për t’u bërë.

### Prova 5: Sukses me koordinata prove.
- **Hapat:** Në Chrome DevTools → More tools → Sensors, zgjidh një vend prove me saktësi 37 m; pastaj kliko përdorimin e vendndodhjes.
- **Rezultati i pritur:** Statusi bëhet `success`; saktësia e kthyer nga shfletuesi shfaqet në metra.
- **Rezultati:** Komponenti shfaq saktësinë nga Geolocation API. Skenari me vend prove nuk është kryer ende.

### Prova 6: Skadimi i kohës.
- **Hapat:** Simulo ose prit që kërkesa e vendndodhjes të skadojë.
- **Rezultati i pritur:** Statusi bëhet `timeout`, pritja përfundon dhe përdoruesi mund të konfirmojë manualisht.
- **Rezultati:** Callback-u i kodit 3 përfundon pritjen; skadimi real nuk është provuar.

### Prova 7: Mungesa e mbështetjes.
- **Hapat:** Hape faqen në mjedis pa `navigator.geolocation` ose simulo mungesën e tij.
- **Rezultati i pritur:** Statusi bëhet `unavailable`; vendtakimi manual punon.
- **Rezultati:** Rruga e mungesës së API-së është implementuar; nuk është provuar në shfletues real.

### Prova 8: Etiketat dhe faqja e provës.
- **Hapat:** Kontrollo `mobile-week08.json`, etiketat `data-testid` dhe rrugën lokale.
- **Rezultati i pritur:** Konfigurimi tregon `/java-08-test`; elementet kanë etiketat e kërkuara dhe faqja punon me të dhëna lokale.
- **Rezultati:** Rruga u përgjigj me HTTP 200 dhe përmbante etiketat e fushës, konfirmimit dhe statusit. Build-i dhe typecheck kaluan.

## Kontrollet teknike
- `npm ci --ignore-scripts` — përfundoi.
- `npm run typecheck` — kaloi.
- `npm run build` — kaloi; përfshin rrugën statike `/java-08-test`.
- GitHub Actions, run `42056316467` — kaloi me Node.js 22: instalimi, typecheck, build dhe smoke test-i i faqes së provës.
- Pull request: https://github.com/Visar365/rideshare-mobile/pull/1 (i hapur, jo i bashkuar).
- Kontrollet automatike të jashtme Java 8 dhe provat me leje reale nuk janë ekzekutuar ende.

## Ku gjendet puna
- `aplikacioni/src/components/Vendtakimi.tsx` — komponenti i përbashkët.
- `aplikacioni/src/app/udhetimi/[id]/page.tsx` — integrimi te detajet e udhëtimit.
- `aplikacioni/src/app/java-08-test/page.tsx` — faqe prove pa hyrje ose databazë.
- `aplikacioni/src/components/rideshare.module.css` — paraqitja responsive.
- `mobile-week08.json` — konfigurimi i faqes së provës.
- `.github/workflows/verify-java-08.yml` — build dhe typecheck në GitHub Actions.

## Çfarë mbetet për përmirësim
Duhet të kryhen provat manuale në shfletues për lejimin, refuzimin, skadimin e kërkesës dhe paraqitjen në ekran të ngushtë. GitHub Actions dhe kontrolli i jashtëm Java 8 duhet të ekzekutohen pasi ndryshimet të ngarkohen në GitHub. Për screenshot publik përdor vetëm koordinata prove, jo koordinatat reale.

## Ndihma nga AI
Përdora AI për të përshtatur komponentin me udhëzimet, për të shtuar faqen lokale të provës dhe konfigurimin e testimit. Verifikova me `npm ci --ignore-scripts`, `npm run typecheck`, `npm run build` dhe kërkesë HTTP te faqja e provës. Nuk kam kryer ende provat reale të lejes ose kontrollin vizual manual.

## Prova me hyrje të re
**Statusi:** Sjellja është implementuar, por prova me përdorues në shfletues/klasë duhet të kryhet ende.

- **Hyrja:** Konfirmo “Biblioteka”, ndrysho fushën në “Parkingu” pa konfirmuar, pastaj provo tekst vetëm me hapësira.
- **Parashikimi:** Konfirmimi duhet të mbetet “Biblioteka” pas ndryshimit të pakonfirmuar; hyrja bosh duhet të shfaqë gabim dhe të mos fshijë konfirmimin.
- **Vëzhgimi:** Nuk është kryer ende në shfletues.
- **Skedari dhe logjika:** `aplikacioni/src/components/Vendtakimi.tsx`; `draft`, `confirmed`, `meetingError` janë gjendje të ndara dhe `trim()` kontrollon tekstin bosh.
- **Çfarë kuptova:** Shkrimi i tekstit dhe konfirmimi janë veprime të ndara; fusha bosh nuk duhet të fshijë një vendim të mëparshëm.

Këtë provë personale plotësoje me vëzhgimin që bën realisht. Kontrolli automatik nuk verifikon vërtetësinë e provës personale.

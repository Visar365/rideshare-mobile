# RideShare — Java 9

## Çfarë ndërtova
Shtova funksionin për ruajtjen e një udhëtimi të preferuar. Ndërfaqja dërgon kërkesë te API-ja lokale, serveri e ruan udhëtimin në `data/favorites.json`, dhe lista ngarkohet përsëri pas rifreskimit. Butoni çaktivizohet gjatë ruajtjes dhe ID-ja unike pengon krijimin e kopjeve. Të dhënat e udhëtimit janë fiktive.

## Provat që bëra
### Prova 1: Ruajtja e suksesshme mbetet pas rifreskimit.
- **Hapat:** Nise serverin me `npm start`, hape `http://localhost:8000`, ruaje udhëtimin dhe rifresko faqen.
- **Rezultati i pritur:** Udhëtimi mbetet në listë pasi lista merret nga API-ja dhe skedari JSON.
- **Statusi:** U verifikua lokalisht me API-në: ruajtja u lexua përsëri pas kërkesës. Rifreskimi i faqes në shfletues nuk u provua.

### Prova 2: Gabimi i serverit nuk lë një sukses të rremë në ekran.
- **Hapat:** Shtyp **Provo gabimin e serverit**; për provë shtesë ndalo serverin dhe provo ruajtjen.
- **Rezultati i pritur:** Shfaqet mesazh gabimi dhe butoni nuk raporton sukses pa përgjigje pozitive nga serveri.
- **Statusi:** U verifikua lokalisht që endpoint-i i provës kthen HTTP 500. Shfaqja e mesazhit në ndërfaqe nuk u provua në shfletues.

### Prova 3: Klikimet e përsëritura nuk krijojnë kopje.
- **Hapat:** Kliko ruajtjen, provo klikime të përsëritura dhe kontrollo listën ose `data/favorites.json`.
- **Rezultati i pritur:** Vetëm një udhëtim me ID `demo-prishtine-gjilan-0830`; serveri kontrollon ID-në edhe nëse dërgohen kërkesa të përsëritura.
- **Statusi:** U verifikua lokalisht që dy kërkesa me të njëjtën ID krijojnë vetëm një hyrje. Klikimet e përsëritura në ndërfaqe nuk u provuan në shfletues.

## Ku gjendet puna
- `index.html` — ndërfaqja dhe butoni **Ruaj udhëtimin e preferuar**.
- `app.js` — kërkesat API, gjendjet e UI-së dhe parandalimi i klikimeve të përsëritura.
- `server.js` — API për ruajtjen/leximin dhe endpoint-i i gabimit të simuluar.
- `data/favorites.json` — ruajtja lokale.
- `styles.css` — paraqitja e ndërfaqes.
- `tests/test-checklist.md` — hapat e testimit.
- Demonstrimi nuk është publikuar online; për momentin punon lokalisht.

## Çfarë mbetet për përmirësim
Të dhënat ruhen në një skedar JSON lokal dhe udhëtimi është demonstrues. Hapi tjetër është lidhja me databazën e projektit, autentikimi dhe ruajtja e udhëtimeve sipas përdoruesit.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për të shtuar endpoint-et e API-së, gjendjet e ndërfaqes, kontrollin e ID-së dhe raportin e testimit. Duhet t'i ekzekutoj vetë provat manuale në shfletues dhe të kontrolloj rezultatin para dorëzimit.

# RideShare — Java 8

## Çfarë ndërtova
Përditësova demonstrimin RideShare për udhëtimin e Dritonit. Arta mund të shkruajë dhe të konfirmojë vendtakimin manualisht, ose të kërkojë vendndodhjen e pajisjes pasi shtyp butonin. Faqja shfaq gjendjet e kërkesës, përfshirë suksesin, refuzimin, skadimin e kohës dhe mungesën e mbështetjes. Shtova edhe demonstrimin me koordinata fiktive dhe saktësi të simuluar 37 m. Koordinatat reale nuk dërgohen nga kjo faqe.

## Provat që bëra

### Prova 1: Leja nuk kërkohet sapo hapet faqja.
- **Hapat:** Hape faqen dhe mos shtyp butonin e vendndodhjes.
- **Rezultati i pritur:** Shfaqet gjendja fillestare `idle`; shfletuesi nuk kërkon leje.
- **Çfarë ndodhi:** Nuk e kam provuar ende në shfletues. Nga kontrolli i kodit, `getCurrentPosition` thirret vetëm në klikimin e butonit `locate-me`.

### Prova 2: Refuzimi i lejes nuk e bllokon përdoruesin.
- **Hapat:** Shtyp butonin e vendndodhjes dhe refuzo lejen në shfletues.
- **Rezultati i pritur:** Shfaqet gjendja `denied`, butoni riaktivizohet dhe vendtakimi manual mbetet i përdorshëm.
- **Çfarë ndodhi:** Nuk e kam provuar ende me lejen reale në shfletues. Nga kontrolli i kodit, callback-u i gabimit për kodin 1 shfaq udhëzimin dhe e riaktivizon butonin.

### Prova 3: Dëshmitë në GitHub nuk tregojnë adresën time reale.
- **Hapat:** Shtyp “Provo me vendndodhje fiktive” dhe kontrollo pamjen para se të bësh screenshot.
- **Rezultati i pritur:** Shfaqen vetëm koordinatat e demonstrimit dhe saktësia e shënuar si e simuluar; nuk bëhet kërkesë GPS.
- **Çfarë ndodhi:** Kontrollova kodin: demonstrimi përdor koordinatat fikse `41.00000, 21.00000` dhe saktësinë `37 m (simuluar)`. Nuk kam marrë ende screenshot prove.

## Ku gjendet puna
- `index.html` — faqja e udhëtimit dhe etiketat `data-testid`.
- `app.js` — konfirmimi manual, kërkesa e vendndodhjes, gjendjet dhe demonstrimi fiktiv.
- `styles.css` — pamja responsive dhe paraqitja e gjendjeve.
- `java-08-test/index.html` — faqja e provës me të njëjtën ndërfaqe, e hapshme te `/java-08-test/` nga serveri lokal.
- `tests/test-checklist.md` — lista e kontrolleve manuale.
- Demo publike dhe repository GitHub: nuk janë publikuar/lidhur në këtë raport.

## Çfarë mbetet për përmirësim
Duhet t’i provoj në shfletues lejimin, refuzimin, skadimin e kohës, mungesën e mbështetjes dhe pamjen në ekran të ngushtë. Duhet gjithashtu të plotësoj tetë kontrollet e faqes së provës dhe të ruaj rezultatet e vëzhguara. Deri atëherë, rezultatet e mësipërme janë kontroll i kodit, jo prova të kryera në pajisje. Para publikimit, duhet të kontrolloj që screenshot-et të përdorin vetëm të dhënat fiktive.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për të përshtatur faqen sipas udhëzimeve, për të shtuar etiketat e testimit, trajtimin e gjendjeve të vendndodhjes dhe për të plotësuar këtë raport. Verifikova sintaksën e `app.js` me `node --check`; ajo kaloi. Nuk kam verifikuar ende sjelljen e lejes reale apo faqen në shfletues.

## Prova me një hyrje të re
**Statusi:** Parashikim nga leximi i kodit; prova nuk është kryer ende në shfletues dhe duhet shpjeguar pasi të provohet vetë.

- **Hyrja që provova:** Ende nuk e kam provuar. Rasti i zgjedhur: vendtakimi përmban vetëm hapësira.
- **Parashikimi im para klikimit:** Pas shtypjes së “Konfirmo vendtakimin”, duhet të shfaqet gabimi për tekst bosh dhe konfirmimi i mëparshëm, nëse ka, duhet të mbetet i pandryshuar.
- **Çfarë pashë realisht:** Nuk është provuar ende; nuk po e paraqes parashikimin si rezultat real.
- **Skedari dhe funksioni që e shpjegojnë:** `app.js`, dëgjuesi `click` i `confirmButton`; ai përdor `decisionInput.value.trim()` dhe ndalon konfirmimin kur rezultati është bosh.
- **Çfarë kuptova ose korrigjova:** Kontrolli me `trim()` e trajton tekstin me hapësira si bosh. Gabimi shfaqet në elementin `meeting-error`, veçmas nga `confirmed-meeting`, prandaj konfirmimi i mëparshëm nuk mbishkruhet.

Këtë provë duhet ta kryej vetë dhe ta përditësoj me atë që ndodhi realisht. Kontrolli automatik nuk verifikon vërtetësinë e provës.
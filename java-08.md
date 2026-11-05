RideShare — Java 8
Çfarë ndërtova
Përditësova demonstrimin RideShare për udhëtimin e Dritonit. Arta mund të shkruajë dhe të konfirmojë vendtakimin manualisht, ose të kërkojë vendndodhjen e pajisjes pasi shtyp butonin. Faqja shfaq gjendjet e kërkesës, përfshirë suksesin, refuzimin, skadimin e kohës dhe mungesën e mbështetjes. Shtova demonstrimin me koordinata fiktive dhe saktësi të simuluar 37 m. Koordinatat reale nuk dërgohen nga kjo faqe.
Provat që bëra
Ekzekutova node --test tests/app.test.cjs: 8 kontrolle kaluan, 0 dështuan. Këto kontrolle përdorin një mjedis të simuluar të shfletuesit; nuk i kam kryer ende provat e lejes reale ose kontrollin vizual manual.
Prova 1: Leja nuk kërkohet sapo hapet faqja.
- Hapat: Testi krijon faqen pa klikuar butonin dhe kontrollon numrin e thirrjeve të Geolocation API.
- Rezultati i pritur: Gjendja idle; asnjë kërkesë vendndodhjeje.
- Rezultati: Kaloi. Nuk u thirr API-ja dhe gjendja ishte idle.
Prova 2: Lejimi pas klikimit.
- Hapat: Testi klikon butonin, pastaj simulon përgjigje të suksesshme me koordinata dhe saktësi.
- Rezultati i pritur: Kërkesa nis pas klikimit; koordinatat shfaqen dhe butoni riaktivizohet.
- Rezultati: Kaloi në simulim. Leja reale dhe GPS-i i pajisjes nuk u provuan.
Prova 3: Refuzimi i lejes nuk e bllokon përdoruesin.
- Hapat: Testi simulon gabimin me kodin 1, pastaj konfirmon vendtakimin manual.
- Rezultati i pritur: Gjendja denied, butoni riaktivizohet dhe vendimi manual punon.
- Rezultati: Kaloi në simulim. Refuzimi real në njoftimin e shfletuesit nuk u provua.
Prova 4: Teksti bosh nuk fshin konfirmimin paraprak.
- Hapat: Testi konfirmon “Biblioteka”, ndryshon fushën në “Parkingu” pa konfirmuar, pastaj vendos vetëm hapësira dhe konfirmon përsëri.
- Rezultati i pritur: Shfaqet gabim për tekst bosh dhe konfirmimi i parë ruhet.
- Rezultati: Kaloi në simulim; ndryshimi pa konfirmim nuk e preku vendimin, dhe pas hyrjes bosh konfirmimi “Biblioteka” mbeti i pandryshuar.
Prova 5: Demonstrimi fiktiv nuk përdor GPS.
- Hapat: Testi shtyp butonin e demonstrimit fiktiv dhe kontrollon thirrjet e API-së, shënimin fiktiv dhe saktësinë.
- Rezultati i pritur: Nuk bëhet kërkesë GPS; shfaqet saktësia e simuluar 37 m.
- Rezultati: Kaloi; nuk u bë thirrje e API-së.
Prova 6: Skadimi i kohës e përfundon pritjen.
- Hapat: Testi simulon gabimin me kodin 3 pas nisjes së kërkesës.
- Rezultati i pritur: Gjendja timeout dhe butoni riaktivizohet.
- Rezultati: Kaloi në simulim. Skadimi real i kërkesës nuk u provua në pajisje.
Prova 7: Mungesa e mbështetjes nuk bllokon alternativat.
- Hapat: Testi krijon mjedis pa Geolocation API, klikon vendndodhjen dhe pastaj demonstrimin fiktiv.
- Rezultati i pritur: Gjendja unavailable; demoja fiktive vazhdon të punojë.
- Rezultati: Kaloi në simulim.
Prova 8: Etiketat dhe stili responsive.
- Hapat: Testi kontrollon etiketat data-testid, gjendjen fillestare dhe praninë e rregullave CSS për ekrane të ngushta.
- Rezultati i pritur: Etiketat janë të pranishme dhe CSS ka media query responsive.
- Rezultati: Kaloi kontrollin statik. Pamja reale në madhësi të ndryshme ekrani nuk është kontrolluar vizualisht.
Ku gjendet puna
- index.html — faqja e udhëtimit dhe etiketat data-testid.
- app.js — konfirmimi manual, kërkesa e vendndodhjes, gjendjet dhe demonstrimi fiktiv.
- styles.css — pamja responsive dhe gjendjet vizuale.
- java-08-test/index.html — faqja lokale e provës.
- tests/app.test.cjs — tetë kontrollet automatike pa varësi shtesë.
- tests/test-checklist.md — përmbledhja e kontrolleve dhe kufizimet.
- Demo publike dhe repository GitHub: nuk janë publikuar/lidhur në këtë raport.
Çfarë mbetet për përmirësim
Duhet të kontrolloj manualisht paraqitjen në shfletues, përfshirë ekranin e ngushtë, dhe nëse dëshiroj të provoj lejen reale: lejimin, refuzimin dhe skadimin. Testet automatike simulojnë callback-et e API-së dhe nuk vërtetojnë sjelljen e GPS-it apo sistemit operativ. Para publikimit duhet të përdor vetëm demonstrimin fiktiv në screenshot-e.
Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për të përshtatur faqen sipas udhëzimeve, për të shtuar etiketat dhe gjendjet e testimit, për të shkruar kontrollet automatike dhe për të plotësuar këtë raport. Ekzekutova node --test tests/app.test.cjs dhe node --check app.js; tetë kontrollet kaluan dhe sintaksa është e vlefshme. Provat e lejes reale dhe kontrolli vizual mbeten për t’u bërë.
Prova me një hyrje të re
Statusi: Kontrollova rastin e hyrjes së re me testin automatik të ndërveprimit në projektin demonstrues Java 8. Komanda node --test tests/app.test.cjs përfundoi me 8 teste të kaluara dhe 0 të dështuara. Ky rezultat është nga DOM-i i simuluar, jo nga një provë manuale në shfletuesin e përdoruesit.
- Hyrja që provova: Fillimisht vendosa Biblioteka dhe e konfirmova. Pastaj ndryshova fushën në Parkingu, pa e konfirmuar. Në fund vendosa vetëm hapësira (   ) dhe shtypa butonin e konfirmimit.
- Parashikimi im para klikimit: Ndryshimi i fushës në Parkingu nuk duhet ta ndryshojë vendtakimin e konfirmuar. Kur fusha përmban vetëm hapësira, aplikacioni duhet të shfaqë gabim dhe të ruajë konfirmimin Biblioteka.
- Çfarë pashë realisht: Në testin automatik, Biblioteka u ruajt si vendtakim i konfirmuar edhe pasi fusha u ndryshua në Parkingu pa konfirmim. Pas klikimit me fushë vetëm me hapësira u shfaq gabimi për vendtakim bosh; konfirmimi i mëparshëm Biblioteka mbeti i pandryshuar. Testi përfundoi me sukses.
- Skedari dhe funksioni që e shpjegojnë: Te demonstrimi statik, java-08-geolocation/app.js, dëgjuesi click i confirmButton përdor decisionInput.value.trim() dhe i mban të ndara elementet meeting-error dhe confirmed-meeting. Testi përkatës gjendet te java-08-geolocation/tests/app.test.cjs, prova 4. Në aplikacionin Next.js, logjika përkatëse është te rideshare-mobile/aplikacioni/src/components/Vendtakimi.tsx, funksioni confirmMeeting(), me gjendjet draft, confirmed dhe meetingError.
- Çfarë kuptova ose korrigjova: Shkrimi i një vendtakimi nuk është i njëjtë me konfirmimin e tij. Vetëm një tekst jo bosh i konfirmuar përditëson vendtakimin; hyrja bosh nuk duhet ta fshijë vendimin e mëparshëm.
Kufizimi i verifikimit: Nuk e shënova si provë manuale në shfletues. Tentativa për të nisur aplikacionin Next.js në këtë mjedis u ndal sepse mungonte paketa binare SWC dhe mjedisi nuk mund ta shkarkonte nga npm. Prandaj, raporti dallon qartë testin automatik të kaluar nga prova manuale që ende duhet bërë në shfletues.

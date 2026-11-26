RideShare — Java 11: Njoftimet dhe angazhimi#
Ky raport bazohet në kodin e projektit dhe në pamjet e simulimit që u dërguan bashkë me detyrën. Pamjet tregojnë rrjedhën e synuar, por nuk janë provë që këto skenarë u ekzekutuan në versionin lokal të RideShare. Nuk kam bërë prova praktike me dy sesione dhe nuk po i paraqes pamjet si rezultate të testimit real.

Çfarë shtova ndaj javës 10#
Java 10 shqyrtonte listën e udhëtimeve dhe hyrjen sipas roleve, ndërsa dërgimi dhe pranimi i kërkesave ishin ende simulim. Për Java 11, në kodin e projektit u shtuan pjesë për dërgimin e kërkesës, pranimin e saj nga shoferi, uljen e vendeve të lira, si dhe ruajtjen dhe shfaqjen e njoftimeve brenda aplikacionit. Njoftimet mund të shënohen si të lexuara dhe lista rifreskohet periodikisht e pas rilidhjes.

Skema e re gjendet te schema-java11.sql. Ajo duhet ekzekutuar në Neon pas schema-java05.sql; nuk e kam ekzekutuar ende. Prandaj rrjedha me databazën reale nuk është verifikuar.

Përgatitja#
Përshkrimi dhe pamjet përdorin të dhëna fiktive: udhëtimi #2, Dritoni si shofer, Arta si udhëtare dhe kërkesa K-42. Pamjet paraqesin edhe njoftimin N-42. Këto janë vlera të shembullit në simulim, jo ID të nxjerra nga një provë e kryer në projekt.

Për testim real do të nevojiteshin dy sesione të ndara të shfletuesit, një për shoferin dhe një për udhëtarin. Nuk u përdorën fjalëkalime ose identifikues privatë në këtë raport.

Prova 1: Rasti 1 · Përgjigjja bëhet njoftim#
Hapat dhe përgjigjja e shoferit: Në simulimin e pamjeve, shoferi Dritoni pranon kërkesën K-42 për udhëtimin #2. Nuk e përsërita këtë veprim në versionin lokal të aplikacionit.
Çfarë prisja te udhëtari: Arta të marrë një njoftim të palexuar për përgjigjen dhe vendet e lira të zbresin nga 2 në 1, siç paraqitet në simulim.
ID-ja e njoftimit, numri i palexuar dhe çfarë pashë realisht: Pamjet ilustrojnë njoftimin N-42 dhe numrin 1 të palexuar. Këto janë rezultatet e simulimit të paraqitur në pamje; nuk janë matur në aplikacionin lokal.
Cila kërkesë u hap dhe çfarë mbeti pas Refresh: Në pamjen e rastit 2 hapet K-42 dhe shfaqet statusi “U pranua”. Simulimi tregon që njoftimi mbetet në histori. Nuk e provova pas një rifreskimi real të faqes.
Prova 2: Rasti 2 · Hapja dhe shënimi si i lexuar#
ID-ja e njoftimit dhe cila kërkesë u hap realisht: Në pamjen e simulimit, njoftimi N-42 lidhet me kërkesën K-42. Nuk e hapa në versionin lokal.
Numri i palexuar para/pas konfirmimit nga serveri: Pamjet tregojnë 1 para hapjes dhe 0 pas saj. Nuk i verifikova këto numra me kërkesa reale te serveri.
Çfarë mbeti në histori pas kthimit te lista dhe Refresh: Sipas simulimit, njoftimi mbetet në histori pasi shënohet si i lexuar. Kthimin dhe rifreskimin real nuk i provova.
Nëse provova dështimin e shënimit: Nuk e provova këtë skenar shtesë.
Prova 3: Rasti 3 · Rilidhja pa njoftime të dyfishta#
ID-ja e kërkesës tjetër, dritarja offline dhe hapat: Pamjet përshkruajnë një kërkesë në pritje, ndërprerjen e lidhjes së Artës, pranimin nga shoferi dhe rilidhjen e udhëtarit. Nuk shfaqet ID tjetër e dallueshme nga K-42, ndaj nuk po shpik një ID. Nuk e provova skenarin offline në aplikacion.
Çfarë prisja pas rilidhjes dhe pas dy leximeve të tjera: Sipas simulimit, Arta duhet të marrë një njoftim pas rilidhjes; dy lexime të tjera nuk duhet të shtojnë njoftim ose toast të dytë për të njëjtën përgjigje.
Numri i rekordeve, ID-ja e njoftimit dhe alarmet që pashë realisht: Pamjet ilustrojnë një njoftim pas rilidhjes dhe pa dublikatë. Nuk kam numër rekordesh, ID njoftimi apo alarme të verifikuara nga ekzekutimi real.
Prova me një hyrje tjetër#
Nuk realizova provë me koleg ose me një hyrje tjetër. Për provën e ardhshme do të përdorja një udhëtim dhe kërkesë fiktive të ndryshme, në dy sesione të ndara. Parashikimi im është që njoftimin ta marrë vetëm udhëtari që ka dërguar kërkesën dhe që vetëm shoferi i udhëtimit të mund t’i përgjigjet. Kjo duhet kontrolluar në src/lib/njoftimet.ts dhe në funksionin rideshare_pergjigju te schema-java11.sql. Ky është parashikim nga kodi, jo rezultat i vëzhguar.

Ku gjendet kodi dhe çfarë mbetet#
Pjesët e shtuara në projekt janë:

schema-java11.sql — tabelat për kërkesat dhe njoftimet, kufizimet unike dhe funksioni i përgjigjes;
src/lib/njoftimet.ts — funksionet për krijimin e kërkesës, përgjigjen dhe leximin/shënimin e njoftimeve;
src/app/panel/actions.ts dhe src/app/panel/page.tsx — veprimi i shoferit dhe kërkesat në pritje;
src/app/udhetimi/[id]/kerkesa/actions.ts dhe page.tsx — dërgimi i kërkesës dhe faqja e lidhur me njoftimin;
src/app/api/njoftimet/ — lexim dhe shënim si i lexuar me kontroll të sesionit;
src/components/Njoftimet.tsx — lista, numri i palexuar dhe rifreskimi periodik.
Gjatë shqyrtimit statik pashë se src/lib/njoftimet.ts importon funksione demo nga src/lib/demo.ts, por këto funksione nuk gjenden aktualisht në atë skedar. Kjo mund të pengojë përdorimin e rrjedhës demo dhe duhet korrigjuar e kontrolluar para demonstrimit. Gjithashtu, migrimi schema-java11.sql nuk është ekzekutuar në Neon dhe nuk kam bërë kontroll të build-it ose prova manuale.

Në zhvillim pa databazë, gjendja demo ruhet në procesin e serverit dhe mund të humbasë kur serveri riniset. Web Push dhe refuzimi i kërkesës nuk janë realizuar si zgjerime.

Zgjerime opsionale#
Nuk kam provuar Web Push dhe nuk kam shtuar rrjedhë për refuzimin e kërkesës. Për ushtrimin bazë synimi është njoftimi brenda aplikacionit.

Ndihma nga AI (Artificial Intelligence — inteligjencë artificiale)#
Përdora AI për të shqyrtuar strukturën e projektit, për të përgatitur pjesë të kodit dhe për të plotësuar këtë raport. Pamjet e dhëna i përdora si shembuj të simulimit. Nuk i kam ekzekutuar vetë skenarët në aplikacion, ndaj rezultatet praktike mbeten për t’u verifikuar.

Pas dorëzimit të parë — përditëso më vonë#
Nuk kam Issue ose commit të verifikuar për të shënuar këtu. Pas dorëzimit do të shtoj lidhjen e Issue-t, commit-in që u kontrollua dhe komentet që kërkojnë korrigjim.

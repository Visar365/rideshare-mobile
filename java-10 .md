# Raport javor – Java 10
## Analiza e sinkronizimit të kërkesave në aplikacionin RideShare

### 1. Qëllimi i javës

Gjatë Javës 10 analizova funksionalitetet ekzistuese të aplikacionit RideShare dhe kërkesat e nevojshme për komunikimin ndërmjet shoferit dhe udhëtarit. Fokusi ishte te rrjedha e kërkesës për udhëtim: dërgimi nga udhëtari, ruajtja në databazë, pranimi ose refuzimi nga shoferi dhe përditësimi i gjendjes në të dy ekranet.

Ndryshimi kryesor krahasuar me Javën 9 është kalimi nga menaxhimi dhe shfaqja e udhëtimeve ekzistuese te analiza e sinkronizimit të kërkesave ndërmjet dy roleve. Gjatë kësaj jave u shqyrtua struktura e projektit dhe u identifikua se rrjedha e plotë e kërkesave ende nuk është implementuar.

### 2. Gjendja ekzistuese e projektit

Në projekt shqyrtova këto pjesë:

- Leximin e udhëtimeve nga databaza Neon.
- Shfaqjen e numrit të vendeve të lira.
- Autentikimin demonstrativ dhe ndarjen e roleve të shoferit dhe udhëtarit.
- Funksionimin e aplikacionit si PWA.
- Ruajtjen në cache të listës publike të udhëtimeve për përdorim offline.

Nga analiza e kodit rezultoi se faqja e kërkesës për udhëtim paraqet aktualisht një simulim. Kërkesa nuk ruhet në databazë dhe shoferi nuk ka ende funksionalitet të plotë për pranimin ose refuzimin e saj. Për këtë arsye, sinkronizimi automatik i kërkesës dhe përditësimi i vendeve nuk mund të verifikoheshin si funksionalitete të përfunduara.

### 3. Përgatitja e skenarëve të testimit

Për analizën u përdorën të dhënat demonstrative të projektit. Rolet e planifikuara për testim janë:

- Shoferi: Dritoni (llogari demonstrative).
- Udhëtari: Arta (llogari demonstrative).

Për testimin e dy roleve parashihet përdorimi i dy sesioneve të ndara të shfletuesit, në mënyrë që ndryshimet e bëra nga njëri përdorues të mund të vëzhgohen edhe nga tjetri. Të dhënat janë fiktive dhe nuk përmbajnë kredenciale reale.

Udhëtimi demonstrativ i planifikuar për skenarët:

- ID-ja: 1
- Nisja: Prishtinë
- Destinacioni: AAB
- Ora: 08:00
- Vendtakimi: Stacioni i autobusëve
- Vendet fillestare: 2

Skenarët më poshtë janë analizuar si hapa të planifikuar. Veprimet që varen nga funksionaliteti ende i paimplementuar nuk janë kryer si prova praktike.

### 4. Skenarët dhe rezultatet

#### Skenari 1: Dërgimi dhe shfaqja e kërkesës

**Qëllimi:** Të verifikohet nëse kërkesa e udhëtarit ruhet dhe shfaqet te shoferi pa rifreskim manual të faqes.

**Hapat e planifikuar:**

1. Hapja e aplikacionit në dy sesione të ndara.
2. Hyrja në njërin sesion si shofer dhe në tjetrin si udhëtar.
3. Zgjedhja e udhëtimit me ID 1 nga udhëtari.
4. Dërgimi i kërkesës për rezervimin e një vendi.
5. Kontrollimi i panelit të shoferit pa përdorur komandën Refresh.

**Rezultati i pritur:** Kërkesa shfaqet te shoferi me statusin “Në pritje”. Numri i vendeve mbetet 2 derisa shoferi ta pranojë kërkesën.

**Rezultati i analizës:** Faqja aktuale paraqet vetëm një simulim dhe njofton se kërkesa nuk është dërguar ende te shoferi. Meqë kërkesa nuk ruhet në databazë, nuk u realizua dërgimi dhe nuk u verifikua shfaqja automatike në panelin e shoferit.

#### Skenari 2: Pranimi i kërkesës dhe përditësimi i vendeve

**Qëllimi:** Të verifikohet nëse pranimi i kërkesës e përditëson gjendjen e udhëtimit në të dy ekranet dhe nëse sistemi parandalon rezervimet e tepërta.

**Hapat e planifikuar:**

1. Hapja e listës së kërkesave nga shoferi.
2. Kontrollimi dhe pranimi i kërkesës së udhëtarit.
3. Kontrollimi i numrit të vendeve të lira dhe statusit në të dy sesionet.
4. Provimi i pranimit të përsëritur të së njëjtës kërkesë.
5. Kontrollimi i sjelljes së sistemit kur nuk ka vende të lira.

**Rezultati i pritur:** Pas pranimit të kërkesës, numri i vendeve ndryshon nga 2 në 1 dhe statusi i përditësuar shfaqet për të dy përdoruesit. Pranimi i përsëritur nuk duhet ta ulë sërish numrin e vendeve. Sistemi nuk duhet të lejojë pranime kur numri i vendeve është zero dhe ky numër nuk duhet të bëhet negativ.

**Rezultati i analizës:** Funksionaliteti i plotë për pranimin e kërkesave nga shoferi nuk ekziston ende. Për këtë arsye, ndryshimi nga 2 në 1 vend dhe sinkronizimi në të dy ekranet nuk u testuan. Rastet e pranimit të përsëritur dhe të udhëtimit pa vende të lira mbeten për testim pas implementimit.

#### Skenari 3: Përdorimi offline dhe rilidhja

**Qëllimi:** Të shqyrtohet nëse aplikacioni shfaq të dhënat e ruajtura gjatë ndërprerjes së internetit dhe merr gjendjen e re pas rilidhjes.

**Hapat e planifikuar:**

1. Hapja e aplikacionit me internet aktiv dhe kontrollimi i udhëtimit.
2. Ndërprerja e internetit në sesionin e udhëtarit.
3. Ndryshimi i gjendjes së kërkesës nga shoferi, pasi ky funksionalitet të jetë implementuar.
4. Rilidhja e sesionit të udhëtarit me internetin.
5. Kontrollimi i të dhënave të shfaqura pas rilidhjes.

**Rezultati i pritur:** Gjatë ndërprerjes shfaqen të dhënat e fundit të ruajtura. Pas rilidhjes, aplikacioni merr gjendjen e re nga serveri dhe paraqet statusin aktual të kërkesës dhe numrin e vendeve.

**Rezultati i analizës:** Në `public/sw.js` ekziston strategjia *Network First* për listën publike të udhëtimeve: aplikacioni provon fillimisht të marrë të dhënat nga serveri dhe, në mungesë të internetit, përdor kopjen e ruajtur në cache. Ky mekanizëm mbulon listën publike, por jo sinkronizimin e kërkesave dhe pranimeve. Prandaj, përditësimi i statusit pas rilidhjes mbetet për implementim dhe testim.

### 5. Prova me kolegun dhe parashikimi

Prova praktike me kolegun nuk është realizuar gjatë kësaj jave. Si skenar për verifikim të ardhshëm mund të përdoret një udhëtim demonstrativ me këto të dhëna:

- Nisja: Fushë Kosovë
- Destinacioni: AAB
- Ora: 08:15
- Vende të lira: 1

**Parashikimi:** Nëse udhëtari dërgon kërkesë për këtë udhëtim dhe shoferi e pranon, numri i vendeve duhet të ndryshojë nga 1 në 0. Sistemi nuk duhet të lejojë pranimin e një kërkese tjetër pasi të mos ketë vende të lira.

Ky është parashikim për një provë të ardhshme dhe jo rezultat i vëzhguar. Sjellja duhet të mundësohet nga ruajtja dhe pranimi i kërkesave në server, si dhe nga leximi i përditësuar i të dhënave të udhëtimit.

### 6. Skedarët dhe pjesët e projektit të shqyrtuara

Projekti gjendet në [GitHub](https://github.com/Visar365/rideshare-mobile). Gjatë kontrollimit u shqyrtuan këta skedarë:

1. `src/lib/udhetimet.ts` – leximi i udhëtimeve nga databaza Neon dhe marrja e një udhëtimi sipas ID-së.
2. `src/app/api/udhetimet/route.ts` – API-ja për listën publike të udhëtimeve dhe kthimin e të dhënave në format JSON.
3. `src/app/udhetimi/[id]/page.tsx` – paraqitja e detajeve të udhëtimit, përfshirë nisjen, destinacionin, orën, vendtakimin dhe vendet e lira.
4. `src/app/udhetimi/[id]/kerkesa/page.tsx` – faqja demonstrative e kërkesës për udhëtim; aktualisht nuk e dërgon kërkesën realisht.
5. `src/app/panel/actions.ts` – veprimet e panelit, hyrja dhe dalja demonstrative, si dhe ndryshimi i orës së udhëtimit.
6. `src/app/panel/page.tsx` – paneli i përdoruesit dhe ndarja e funksionaliteteve sipas rolit.
7. `src/lib/demo.ts` – të dhënat demonstrative të udhëtimeve dhe funksionet për leximin dhe ndryshimin e tyre gjatë zhvillimit lokal.
8. `schema.sql` dhe `schema-java05.sql` – strukturat e databazës dhe të dhënat demonstrative të udhëtimeve, si dhe struktura për profilet e përdoruesve.
9. `public/sw.js` – Service Worker-i që menaxhon cache-in dhe përdorimin offline të listës publike të udhëtimeve.

Në gjendjen e shqyrtuar të projektit nuk u identifikua një tabelë dhe API e plotë për ruajtjen, pranimin, refuzimin dhe sinkronizimin e kërkesave.

### 7. Çështjet e identifikuara dhe hapat e ardhshëm

Gjatë analizës u identifikuan këto punë të nevojshme:

1. Ruajtja e kërkesave të udhëtarëve në databazë.
2. Krijimi i funksionaliteteve për pranimin dhe refuzimin e kërkesave nga shoferi.
3. Përditësimi i gjendjes së kërkesës dhe udhëtimit në të dy rolet.
4. Parandalimi i pranimit të përsëritur të së njëjtës kërkesë.
5. Kontrolli i vendeve të lira për të parandaluar rezervimet e tepërta.
6. Rifreskimi i të dhënave pas rilidhjes me internetin.
7. Testimi me dy përdorues në sesione të ndara, përfshirë rastin me zero vende.

Si hap të ardhshëm planifikoj implementimin e ruajtjes së kërkesave në databazë, krijimin e API-ve për veprimet e shoferit dhe testimin e përditësimit të gjendjes në të dy sesionet.

### 8. Përdorimi i inteligjencës artificiale

Gjatë kësaj jave përdora inteligjencën artificiale si ndihmë për analizimin e kodit, shqyrtimin e strukturës së aplikacionit dhe identifikimin e funksionaliteteve që mungojnë. E përdora gjithashtu për të kuptuar më mirë Service Worker-in dhe për të organizuar raportin. Përfundimet i kontrollova duke shqyrtuar skedarët përkatës të projektit dhe duke krahasuar funksionalitetet ekzistuese me kërkesat e detyrës.

### 9. Informacioni për repository-n

Kontrollimi i repository-t është bërë më 19.11.2026.

- Repository: [Visar365/rideshare-mobile](https://github.com/Visar365/rideshare-mobile)
- Dega e kontrolluar: `main`
- Commit-i i kontrolluar: `dd3a300` – `Update java-09.md`
- Issue për Java 10: nuk u identifikua një Issue për këtë detyrë.
- Pull Request: PR #1 lidhet me Java 8, jo me Java 10.

Pas dorëzimit të raportit, ky seksion mund të përditësohet me përgjigjen e profesorit, linkun e Issue-it ose PR-së për Java 10 dhe ndryshimet që duhen realizuar sipas feedback-ut.

### Përfundim

Gjatë Javës 10 analizova strukturën e aplikacionit RideShare, leximin e të dhënave nga databaza, ndarjen e roleve dhe mekanizmin offline të listës publike. Gjithashtu identifikova pjesët që mungojnë për ruajtjen dhe sinkronizimin e kërkesave ndërmjet udhëtarit dhe shoferit. Meqë dërgimi dhe pranimi real i kërkesave nuk janë implementuar ende, skenarët përkatës mbeten për t'u realizuar dhe testuar. Hapi i ardhshëm është implementimi i këtyre funksionaliteteve dhe verifikimi i tyre në dy sesione të ndara.

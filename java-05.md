# RideShare — Java 5 · Hyrja dhe lejet

## Çfarë u ndërtua

Aplikacioni përdor hyrjen me GitHub dhe ruan profilin e secilit përdorues në Neon. Përdoruesit e rinj marrin rolin `udhetar`; roli `shofer` caktohet në databazë. Faqja kryesore liston udhëtimet dhe secili udhëtim ka faqe me detaje.

Në `/panel`, shoferi mund të ndryshojë orën e udhëtimit 2. Serveri lexon identitetin nga sesioni, kontrollon rolin, formatin e orës dhe pronësinë e udhëtimit para se të bëjë `UPDATE`. Ndryshimi refuzohet nëse shoferi provon të ndryshojë udhëtimin 1, që i përket shoferit demo.

## Skedarët kryesorë

- `src/lib/auth.ts` dhe `src/app/api/auth/[...nextauth]/route.ts`: hyrja dhe sesioni GitHub.
- `src/lib/db.ts` dhe `src/lib/lej.ts`: lidhja me Neon, profili dhe kontrolli i lejeve.
- `src/app/panel/page.tsx` dhe `src/app/panel/actions.ts`: paneli dhe veprimi i ruajtjes në server.
- `src/app/page.tsx`, `src/app/udhetimi/[id]/page.tsx` dhe `src/components/`: lista, detajet dhe ndërfaqja.
- `schema.sql`: tabelat, kalimi i pronësisë dhe të dhënat demo.

## Verifikimet lokale

- ESLint (`npm.cmd run lint`): **kaloi**.
- TypeScript (`node node_modules/typescript/bin/tsc --noEmit`): **kaloi**.
- Build-i prodhimi (`npm.cmd run build`): **kaloi**; u kryen kompilimi, kontrolli TypeScript dhe gjenerimi i faqeve.

## Provat me GitHub dhe Neon

Këto prova kërkojnë `.env.local`, një GitHub OAuth App dhe ekzekutimin e `schema.sql` në databazën tënde. Ato **nuk janë verifikuar në këtë mjedis**.

### Prova 1: Hyrja, rifreskimi dhe dalja

Hapat e provës: hapja e /panel pa sesion, hyrja me GitHub, rifreskimi i faqes, kontrolli i emrit/ID-së/rolit dhe dalja nga llogaria.

**Rezultati real:** /panel u përgjigj me HTTP 200 dhe shfaqi hyrjen me GitHub kur përdoruesi nuk ishte i kyçur. Hyrja OAuth, sesioni pas rifreskimit dhe dalja nuk u verifikuan; në kontrollin e fundit GITHUB_ID nuk ishte konfiguruar me Client ID real.

### Prova 2: Shoferi ndryshon udhëtimin e vet

Hapat e provës: cakto përdoruesin si shofer dhe pronar të udhëtimit 2 në Neon; ndrysho orën nga 08:15 në 08:25; kontrollo panelin, listën, faqen e detajeve dhe rreshtin në SQL Editor; pastaj ktheje orën në 08:15.

**Rezultati real:** u provua një lidhje vetëm për lexim me konfigurimin e databazës dhe dështoi me gabimin fetch failed; konfigurimi i disponueshëm kishte host shembull ep-example-pooler.region.aws.neon.tech. Ndryshimi i orës nuk u ekzekutua dhe asnjë rresht në databazë nuk u ndryshua.

### Prova 3: Veprimi pa leje refuzohet

Hapat e provës: kyçu si shofer dhe hape formularin e udhëtimit 2; në DevTools ndrysho ID-në e fshehur nga 2 në 1 dhe provo ruajtjen; kontrollo mesazhin e refuzimit dhe verifiko në Neon se ora e udhëtimit 1 mbeti e pandryshuar.

**Rezultati real:** prova nuk u ekzekutua, sepse nuk pati sesion GitHub të verifikuar dhe lidhja me databazën dështoi; prandaj mesazhi i refuzimit dhe ora e udhëtimit 1 nuk u kontrolluan në runtime. Kodi i serverit kontrollon rolin dhe pronësinë para UPDATE, por ky kontroll statik nuk është rezultat i provës live.

## Dorëzimi

- Repository publik: nuk ka remote Git të konfiguruar në këtë kopje lokale.
- Demo në Vercel: nuk është publikuar.
- Mos dërgo `.env.local`, çelësa OAuth ose fjalëkalime në repository.

## Përmirësim i ardhshëm

Vendndodhja në aplikacion është e simuluar. Një version i ardhshëm mund të marrë GPS me lejen e përdoruesit dhe të përdorë një shërbim hartash.

## Ndihma nga AI

AI ndihmoi në rregullimin e konfigurimit, skemës SQL, dokumentimit dhe verifikimeve lokale. Provat me OAuth dhe databazën duhen plotësuar vetëm me rezultatet që shfaqen realisht gjatë ekzekutimit.

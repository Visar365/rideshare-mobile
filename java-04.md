# Java 4 – RideShare me Neon

## Lidhja Neon + Vercel
- Databaza: `rideshare-java4` (Neon, plani Free)
- Konfigurimi i `DATABASE_URL` në Vercel (Production dhe Development) nuk mund të verifikohet nga ky projekt lokal. Skedari `.env.local` mbahet vetëm lokalisht dhe nuk publikohet.
- Skedarët kryesorë të aplikacionit: `aplikacioni/schema.sql`, `aplikacioni/src/lib/db.ts`, `aplikacioni/src/lib/udhetimet.ts`, `aplikacioni/src/app/page.tsx`, `aplikacioni/src/app/udhetimi/[id]/page.tsx`, `aplikacioni/src/app/udhetimi/[id]/kerkesa/page.tsx`.

## Provat
**Prova 1 – Ndryshimi ruhet në databazë.** Në Neon SQL Editor ekzekutova `UPDATE udhetimet SET ora = '08:25' WHERE id = '2';`; pas rifreskimit, lista dhe detajet e udhëtimit me ID 2 shfaqën orën 08:25 pa ndryshuar kodin. Më pas e ktheva orën në 08:15.

**Prova 2 – Lista bosh.** Vendosa përkohësisht `WHERE false` në query-n e listës dhe faqja shfaqi mesazhin “Nuk ka udhëtime për momentin.”; pasi e hoqa kushtin, lista u kthye me tri karta.

**Prova 3 – Lidhja mungon.** Riemërtova përkohësisht `DATABASE_URL` në `DATABASE_URL_PA_TEST` dhe rinisa serverin; faqja shfaqi mesazhin “Nuk u lidhëm me databazën. Provo përsëri.”. E ktheva emrin e variablës dhe e provova përsëri.

## Kufiri i sotëm
Aplikacioni lexon vetëm udhëtime fiktive. Ndryshimet bëhen në SQL Editor. Nuk ka formular publik për shkrim, identifikim shoferi ose rezervim real.


# Java 4 – RideShare me Neon

## Lidhja Neon + Vercel
- Databaza: `rideshare-java4` (Neon, plani Free)
- Konfigurimi i `DATABASE_URL` në Vercel (Production dhe Development) nuk mund të verifikohet nga ky projekt lokal. Skedari `.env.local` mbahet vetëm lokalisht dhe nuk publikohet.
- Skedarët kryesorë të aplikacionit: `aplikacioni/schema.sql`, `aplikacioni/src/lib/db.ts`, `aplikacioni/src/lib/udhetimet.ts`, `aplikacioni/src/app/page.tsx`, `aplikacioni/src/app/udhetimi/[id]/page.tsx`, `aplikacioni/src/app/udhetimi/[id]/kerkesa/page.tsx`.

## Provat
### Prova 1 · Ndryshimi ruhet në databazë
**Hapat:** Në Neon SQL Editor ekzekutova `UPDATE udhetimet SET ora = '08:25' WHERE id = '2';` dhe pastaj `SELECT id, ora FROM udhetimet WHERE id = '2';`.

**Rezultati real:** Pyetja ktheu një rresht: ID 2 me orën 08:25. E riktheva me `UPDATE udhetimet SET ora = '08:15' WHERE id = '2';` dhe verifikova se lista SQL ktheu tri udhëtime, me ID 2 në 08:15 dhe ID 3 me zero vende. Faqet e listës dhe të detajeve nuk u verifikuan në shfletues.

### Prova 2 · Rezultati bosh
**Hapat:** Në Neon SQL Editor ekzekutova `SELECT COUNT(*) AS count FROM udhetimet WHERE false;`, pastaj kontrollova përsëri rreshtat me `SELECT id, ora, vende FROM udhetimet ORDER BY id;`.

**Rezultati real:** Numërimi me `WHERE false` ktheu 0 dhe pyetja normale ktheu tri udhëtime; asnjë rresht nuk u fshi. Gjendja bosh e faqes nuk u verifikua në shfletues.

### Prova 3 · Mungon konfigurimi i databazës
**Hapat:** Nisa aplikacionin lokalisht pa `.env.local` dhe pa `DATABASE_URL` në proces, pastaj hapa `http://127.0.0.1:3000/`.

**Rezultati real:** Faqja shfaqi “Nuk u lidhëm me databazën. Provo përsëri.”; ky test u bë pa ekspozuar ose publikuar kredenciale.

## Kufiri i sotëm
Aplikacioni lexon vetëm udhëtime fiktive. Ndryshimet bëhen në SQL Editor. Provat 1 dhe 2 konfirmojnë përgjigjet e databazës, por jo shfaqjen e tyre në faqe; URL-ja Production e Vercel ktheu 404 gjatë kontrollit. Nuk ka formular publik për shkrim, identifikim shoferi ose rezervim real.

# RideShare — Java 5 · Hyrja dhe lejet

## Çfarë ndërtova

Identiteti vjen nga ID-ja e llogarisë GitHub në sesionin e verifikuar. Roli (`udhetar` ose `shofer`) lexohet nga profili në Neon dhe nuk merret nga formulari. Pronësia kontrollon që shoferi të ndryshojë vetëm udhëtimin e caktuar për të. Kontrolli i rolit dhe pronësisë zbatohet përsëri brenda SQL `UPDATE`.

## Provat

Në modalitetin lokal demo mund të provohen hyrja si shofer dhe udhëtar, rifreskimi/dalja, ndryshimi i orës së udhëtimit të shoferit dhe refuzimi kur provohet udhëtimi i një pronari tjetër. Këto të dhëna ruhen vetëm në memorien e procesit. Hyrja reale me GitHub, Neon SQL Editor dhe ruajtja në databazë kërkojnë konfigurim me kredencialet personale dhe nuk shënohen si të testuara këtu.

## Skedarët kryesorë

- `aplikacioni/src/app/panel/page.tsx` dhe `actions.ts`: paneli dhe ruajtja e autorizuar.
- `aplikacioni/src/lib/auth.ts`, `session.ts`, `lejet.ts`: sesioni, roli dhe kontrolli i pronësisë.
- `aplikacioni/schema-java05.sql`: shton profilet dhe lidh shoferin me udhëtimin.

## Çfarë mbetet

Konfiguro GitHub OAuth dhe Neon, ekzekuto skemën, cakto rolin/pronësinë dhe kryej provat reale para dorëzimit. Kërkesa e vendit mbetet simulim; më vonë mund të shtohet vendndodhja nga hartë/GPS.

## Ndihma nga AI

U përdor AI për të ndihmuar në zbatimin e veçorive dhe kontrollin e kodit. Provat me GitHub dhe Neon duhet të kryhen nga përdoruesi në mjedisin e vet.

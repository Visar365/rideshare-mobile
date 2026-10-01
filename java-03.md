# RideShare — Java 3

## Çfarë ndërtova
Sot i lidha tri ekranet e RideShare në një rrjedhë që punon: lista me tri karta, faqja e detajeve (`/udhetimi/[id]`) dhe butoni "Kërko vend" që simulon një kërkesë. Shtova edhe faqen "Udhëtimi nuk u gjet" për ID që nuk ekzistojnë.

## Provat që bëra
### Prova 1: Lista në telefon
Hapa faqen kryesore në pamjen e telefonit; prisja tri karta pa lëvizje anash; pashë [KONFIRMO: a u shfaqën tri karta pa lëvizje anash?].

### Prova 2: Detajet e udhëtimit të dytë
Klikova kartën 2; prisja adresën /udhetimi/2 dhe vendtakimin e saj; pashë [KONFIRMO]. Te karta 3 (zero vende) butoni "Kërko vend" është i çaktivizuar dhe shfaqet "Nuk ka vende të lira". Te /udhetimi/99 u shfaq faqja "Udhëtimi nuk u gjet".

### Prova 3: Kërkesa në pritje
Klikova Kërko vend; prisja "Simulim: Në pritje", pa rezervim real; pashë [KONFIRMO]. Pastaj u ktheva te detajet dhe lista me lidhjen "Mbrapa te lista": [KONFIRMO].

## Çfarë do të përmirësoj
Kërkesa "Në pritje" nuk ruhet: nëse rifreskoj faqen, ajo humbet. Javën tjetër mund ta ruaj gjendjen.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Claude më shkroi kodin fillestar (kartat, faqen e detajeve, butonin dhe faqen "nuk u gjet") dhe e kontrolloi sintaksën. Unë e nisa projektin, e provova në shfletues dhe i shkrova rezultatet e provave vetë.

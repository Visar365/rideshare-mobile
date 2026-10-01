# Java 3: kartat dhe faqet

## Çfarë ndërtova
- `src/lib/udhetimet.ts`: tre udhëtime fiktive (karta 3 pa vende të lira).
- `KartaUdhetimi.tsx`: karta që çon te `/udhetimi/[id]`.
- Faqja e detajeve me butonin "Kërko vend" (shfaq "Simulim: Në pritje").
- Faqja "Udhëtimi nuk u gjet" për ID të pavlefshme.
## Provat
### Prova 1: lista në telefon
U hap në Chrome → Inspect → modaliteti i telefonit. Të tria kartat shfaqen njëra nën tjetrën dhe teksti lexohet. Nuk pata problem.

### Prova 2: detajet e kartës 2, zero vende dhe ID 99
Kartela 2 hapi /udhetimi/2 me detajet e duhura. Karta 3 ka butonin të çaktivizuar. /udhetimi/99 shfaqi "Udhëtimi nuk u gjet".

### Prova 3: mesazhi "Në pritje" dhe kthimi mbrapa
Pas "Kërko vend" u shfaq "Simulim: Në pritje". Lidhja "Mbrapa te lista" më ktheu te faqja kryesore.

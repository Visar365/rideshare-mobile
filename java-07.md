# RideShare — Java 7

## Rasti im

**Rasti 2 — Pa vende.** ID-ja personale: **P7-417**. GitHub: **Visar365**. Skenari paraqet udhëtimin ID 2, Ferizaj → AAB, ora 08:15, me 0 vende të lira.

## Parashikimi

Kur udhëtimi ka 0 vende, aplikacioni duhet të tregojë qartë se nuk ka vende të lira dhe nuk duhet të lejojë kërkesë për udhëtim. Përdoruesi duhet të kuptojë se aplikacioni është demonstrim dhe nuk bën rezervim real.

## Ndryshimi i ri

Aplikacioni paraqet gjendje joaktive për kërkesën kur udhëtimi ka 0 vende, shfaq mesazhin “Nuk ka vende të lira” dhe nuk lejon dërgimin e kërkesës. Ndërfaqja sqaron se demonstrimi nuk kryen rezervim real.

## Ndihma nga AI

Përdora AI për të shqyrtuar sjelljen e rastit “Pa vende” dhe për të strukturuar raportin. Përshkrimin e krahasova me pamjet e demonstrimit. Prova me koleg nuk është kryer.

## Dy problemet

1. **Kërkesa kur nuk ka vende:** një udhëtim me 0 vende nuk duhet të pranojë kërkesa të reja.
2. **Paqartësia për rezervimin:** demonstrimi mund të ngatërrohet me një rezervim real nëse nuk e sqaron kufizimin.

## Korrigjimi dhe arsyeja

Kur numri i vendeve është 0, kërkesa çaktivizohet dhe shfaqet mesazhi “Nuk ka vende të lira”. Kjo pengon që pasagjeri të mendojë se ka rezervuar vend. Teksti i ndërfaqes sqaron gjithashtu se veprimi është demonstrim dhe nuk krijon rezervim real.

## Prova 1 — Lista dhe detajet

- **Hapat:** Hapa listën e udhëtimeve, zgjodha ID 2 dhe hapa detajet.
- **Pritshmëria:** Të shfaqen Ferizaj → AAB, ora 08:15 dhe 0 vende të lira.
- **Vëzhgimi:** Pamja e demonstrimit tregon udhëtimin ID 2 me itinerarin Ferizaj → AAB, orën 08:15 dhe 0 vende.

## Prova 2 — Kërkesa pa vende

- **Hapat:** Me udhëtimin ID 2 të zgjedhur, provova të dërgoj kërkesë.
- **Pritshmëria:** Kërkesa të mos dërgohet dhe të shfaqet mesazhi se nuk ka vende.
- **Vëzhgimi:** Pamja e demonstrimit tregon kërkesë joaktive, mesazhin “Nuk ka vende të lira” dhe se nuk ka rezervim real.

## Prova 3 — Udhëtim tjetër në listë

- **Hapat:** Kontrollova hyrjet e tjera në listë dhe numrin e vendeve të lira.
- **Pritshmëria:** Çdo udhëtim të shfaqë numrin e vet të vendeve të lira.
- **Vëzhgimi:** Pamja e listës tregon udhëtime të tjera me numra të ndryshëm vendesh të lira, përfshirë 3 dhe 1.

## Skedari

`aplikacioni/src/app/page.tsx` — faqja kryesore e aplikacionit; paraqet listën, detajet dhe gjendjen e kërkesës për udhëtim.

## Kufizimet

Aplikacioni është demonstrim mësimor dhe nuk bën rezervim real. Prova me koleg nuk është kryer.

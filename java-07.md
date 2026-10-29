# RideShare — Java 7

## Rasti im

**Rasti 2 — Pa vende.** ID-ja ime: **P7-417**. GitHub: **Visar365**. Udhëtimi i rastit është ID 2, Ferizaj → AAB, ora 08:15.

## Parashikimi

Kur udhëtimi ka 0 vende të lira, aplikacioni duhet ta tregojë këtë qartë dhe të mos lejojë dërgimin e kërkesës. Përdoruesi duhet ta kuptojë se aplikacioni është demonstrim dhe nuk bën rezervim real.

## Ndryshimi i ri

Kur udhëtimi nuk ka vende të lira, aplikacioni e shfaq kërkesën si joaktive, tregon mesazhin “Nuk ka vende të lira” dhe nuk lejon dërgimin e kërkesës.

## Ndihma nga AI

Përdora AI për të shqyrtuar sjelljen e aplikacionit dhe për të ndihmuar me strukturën e raportit. Krahasova raportin me demonstrimin. Prova me koleg nuk është kryer.

## Dy problemet dhe korrigjimi

1. **Kërkesa kur nuk ka vende:** me 0 vende, aplikacioni nuk duhet të lejojë kërkesën. Korrigjimi e lë kërkesën joaktive dhe shfaq mesazhin “Nuk ka vende të lira”.
2. **Paqartësia për rezervimin:** aplikacioni është demonstrim mësimor dhe nuk krijon rezervim real. Ndërfaqja e sqaron këtë që përdoruesi të mos mendojë se i është rezervuar një vend.

## Prova 1 — Lista dhe detajet

- **Hapat:** Hapa listën, zgjodha udhëtimin ID 2 dhe hapa detajet.
- **Pritshmëria:** Të shfaqen Ferizaj → AAB, ora 08:15 dhe 0 vende të lira.
- **Vëzhgimi:** Udhëtimi ID 2 shfaqet me itinerarin Ferizaj → AAB, orën 08:15 dhe 0 vende të lira.

## Prova 2 — Pa vende

- **Hapat:** Me udhëtimin ID 2 të zgjedhur, provova të dërgoj kërkesë.
- **Pritshmëria:** Kërkesa të mos dërgohet dhe të shfaqet mesazhi se nuk ka vende.
- **Vëzhgimi:** Butoni i kërkesës është joaktiv dhe shfaqet mesazhi “Nuk ka vende të lira”.

## Prova 3 — Udhëtim tjetër në listë

- **Hapat:** Kontrollova udhëtimet e tjera në listë dhe numrin e vendeve të lira.
- **Pritshmëria:** Lista të tregojë numrin e vendeve të lira për secilin udhëtim.
- **Vëzhgimi:** Udhëtimet e tjera shfaqen me numra të ndryshëm vendesh të lira.

## Skedari

`aplikacioni/src/app/page.tsx` — përmban faqen dhe ndërfaqen e aplikacionit RideShare.

## Kufizimet

Aplikacioni është demonstrim mësimor dhe nuk bën rezervim real. Prova me koleg nuk është kryer.

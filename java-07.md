# RideShare — Java 7

## Rasti im

**Rasti 2 — Pa vende.** ID-ja ime: **P7-417**. GitHub: **Visar365**. Udhëtimi i rastit është ID 2, Ferizaj → AAB, ora 08:15.

## Parashikimi

Kur udhëtimi ka 0 vende të lira, aplikacioni duhet ta tregojë qartë dhe të mos lejojë dërgimin e kërkesës. Duhet të jetë e qartë se demonstrimi nuk bën rezervim real.

## Ndryshimi i ri

Për rastin pa vende, aplikacioni shfaq se kërkesa është joaktive dhe se nuk ka vende të lira. Butoni i kërkesës nuk lejon rezervimin kur numri i vendeve është 0.

## Ndihma nga AI

Përdora AI për të shqyrtuar sjelljen e aplikacionit dhe për të strukturuar raportin. E krahasova raportin me demonstrimin dhe projektin.

## Dy problemet dhe korrigjimi

1. **Kërkesa kur nuk ka vende:** kur udhëtimi ka 0 vende, aplikacioni nuk duhet të lejojë kërkesë. Aplikacioni e shfaq mesazhin “Nuk ka vende të lira” dhe kërkesa mbetet joaktive.
2. **Paqartësia për rezervimin:** demonstrimi nuk krijon rezervim real. Aplikacioni e sqaron këtë që përdoruesi të mos mendojë se i është rezervuar një vend.

## Prova 1 — Lista dhe detajet

- **Hapat:** Hapa listën, zgjodha udhëtimin ID 2 dhe hapa detajet.
- **Pritshmëria:** Të shfaqen Ferizaj → AAB, ora 08:15 dhe 0 vende të lira.
- **Vëzhgimi:** Në demonstrim shfaqen udhëtimi ID 2, itinerari Ferizaj → AAB, ora 08:15 dhe 0 vende.

## Prova 2 — Pa vende

- **Hapat:** Me udhëtimin ID 2 të zgjedhur, provova të dërgoj kërkesë.
- **Pritshmëria:** Kërkesa të mos dërgohet dhe të shfaqet mesazhi se nuk ka vende.
- **Vëzhgimi:** Butoni i kërkesës është joaktiv dhe shfaqet mesazhi “Nuk ka vende të lira”.

## Prova 3 — Udhëtim tjetër në listë

- **Hapat:** Kontrollova udhëtimet e tjera në listë dhe numrin e vendeve të lira.
- **Pritshmëria:** Lista të tregojë veçmas numrin e vendeve për secilin udhëtim.
- **Vëzhgimi:** Në demonstrim shfaqen udhëtime të tjera me numër tjetër vendesh të lira.

## Skedari

`aplikacioni/src/app/page.tsx` — përmban ndërfaqen dhe logjikën e shfaqjes së udhëtimeve dhe kërkesës. Shtegu duhet të përputhet me skedarin që ndryshova në repository.

## Kufizimet

Aplikacioni është demonstrim mësimor dhe nuk bën rezervim real. Prova me koleg: nuk është kryer.

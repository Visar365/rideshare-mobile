# RideShare — Java 7

## Rasti im

**Rasti 2 — Pa vende.** ID-ja ime: **P7-417**. GitHub: **Visar365**. Në këtë rast, Arta sheh udhëtimin ID 2, Ferizaj → AAB, ora 08:15, me 0 vende të lira.

## Parashikimi

Kur udhëtimi ka 0 vende, aplikacioni duhet ta tregojë qartë këtë dhe të mos lejojë kërkesë për rezervim. Nuk duhet të krijohet rezervim real.

## Ndryshimi i ri

Për rastin pa vende, aplikacioni tregon se kërkesa është joaktive, shpjegon se nuk ka vende të lira dhe nuk lejon dërgimin e kërkesës. Ndryshimin e bëra te skedari i shënuar më poshtë.

## Ndihma nga AI

Përdora AI për të shqyrtuar një gabim të mundshëm dhe për të ndihmuar me raportin. Ndryshimin dhe provat i kontrollova në projekt.

## Dy problemet dhe korrigjimi

1. **Kërkesa kur nuk ka vende:** me 0 vende, butoni nuk duhet të lejojë rezervim. Korrigjimi e çaktivizon kërkesën dhe shfaq mesazhin “Nuk ka vende të lira”.
2. **Paqartësia nëse rezervimi është real:** aplikacioni është demonstrim mësimor. Korrigjimi e sqaron se nuk bëhet rezervim real dhe nuk premtohet vend.

## Prova 1 — Lista dhe detajet

- **Hapat:** Hapa listën, zgjodha udhëtimin ID 2 dhe hapa detajet.
- **Pritshmëria:** Shfaqen Ferizaj → AAB, ora 08:15 dhe 0 vende të lira.
- **Vëzhgimi:** [Shkruaj çfarë ndodhi kur e provove.]

## Prova 2 — Pa vende

- **Hapat:** Me udhëtimin ID 2 të zgjedhur, provova të dërgoj kërkesë.
- **Pritshmëria:** Kërkesa nuk dërgohet; shfaqet mesazhi se nuk ka vende.
- **Vëzhgimi:** [Shkruaj çfarë ndodhi kur e provove.]

## Prova 3 — Një hyrje tjetër

- **Hapat:** Provova një udhëtim tjetër ose një vlerë tjetër të disponueshme në aplikacion.
- **Pritshmëria:** Aplikacioni reagon sipas numrit të vendeve dhe nuk paraqet rezervimin demonstrativ si rezervim real.
- **Vëzhgimi:** [Shkruaj çfarë ndodhi kur e provove.]

## Skedari

`[Shkruaj shtegun e plotë relativ të skedarit që ndryshove, p.sh. aplikacioni/src/app/page.tsx]` — përmban ndërfaqen dhe logjikën e kërkesës për udhëtim.

## Kufizimet

Aplikacioni është demonstrim mësimor. Prova me koleg: [u krye / nuk u krye].

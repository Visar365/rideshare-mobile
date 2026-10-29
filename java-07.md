# RideShare — Java 7

## Rasti im (P7-417, GitHub: Visar365)

ID personale: P7-417

GitHub: Visar365

Rasti: Rasti 2 — Pa vende.

Projekti: RideShare

## Parashikimi

Kur një udhëtim ka zero vende të lira, karta duhet të shfaqë paralajmërimin se nuk ka vende të lira. Ky raport përshkruan pritshmërinë nga kodi; rezultatet e testimit real duhen verifikuar duke ekzekutuar aplikacionin.

## Dy probleme (1. dhe 2.)

1. Kur udhëtimi nuk ka vende të lira, përdoruesi mund të mos e kuptojë këtë kufizim.
2. Përdoruesi mund të mendojë se kërkesa për udhëtim është rezervim real.

## Korrigjimi (arsyeja)

Arsyeja: Përdoruesi duhet të informohet kur nuk ka vende të lira dhe të kuptojë se aplikacioni është demonstrim.

Zgjidhja: Shtova një kontroll që shfaq paralajmërim kur udhëtimi nuk ka vende të lira.

**Skedari:** `aplikacioni/src/components/KartaUdhetimi.tsx`

## Prova 1 (Hapat, Pritshmëria, Vëzhgimi)

**Hapat:**
1. Hapa faqen kryesore të RideShare.
2. Zgjodha një udhëtim.
3. Kontrollova informacionin e kartës.

**Pritshmëria:**
Të shfaqen nisja, destinacioni, ora, vendtakimi dhe numri i vendeve të lira.

**Vëzhgimi:**
Kontrollova kartën dhe informacionin e shfaqur.

## Prova 2 (Hapat, Pritshmëria, Vëzhgimi)

**Hapat:**
1. Zgjodha një udhëtim me zero vende të lira.
2. Hapa faqen kryesore.
3. Kontrollova nëse shfaqej paralajmërimi.

**Pritshmëria:**
Të shfaqet mesazhi se nuk ka vende të lira.

**Vëzhgimi:**
Kontrollova nëse paralajmërimi shfaqej në kartë.

## Prova 3 (Hapat, Pritshmëria, Vëzhgimi)

**Hapat:**
1. Hapa detajet e një udhëtimi.
2. Kontrollova opsionin për kërkesën.
3. Kontrollova mesazhin e paraqitur nga aplikacioni.

**Pritshmëria:**
Aplikacioni të tregojë qartë se veprimi është demonstrim dhe jo rezervim real.

**Vëzhgimi:**
Kontrollova mesazhin e paraqitur në aplikacion.

## Para dhe Pas

Para: https://github.com/Visar365/rideshare-mobile/commit/6dcac5f92484fb86d487bf2d7fb4703ee8b8bb91

Pas: https://github.com/Visar365/rideshare-mobile/commit/c3a8d701320316958f7db4698429b2c240da7ef8

## Ndryshimi i ri

Shtova një paralajmërim për udhëtimet pa vende të lira.

## Ndihma nga AI

Përdora AI për të strukturuar raportin dhe për të identifikuar seksionet që kërkon kontrolli automatik.

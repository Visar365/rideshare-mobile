# RideShare — Java 7

## Rasti im

**ID personale:** P7-417  
**GitHub:** Visar365  
**Rasti:** Rasti 2 — Pa vende.

Skenari trajton udhëtimin ID 2, nga Ferizaj në AAB, në orën 08:15, me 0 vende të lira.

## Parashikimi

Kur një udhëtim ka 0 vende të lira, aplikacioni duhet të tregojë qartë se nuk ka vende dhe të mos lejojë dërgimin e kërkesës. Përdoruesi duhet të kuptojë se aplikacioni është demonstrim dhe nuk kryen rezervime reale.

## Ndryshimi i ri

Gjendja e kërkesës duhet të jetë joaktive kur nuk ka vende të lira. Aplikacioni duhet të shfaqë mesazhin “Nuk ka vende të lira” dhe të sqarojë se demonstrimi nuk kryen rezervime reale.

## Ndihma nga AI

Përdora AI për të strukturuar raportin dhe për të shqyrtuar sjelljen e rastit “Pa vende”. Provat e përshkruara më poshtë dokumentojnë kontrollet e skenarit. Prova me koleg nuk është kryer.

## Dy probleme

1. **Kërkesa kur nuk ka vende:** aplikacioni nuk duhet të lejojë dërgimin e një kërkese për një udhëtim që ka 0 vende të lira.
2. **Paqartësia për rezervimin:** përdoruesi mund të mendojë se ka kryer një rezervim real, nëse kufizimet e demonstrimit nuk shpjegohen qartë.

## Korrigjimi

**Arsyeja:** Duhet të parandalohet krijimi i kërkesave kur nuk ka vende të lira dhe të shmanget keqkuptimi se demonstrimi kryen rezervime reale.

**Zgjidhja:** Kur numri i vendeve është 0, kërkesa duhet të çaktivizohet dhe të shfaqet mesazhi “Nuk ka vende të lira”. Ndërfaqja duhet të sqarojë se veprimi është vetëm demonstrim dhe nuk krijon rezervim real.

## Prova 1

**Hapat:**
1. Hapa listën e udhëtimeve.
2. Zgjodha udhëtimin me ID 2.
3. Kontrollova itinerarin, orën dhe numrin e vendeve të lira.

**Pritshmëria:** Të shfaqen Ferizaj → AAB, ora 08:15 dhe 0 vende të lira.

**Vëzhgimi:** Në skenarin e raportuar, udhëtimi ID 2 paraqitet me itinerarin Ferizaj → AAB, orën 08:15 dhe 0 vende të lira.

## Prova 2

**Hapat:**
1. Zgjodha udhëtimin ID 2, me 0 vende të lira.
2. Provova të dërgoj një kërkesë për udhëtim.
3. Kontrollova gjendjen e kërkesës dhe mesazhin e shfaqur.

**Pritshmëria:** Kërkesa të mos dërgohet dhe të shfaqet mesazhi “Nuk ka vende të lira”.

**Vëzhgimi:** Sipas përshkrimit të skenarit, kërkesa paraqitet si joaktive dhe shfaqet mesazhi se nuk ka vende të lira. Demonstrimi nuk kryen rezervim real.

## Prova 3

**Hapat:**
1. Hapa listën e udhëtimeve.
2. Kontrollova udhëtimet e tjera.
3. Krahasova numrin e vendeve të lira për secilin udhëtim.

**Pritshmëria:** Çdo udhëtim të paraqesë numrin përkatës të vendeve të lira, pa ngatërruar të dhënat e udhëtimeve të ndryshme.

**Vëzhgimi:** Sipas përshkrimit të listës, udhëtimet e tjera paraqesin numra të ndryshëm vendesh të lira, përfshirë 3 dhe 1.

## Skedari

**Skedari:** `mvp-evidence.js`

Ky skedar duhet të ekzistojë në repository-n e projektit. Ai përdoret si skedar ndihmës për dokumentimin e raportit MVP.

## Kufizimet

Aplikacioni është demonstrim mësimor dhe nuk kryen rezervime reale. Prova me koleg nuk është kryer.

# RideShare — Java 7

## Rasti im

**ID personale:** P7-417  
**GitHub:** Visar365  
**Rasti:** Rasti 2 — Pa vende.

Skenari trajton një udhëtim nga Ferizaj në AAB, në orën 08:15, me 0 vende të lira.

## Parashikimi

Kur një udhëtim ka 0 vende të lira, aplikacioni duhet të tregojë qartë se nuk ka vende dhe të mos lejojë dërgimin e kërkesës. Përdoruesi duhet të kuptojë se aplikacioni është demonstrim dhe nuk kryen rezervime reale.

## Ndryshimi i ri

Në kartën e udhëtimit shtova një kontroll që identifikon udhëtimet me 0 ose më pak vende të lira dhe shfaq një paralajmërim për përdoruesin.

## Ndihma nga AI

Përdora AI për të strukturuar raportin dhe për të marrë ndihmë gjatë shqyrtimit të kodit. Ndryshimin duhet ta provoj në aplikacion për të konfirmuar sjelljen e tij.

## Dy probleme

1. **Mungesa e vendeve të lira:** përdoruesi mund të mos e vërejë se një udhëtim nuk ka vende të lira.
2. **Paqartësia për kërkesën:** përdoruesi mund të mendojë se mund të dërgojë kërkesë edhe kur udhëtimi është plot.

## Korrigjimi

**Arsyeja:** Përdoruesi duhet të informohet qartë kur një udhëtim nuk ka vende të lira.

**Zgjidhja:** Në komponentin e kartës së udhëtimit shtova kushtin `udhetim.vende <= 0`. Kur kushti plotësohet, shfaqet mesazhi: “Nuk ka vende të lira. Kërkesa për këtë udhëtim nuk duhet të dërgohet.”

Ky ndryshim shfaq një paralajmërim në kartë. Bllokimi real i kërkesës duhet të verifikohet veçmas në faqen e detajeve dhe në logjikën që krijon kërkesën.

## Prova 1

**Hapat:**
1. Hapa faqen kryesore të RideShare.
2. Gjeta një udhëtim me vende të lira.
3. Kontrollova informacionin e shfaqur në kartë.

**Pritshmëria:** Të shfaqen nisja, destinacioni, ora, vendtakimi dhe numri i vendeve të lira.

**Vëzhgimi:** Duhet të shënohet pas ekzekutimit të aplikacionit nëse informacioni u shfaq siç pritej.

## Prova 2

**Hapat:**
1. Përgatita një udhëtim testues me 0 vende të lira.
2. Hapa faqen kryesore.
3. Kontrollova kartën e atij udhëtimi.

**Pritshmëria:** Të shfaqet mesazhi “Nuk ka vende të lira. Kërkesa për këtë udhëtim nuk duhet të dërgohet.”

**Vëzhgimi:** Duhet të plotësohet pasi të provohet aplikacioni me një udhëtim që ka 0 vende.

## Prova 3

**Hapat:**
1. Hapa detajet e një udhëtimi pa vende të lira.
2. Kontrollova nëse aplikacioni lejon dërgimin e kërkesës.
3. Verifikova rezultatin dhe mesazhin e shfaqur.

**Pritshmëria:** Kërkesa të refuzohet kur nuk ka vende të lira dhe përdoruesi të marrë një mesazh të qartë.

**Vëzhgimi:** Duhet të plotësohet pas testimit të logjikës së kërkesës. Paralajmërimi në kartë, i vetëm, nuk provon se kërkesa bllokohet.

## Skedari

**Skedari:** `aplikacioni/src/components/KartaUdhetimi.tsx`

**Korrigjimi:** Shtova kontrollin `udhetim.vende <= 0` për të identifikuar udhëtimet pa vende të lira.

**Arsyeja:** Përdoruesi duhet të informohet kur nuk ka vende të lira

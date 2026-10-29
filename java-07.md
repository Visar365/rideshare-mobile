
# RideShare — Java 7

## Rasti im (P7-417, GitHub: Visar365)

- ID personale: P7-417
- GitHub: Visar365
- Rasti: Rasti 2 — Pa vende.
- Projekti: RideShare
- Skenari: Udhëtim me 0 vende të lira.

## Parashikimi

Kur një udhëtim ka 0 vende të lira, përdoruesi duhet të informohet qartë. Aplikacioni nuk duhet të lejojë dërgimin e kërkesës kur nuk ka vende të lira. Demonstrimi nuk duhet të paraqitet si rezervim real.

## Ndryshimi i ri

Në komponentin e kartës së udhëtimit shtova kontrollin `udhetim.vende <= 0`. Kur nuk ka vende të lira, shfaqet një mesazh paralajmërues për përdoruesin.

## Ndihma nga AI

Përdora AI për të shqyrtuar kodin, për të strukturuar raportin dhe për të identifikuar një mënyrë për të shfaqur paralajmërimin kur nuk ka vende të lira. Ndryshimet dhe rezultatet duhet të verifikohen në aplikacion.

## Dy probleme (1. dhe 2.)

1. Kur një udhëtim ka 0 vende të lira, përdoruesi mund të mos e vërejë këtë kufizim.
2. Paralajmërimi në kartë nuk garanton që kërkesa bllokohet edhe në faqen e detajeve.

## Korrigjimi (arsyeja)

**Arsyeja:** Përdoruesi duhet të kuptojë kur një udhëtim nuk ka vende të lira dhe nuk duhet të krijojë pritshmëri të gabuara për rezervimin.

**Zgjidhja:** Në komponentin `KartaUdhetimi` shtova kushtin `udhetim.vende <= 0` dhe një mesazh paralajmërues. Ky ndryshim informon përdoruesin, por bllokimi i kërkesës duhet të kontrollohet veçmas në logjikën e krijimit të kërkesës.

**Skedari:** `aplikacioni/src/components/KartaUdhetimi.tsx`

## Prova 1 (Hapat, Pritshmëria, Vëzhgimi)

**Hapat:**
1. Hapa faqen kryesore të RideShare.
2. Zgjodha një udhëtim nga lista.
3. Kontrollova informacionin e paraqitur në kartë.

**Pritshmëria:** Të shfaqen nisja, destinacioni, ora, vendtakimi dhe numri i vendeve të lira.

**Vëzhgimi:** Plotësohet pas ekzekutimit të aplikacionit, duke shënuar informacionin që u shfaq realisht.

## Prova 2 (Hapat, Pritshmëria, Vëzhgimi)

**Hapat:**
1. Përgatita një udhëtim testues me 0 vende të lira.
2. Hapa faqen kryesore.
3. Kontrollova kartën e udhëtimit.

**Pritshmëria:** Të shfaqet mesazhi se nuk ka vende të lira.

**Vëzhgimi:** Plotësohet pas testimit, duke shënuar nëse paralajmërimi u shfaq.

## Prova 3 (Hapat, Pritshmëria, Vëzhgimi)

**Hapat:**
1. Hapa faqen e detajeve të udhëtimit.
2. Kontrollova funksionin për dërgimin e kërkesës.
3. Provova kërkesën me një udhëtim që ka 0 vende të lira.

**Pritshmëria:** Kërkesa të refuzohet kur nuk ka vende të lira.

**Vëzhgimi:** Plotësohet pas testimit të funksionit të kërkesës. Paralajmërimi në kartë nuk dëshmon vetvetiu se kërkesa bllokohet.

## Kufizimet

Aplikacioni është demonstrim mësimor dhe nuk kryen rezervime reale. Tri provat duhet të ekzekutohen dhe vëzhgimet duhet të plotësohen sipas rezultateve reale. Prova me koleg nuk është kryer.

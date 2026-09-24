# RideShare — Java 2

**Shkurtesat:** MVP (Minimum Viable Product – produkti minimal i përdorshëm); AI (Artificial Intelligence – inteligjencë artificiale).

## 1. Problemi
 Çfarë vështirësie kanë studentët që udhëtojnë për në AAB?
1. Kostot e larta te transportit me taxi, mungesa e linjave direkte, si dhe kostoja e larte e karburantit.

## 2. Përdoruesit
 Çfarë dëshiron shoferi? Çfarë dëshiron udhëtari?
2.Shoferi deshiron ti ndaj shpenzimet e karburantit dhe te gjej bashkeudhetare per te njejten rruge.

## 3. Tri ekranet
1. Lista e udhëtimeve: 
1. Shfaq te gjitha udhetimet e disponueshme drejt ose nga AAB, me orarin, piken e nisjes dhe numrin e vendeve te lira
2. Detajet e udhëtimit: 
2. Shfaq emrin e shoferit, profilin, modelin e makines, cmimi per vend, orari i sakte dhe butonin "kerko vend"
3. Kërkesa në pritje: 
3. Shfaq statusin e kerkeses se derguar nga udhetari dhe opsionin per ta kontaktuar shoferin

## 4. MVP — vetëm tri veçori
 Cilat tri veprime duhet të funksionojnë në versionin e parë?
1.Postimi i një udhëtimi të ri nga shoferi (orari, pika e nisjes, vendet e lira).
2.Kërkimi i udhëtimeve aktive drejt AAB-së nga udhëtari.
3.Dërgimi i një kërkese për rezervim vendi me njoftim te shoferi.

## 5. Çfarë e lëmë për më vonë?
 Shëno dy gjëra që nuk na duhen ende.
1.Pagesat online me kartelë apo sistem integruar bankar (pagesa bëhet me para në dorë).
2.Chat-i i integruar brenda aplikacionit (kontakti bëhet direkt përmes telefonit/WhatsApp).

## 6. Si e provoj?
 Çfarë duhet të ndodhë kur kërkoj një vend?
Numri i vendeve të lira zvogëlohet me 1 dhe kërkesa kalon në statusin "Në pritje" derisa shoferi ta konfirmojë.
 Çfarë ndodh nëse nuk ka vende të lira?
Butoni "Kërko vend" çaktivizohet (deaktivizohet) dhe udhëtimi markohet si "I plotësuar".

## 7. Prova me kolegun
 Ku u hutua kolegu dhe çfarë ndryshova në skicë?
Kolegu u hutua sepse nuk e dallonte dot nëse kërkesa e tij u dërgua me sukses apo jo pas shtypjes së butonit. Në skicë shtova një mesazh konfirmues pop-up ("Kërkesa u dërgua!") dhe ndryshova ngjyrën e statusit.

## 8. Ndihma nga AI
 Shëno çfarë ndihme more dhe çfarë kontrollove vetë, ose shkruaj: Nuk përdora AI.
U shfrytëzua AI për strukturimin e ideve të MVP-së dhe formulimin e ekraneve kryesore. Vetë kontrollova rrjedhën logjike të përdorimit nga këndvështrimi i një studenti të AAB-së.


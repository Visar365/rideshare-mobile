RideShare — Java 7#
Çfarë bëra këtë javë#
E kalova projektin RideShare me të dhëna demo: Arta (u-arta), shoferi Dren (u-dren) dhe udhëtimi R-101 nga Prishtina në Gjilan. Rregullova një problem që lejonte Artën të dërgonte disa herë kërkesë për të njëjtin udhëtim. Tani kërkesa e përsëritur refuzohet dhe vendet nuk ulen sërish.

Provat#
Rrjedha kryesore#
U kyça si Arta, kërkova gjilan, hapa detajet e R-101, dërgova kërkesë dhe kontrollova listën e kërkesave. Prisja të shihja statusin PENDING dhe numrin e vendeve të ulej nga 3 në 2. Kështu ndodhi në demonstrimin interaktiv.

Gabimi dhe korrigjimi#
Provova të kërkoja dy herë vend në R-101. Para korrigjimit, kërkesat e përsëritura mund të ulnin vendet pa nevojë. Tani kërkesa e dytë refuzohet; testi kontrollon që ka vetëm një kërkesë dhe kanë mbetur dy vende.

Vura re edhe se të dhënat ruhen vetëm në memorie dhe humbin kur mbyllet programi. Ky është kufizim i demonstrimit; nuk shtova bazë të dhënash.

Të dhënat dhe lejet#
Përdoruesit, udhëtimet dhe kërkesat ruhen në listat brenda RideShareService. Gjatë provës, kontrolli konfirmoi se pasagjerja nuk mund ta ndryshojë udhëtimin. Shoferi mund të ndryshojë vetëm udhëtimin e vet, ndërsa administratori mund të ndryshojë cilindo.

Testet automatike kaluan: 8/8. Provën me koleg nuk e kam bërë ende; duhet ta provojmë së bashku dhe të shënojmë çfarë ndodh.

Skedarët kryesorë#
src/rideshare/Main.java — hyrja dhe menyja e programit.
src/rideshare/RideShareService.java — kërkimi, kërkesat dhe lejet.
src/rideshare/User.java, Ride.java, RideRequest.java — modelet.
test/rideshare/RideShareServiceTest.java — testet automatike.
README.md — udhëzimet për nisjen.
Demonstrimi nuk është publikuar ende dhe nuk ka link repository në këtë dosje.

Çfarë mund të përmirësoj më tej#
Të dhënat humbin kur mbyllet programi. Një hap i ardhshëm do të ishte ruajtja e tyre në bazë të dhënash. Hyrja është vetëm për demo dhe nuk përdor fjalëkalim.

Ndihma nga AI#
Përdora AI për të shqyrtuar kodin, për të ndihmuar me korrigjimin e kërkesave të përsëritura dhe për të rregulluar raportin. E kompilova projektin, i ekzekutova testet automatike dhe e provova vetë rrjedhën interaktive. Kontrollin me koleg nuk e kam kryer.

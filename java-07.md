RideShare — Java 7#
Rasti im#
P7-417 — GitHub: Visar365. Ky projekt demonstrues në Java paraqet kërkimin e udhëtimeve dhe dërgimin e kërkesave për vende. Të dhënat demo përfshijnë pasagjeren Artën (u-arta), shoferët Dren (u-dren) dhe Ela (u-ela), si dhe udhëtime mes Prishtinës, Gjilanit dhe Pejës.

Parashikimi#
Pasagjeri duhet të gjejë një udhëtim sipas destinacionit, të shohë detajet dhe të dërgojë kërkesë. Kërkesa e parë duhet të shfaqet me statusin PENDING dhe të ulë numrin e vendeve të lira me një. Pasagjeri nuk duhet të ndryshojë udhëtimin; shoferi mund të ndryshojë vetëm udhëtimin e vet.

Ndryshimi i ri#
Shtova refuzimin e kërkesës së përsëritur nga i njëjti pasagjer për të njëjtin udhëtim. Kontrolli ndodh para se të pakësohen vendet, prandaj një kërkesë e dytë nuk krijohet dhe numri i vendeve nuk ndryshon përsëri. Shtova edhe kontrolle automatike për këtë rast, kërkimin pa dallim shkronjash të mëdha e të vogla, lejet, ID-në e panjohur dhe uljen e vendeve pas kërkesës së parë.

Ndihma nga AI#
Përdora AI për të shqyrtuar rrjedhën e kërkesave, për të ndihmuar në parandalimin e kërkesave të përsëritura dhe për të strukturuar këtë raport. Përmbajtjen e raportit e krahasova me kodin dhe testet e projektit. Prova me koleg nuk është kryer.

Dy probleme dhe korrigjimi#
Kërkesa e dyfishtë: para korrigjimit, i njëjti pasagjer mund të kërkonte përsëri vend në të njëjtin udhëtim dhe të pakësonte vendet pa nevojë. Shtova kontrollin e kërkesave ekzistuese para përditësimit të vendeve; kërkesa e përsëritur tani refuzohet.
Të dhënat nuk ruhen: përdoruesit, udhëtimet dhe kërkesat mbahen në memorie dhe humbin kur mbyllet programi. Kjo është ende kufizim i demonstrimit; ruajtja në bazë të dhënash është punë e ardhshme.
Prova 1 — Kërkim dhe detaje#
Hapat: Kyçu si u-arta; kërko gjilan; hap detajet e udhëtimit R-101.
Pritshmëria: Kërkimi gjen udhëtimin nga Prishtina në Gjilan, ndërsa detajet shfaqin orën, çmimin, shoferin dhe vendet e lira.
Vëzhgimi: Rrjedha u provua në demonstrimin interaktiv. Testet automatike kontrollojnë kërkimin gjilan dhe GJILAN, si dhe gjetjen e R-101.
Prova 2 — Kërkesë dhe vende të lira#
Hapat: Si Arta, dërgo kërkesë për R-101 dhe shfaq kërkesat e mia.
Pritshmëria: Krijohet një kërkesë me status PENDING; vendet e lira ulen nga 3 në 2.
Vëzhgimi: Ky rezultat kontrollohet nga testi testRequestReducesAvailableSeats; rrjedha u provua edhe në demonstrimin interaktiv.
Prova 3 — Kërkesë e përsëritur dhe lejet#
Hapat: Dërgo kërkesë të dytë për R-101 si Arta; pastaj provo të ndryshosh udhëtimin R-101 si pasagjere.
Pritshmëria: Kërkesa e dytë refuzohet pa ulur vendet sërish; pasagjerja nuk mund ta ndryshojë udhëtimin.
Vëzhgimi: Testet automatike kontrollojnë një kërkesë të vetme, dy vende të mbetura dhe refuzimin e ndryshimit nga pasagjerja. Prova me koleg nuk është bërë.
Skedarët në repository#
src/rideshare/Main.java
src/rideshare/RideShareService.java
src/rideshare/User.java
src/rideshare/Ride.java
src/rideshare/RideRequest.java
test/rideshare/RideShareServiceTest.java
README.md
Ky repository është projekt Java dhe nuk përmban skedarë .tsx, .ts, .js, .jsx ose .css; prandaj nuk ka shtigje të tilla për të listuar. Skedarët e përpiluar te out/ nuk përfshihen.

Kufizimet dhe hapat e ardhshëm#
Hyrja është vetëm për demonstrim dhe nuk përdor fjalëkalim. Të dhënat humbin kur mbyllet programi. Hapat e ardhshëm janë ruajtja e të dhënave në bazë të dhënash dhe prova me koleg. Projekti kompilohet me JDK dhe nuk ka ndërfaqe grafike.

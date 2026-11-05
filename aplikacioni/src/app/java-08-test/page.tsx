import Vendtakimi from "@/components/Vendtakimi";

const udhetimProve = {
  id: "2",
  nisja: "Ferizaj",
  destinacioni: "AAB",
  ora: "08:15",
  vendtakimi: "Te biblioteka",
};

export default function Java08Test() {
  return (
    <main>
      <h1>Java 8 · Faqja e provës</h1>
      <p>Udhëtim demonstrimi me të dhëna lokale. Nuk kërkohet hyrje ose lidhje me databazën.</p>
      <Vendtakimi udhetim={udhetimProve} />
    </main>
  );
}

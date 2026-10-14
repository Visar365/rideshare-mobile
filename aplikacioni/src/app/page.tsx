import { KartaUdhetimi } from "@/components/KartaUdhetimi";
import { lexoUdhetimet, type Udhetim } from "@/lib/udhetimet";
import Link from "next/link";

// Lexo bazën përsëri në çdo kërkesë për këtë faqe.
export const dynamic = "force-dynamic";

export default async function Home() {
  let udhetimet: Udhetim[];
  try {
    udhetimet = await lexoUdhetimet();
  } catch {
    return (
      <main>
        <h1>RideShare</h1>
        <p role="alert">Nuk u lidhëm me databazën. Provo përsëri.</p>
        <a className="action" href="/">Provo përsëri</a>
      </main>
    );
  }

  return (
    <main>
      <nav className="topbar"><h1>RideShare · Udhëtimet për AAB</h1><Link href="/panel">Paneli im</Link></nav>
      <p>{process.env.DATABASE_URL ? "Burimi: Neon · të dhëna për ushtrime" : "Udhëtime demonstruese lokale"}</p>
      {udhetimet.length === 0 ? (
        <p>Nuk ka udhëtime për momentin.</p>
      ) : (
        <div className="trip-list">
          {udhetimet.map((udhetim) => (
            <KartaUdhetimi key={udhetim.id} udhetim={udhetim} />
          ))}
        </div>
      )}
      {!process.env.DATABASE_URL && process.env.NODE_ENV === "development" && (
        <p className="demo-note">Modalitet demonstrimi lokal; ndryshimet humbin kur ndalet serveri.</p>
      )}
    </main>
  );
}

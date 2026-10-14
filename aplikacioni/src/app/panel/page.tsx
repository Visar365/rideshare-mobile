import Link from "next/link";
import { getAppSession } from "@/lib/session";
import { isLocalDemoEnabled } from "@/lib/demo";
import { profiliIm, type Profil } from "@/lib/lejet";
import { lexoUdhetimet, type Udhetim } from "@/lib/udhetimet";
import Hyrja from "@/components/Hyrja";
import { ruajOren } from "./actions";

export const dynamic = "force-dynamic";

const messages: Record<string, string> = {
  hyr: "Hyr në llogari para se të ndryshosh udhëtimin.",
  ndaluar: "Nuk ke leje për këtë veprim ose nuk je pronari i udhëtimit.",
  fushe: "Shkruaj një ID dhe orë të vlefshme.",
  ruajtur: "Ora u ruajt me sukses.",
  databaza: "Nuk u lidhëm me databazën. Kontrollo Neon dhe provo përsëri.",
};

export default async function Panel({ searchParams }: { searchParams: Promise<{ m?: string }> }) {
  const { m } = await searchParams;
  const session = await getAppSession();
  let profil: Profil | null = null;
  let udhetimet: Udhetim[] = [];
  let error = false;
  try {
    if (session) {
      profil = await profiliIm(session);
      if (profil?.roli === "shofer") udhetimet = (await lexoUdhetimet()).filter((trip) => trip.shofer_id === profil?.id);
    }
  } catch {
    error = true;
  }

  const isDemoProfile = profil?.id === "90000001" || profil?.id === "90000002";
  return (
    <main>
      <nav className="topbar"><Link href="/">← Kthehu te lista</Link><strong>RideShare</strong></nav>
      <section className="panel-card">
        <p className="eyebrow">LLOGARIA</p>
        <h1>Paneli im</h1>
        {m && <p className={m === "ruajtur" ? "success" : "notice"} role="status">{messages[m] ?? "Veprimi përfundoi."}</p>}
        {error && <p role="alert">{messages.databaza}</p>}
        {!session ? (
          <>
            <p>{isLocalDemoEnabled() ? "Zgjidh një rol demo për ta provuar aplikacionin lokalisht." : "Hyr me llogarinë tënde GitHub për të vazhduar."}</p>
            <Hyrja allowDemo={isLocalDemoEnabled()} />
          </>
        ) : profil ? (
          <>
            <div className="profile-row">
              <div><h2>{profil.emri}</h2><p>{isDemoProfile ? "ID demo" : "ID e GitHub"}: <code>{profil.id}</code></p></div>
              <span className="pill">{profil.roli}</span>
            </div>
            {isDemoProfile && <p>Llogari demonstrimi lokale.</p>}
            <Hyrja brenda demo={isLocalDemoEnabled() && isDemoProfile} />
            {profil.roli === "shofer" ? (
              <section className="form-section">
                <h2>Ndrysho orën e udhëtimit</h2>
                <p>Vetëm shoferi i caktuar mund ta ndryshojë orën.</p>
                {udhetimet.length === 0 ? <p>Nuk ke udhëtime të caktuara.</p> : (
                  <form action={ruajOren} className="time-form">
                    <label htmlFor="id">Udhëtimi yt</label>
                    <select id="id" name="id" required defaultValue="">
                      <option value="" disabled>Zgjidh udhëtimin</option>
                      {udhetimet.map((trip) => <option key={trip.id} value={trip.id}>#{trip.id} · {trip.nisja} · {trip.ora}</option>)}
                    </select>
                    <label htmlFor="ora">Ora e re</label>
                    <input id="ora" name="ora" type="time" required />
                    <button className="action" type="submit">Ruaj orën</button>
                  </form>
                )}
              </section>
            ) : <p className="empty">Roli yt është udhëtar. Vetëm shoferi i caktuar mund të ndryshojë orën.</p>}
          </>
        ) : <p role="alert">{messages.databaza}</p>}
      </section>
    </main>
  );
}

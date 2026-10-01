import KartaUdhetimi from "@/components/KartaUdhetimi";
import { udhetimet } from "@/lib/udhetimet";
import styles from "@/components/rideshare.module.css";

export default function Home() {
  return (
    <main className={styles.faqja}>
      <h1 className={styles.titulli}>RideShare</h1>
      <p className={styles.nentitulli}>Zgjidh një udhëtim</p>
      <ul className={styles.lista}>
        {udhetimet.map((u) => (
          <li key={u.id}>
            <KartaUdhetimi udhetimi={u} />
          </li>
        ))}
      </ul>
    </main>
  );
}

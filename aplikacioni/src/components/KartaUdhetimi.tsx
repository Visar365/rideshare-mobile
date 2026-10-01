import Link from "next/link";
import type { Udhetim } from "@/lib/udhetimet";
import styles from "./rideshare.module.css";

export default function KartaUdhetimi({ udhetimi }: { udhetimi: Udhetim }) {
  const plot = udhetimi.vendeTeLira === 0;
  return (
    <Link href={`/udhetimi/${udhetimi.id}`} className={styles.karta}>
      <p className={styles.rruga}>
        {udhetimi.nga} – {udhetimi.drejt}
      </p>
      <div className={styles.meta}>
        <span>{udhetimi.ora} · {udhetimi.cmimi} €</span>
        <span className={plot ? styles.plot : undefined}>
          {plot ? "Nuk ka vende të lira" : `${udhetimi.vendeTeLira} vende të lira`}
        </span>
      </div>
    </Link>
  );
}

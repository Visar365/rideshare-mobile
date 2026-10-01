import Link from "next/link";
import styles from "@/components/rideshare.module.css";

export default function UdhetimiNukUGjet() {
  return (
    <main className={styles.faqja}>
      <h1 className={styles.titulli}>Udhëtimi nuk u gjet</h1>
      <p className={styles.nentitulli}>Ky udhëtim nuk ekziston. Zgjidh një nga lista.</p>
      <Link href="/" className={styles.mbrapa}>← Mbrapa te lista</Link>
    </main>
  );
}

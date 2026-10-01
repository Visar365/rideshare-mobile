import Link from "next/link";
import { notFound } from "next/navigation";
import { gjejUdhetimin, udhetimet } from "@/lib/udhetimet";
import styles from "@/components/rideshare.module.css";

export default async function KerkesaUdhetimit({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const udhetimi = gjejUdhetimin(Number(id));
  if (!udhetimi) notFound();

  const plot = udhetimi.vendeTeLira === 0;

  return (
    <main className={styles.faqja}>
      <Link href={`/udhetimi/${udhetimi.id}`} className={styles.mbrapa}>
        ← Mbrapa te udhëtimi
      </Link>
      <h1 className={styles.titulli}>Simulimi i kërkesës</h1>
      <p className={styles.nentitulli}>
        {udhetimi.nga} – {udhetimi.drejt}
      </p>
      <dl className={styles.detaje}>
        <div><dt>Ora</dt><dd>{udhetimi.ora}</dd></div>
        <div><dt>Çmimi</dt><dd>{udhetimi.cmimi} €</dd></div>
        <div><dt>Shoferi</dt><dd>{udhetimi.shoferi}</dd></div>
      </dl>
      {plot ? (
        <p className={styles.mesazhi} role="alert">
          Ky udhëtim është plot, prandaj nuk mund të dërgohet kërkesa.
        </p>
      ) : (
        <>
          <p className={styles.statusi} role="status">
            Kërkesa u dërgua me sukses. Statusi: Në pritje.
          </p>
          <p className={styles.mesazhi}>
            Ky është vetëm një simulim; nuk është krijuar rezervim real.
          </p>
        </>
      )}
      <Link href="/" className={styles.mbrapa}>
        Kthehu te lista e udhëtimeve
      </Link>
    </main>
  );
}

export function generateStaticParams() {
  return udhetimet.map((udhetimi) => ({ id: String(udhetimi.id) }));
}

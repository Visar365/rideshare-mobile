import Link from "next/link";
import { notFound } from "next/navigation";
import ButoniKerkeses from "@/components/ButoniKerkeses";
import { gjejUdhetimin, udhetimet } from "@/lib/udhetimet";
import styles from "@/components/rideshare.module.css";

// Next.js 15+: params është Promise. Në Next 14 përdor: { params: { id: string } }
export default async function DetajetUdhetimit({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const udhetimi = gjejUdhetimin(Number(id));
  if (!udhetimi) notFound();

  return (
    <main className={styles.faqja}>
      <Link href="/" className={styles.mbrapa}>← Mbrapa te lista</Link>
      <h1 className={styles.titulli}>{udhetimi.nga} – {udhetimi.drejt}</h1>
      <dl className={styles.detaje}>
        <div><dt>Ora</dt><dd>{udhetimi.ora}</dd></div>
        <div><dt>Çmimi</dt><dd>{udhetimi.cmimi} €</dd></div>
        <div><dt>Vende të lira</dt><dd>{udhetimi.vendeTeLira}</dd></div>
        <div><dt>Shoferi</dt><dd>{udhetimi.shoferi}</dd></div>
      </dl>
      <ButoniKerkeses id={udhetimi.id} vendeTeLira={udhetimi.vendeTeLira} />
    </main>
  );
}

export function generateStaticParams() {
  return udhetimet.map((udhetimi) => ({ id: String(udhetimi.id) }));
}

import Link from "next/link";
import type { Udhetim } from "@/lib/udhetimet";

export function KartaUdhetimi({ udhetim }: { udhetim: Udhetim }) {
  return (
    <article className="trip-card">
      <h2>
        {udhetim.nisja} → {udhetim.destinacioni}
      </h2>
      <div className="meta">
        <span>Ora: {udhetim.ora}</span>
        <span>Vendtakimi: {udhetim.vendtakimi}</span>
        <span>Vende të lira: {udhetim.vende}</span>
      </div>
      <Link href={`/udhetimi/${udhetim.id}`}>Shiko detajet</Link>
    </article>
  );
}

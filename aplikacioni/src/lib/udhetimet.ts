import "server-only";
import { getSql } from "./db";
import { isLocalDataEnabled, readDemoTrip, readDemoTrips } from "@/lib/demo";

export type Udhetim = {
  id: string;
  nisja: string;
  destinacioni: string;
  ora: string;
  vendtakimi: string;
  vende: number;
  shofer_id: string | null;
};

export async function lexoUdhetimet(): Promise<Udhetim[]> {
  if (isLocalDataEnabled()) return readDemoTrips();
  const sql = getSql();
  const rows = await sql`
    SELECT id, nisja, destinacioni, ora, vendtakimi, vende, shofer_id
    FROM udhetimet ORDER BY id
  `;
  return rows as Udhetim[];
}

export async function gjejUdhetimin(id: string): Promise<Udhetim | undefined> {
  if (isLocalDataEnabled()) return readDemoTrip(id);
  const sql = getSql();
  const rows = await sql`
    SELECT id, nisja, destinacioni, ora, vendtakimi, vende, shofer_id
    FROM udhetimet WHERE id = ${id}
  `;
  return rows[0] as Udhetim | undefined;
}

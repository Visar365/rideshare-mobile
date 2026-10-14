import "server-only";
import type { Session } from "next-auth";
import { getSql } from "@/lib/db";
import { DEMO_DRIVER_ID, DEMO_TRAVELER_ID, updateDemoTripTime } from "@/lib/demo";
import { getAppSession } from "@/lib/session";

export type Profil = { id: string; emri: string; roli: "udhetar" | "shofer" };

export async function profiliIm(session?: Session | null): Promise<Profil | null> {
  const activeSession = session === undefined ? await getAppSession() : session;
  const id = activeSession?.user?.id;
  if (!id || !/^\d+$/.test(id)) return null;
  if (id === DEMO_DRIVER_ID) return { id, emri: "Shofer demo", roli: "shofer" };
  if (id === DEMO_TRAVELER_ID) return { id, emri: "Udhëtar demo", roli: "udhetar" };

  const sql = getSql();
  const rows = await sql`
    INSERT INTO profilet (github_id, emri)
    VALUES (${id}, ${activeSession.user.name ?? "Student"})
    ON CONFLICT (github_id) DO UPDATE
    SET emri = EXCLUDED.emri
    RETURNING github_id AS id, emri, roli
  `;
  return (rows[0] as Profil | undefined) ?? null;
}

export async function ndryshoOren(id: string, ora: string) {
  const profil = await profiliIm();
  if (!profil) return "hyr";
  if (profil.roli !== "shofer") return "ndaluar";
  if (!/^[1-9]\d*$/.test(id) || !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(ora)) return "fushe";

  if (profil.id === DEMO_DRIVER_ID) {
    return updateDemoTripTime(id, profil.id, ora) ? "ruajtur" : "ndaluar";
  }

  const sql = getSql();
  const rows = await sql`
    UPDATE udhetimet
    SET ora = ${ora}
    WHERE id = ${id}
      AND shofer_id = ${profil.id}
      AND EXISTS (
        SELECT 1 FROM profilet
        WHERE github_id = ${profil.id} AND roli = 'shofer'
      )
    RETURNING id
  `;
  return rows.length === 1 ? "ruajtur" : "ndaluar";
}

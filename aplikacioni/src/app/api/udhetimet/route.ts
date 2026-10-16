import { lexoUdhetimet } from "@/lib/udhetimet";

export const dynamic = "force-dynamic";

// Only public trip fields are returned. Authentication data and private pages
// are never included in the offline snapshot.
export async function GET() {
  try {
    const rows = await lexoUdhetimet();
    const trips = rows.map(({ id, nisja, destinacioni, ora, vendtakimi, vende }) => ({
      id,
      nisja,
      destinacioni,
      ora,
      vendtakimi,
      vende,
    }));
    return Response.json({ trips }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json(
      { error: "Lista nuk mund të lexohet tani." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}

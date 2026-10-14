import "server-only";
import { cookies } from "next/headers";
import { getServerSession, type Session } from "next-auth";
import { authOptions } from "@/lib/auth";
import { DEMO_DRIVER_ID, DEMO_TRAVELER_ID, isLocalDemoEnabled } from "@/lib/demo";

export async function getAppSession(): Promise<Session | null> {
  const session = await getServerSession(authOptions);
  if (session || !isLocalDemoEnabled()) return session;

  const role = (await cookies()).get("rideshare-java5-demo")?.value;
  if (role !== "driver" && role !== "traveler") return null;

  return {
    expires: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    user: {
      id: role === "driver" ? DEMO_DRIVER_ID : DEMO_TRAVELER_ID,
      name: role === "driver" ? "Shofer demo" : "Udhëtar demo",
      email: null,
      image: null,
    },
  };
}

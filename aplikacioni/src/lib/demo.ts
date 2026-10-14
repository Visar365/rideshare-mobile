import "server-only";

export const DEMO_DRIVER_ID = "90000001";
export const DEMO_TRAVELER_ID = "90000002";

export type DemoTrip = {
  id: string;
  nisja: string;
  destinacioni: string;
  ora: string;
  vendtakimi: string;
  vende: number;
  shofer_id: string | null;
};

type DemoState = { trips: DemoTrip[] };
const globalForDemo = globalThis as typeof globalThis & { rideShareDemo?: DemoState };
const state = globalForDemo.rideShareDemo ??= {
  trips: [
    { id: "1", nisja: "Prishtinë", destinacioni: "AAB", ora: "08:00", vendtakimi: "Stacioni i autobusëve", vende: 2, shofer_id: DEMO_DRIVER_ID },
    { id: "2", nisja: "Fushë Kosovë", destinacioni: "AAB", ora: "08:15", vendtakimi: "Te stacioni kryesor", vende: 1, shofer_id: null },
    { id: "3", nisja: "Lipjan", destinacioni: "AAB", ora: "07:45", vendtakimi: "Qendra e qytetit", vende: 0, shofer_id: null },
  ],
};

export function isLocalDataEnabled() {
  return process.env.NODE_ENV === "development" && !process.env.DATABASE_URL;
}

export function isLocalDemoEnabled() {
  return isLocalDataEnabled()
    && !process.env.GITHUB_ID
    && !process.env.GITHUB_SECRET;
}

export function readDemoTrips() {
  return state.trips.map((trip) => ({ ...trip }));
}

export function readDemoTrip(id: string) {
  const trip = state.trips.find((item) => item.id === id);
  return trip ? { ...trip } : undefined;
}

export function updateDemoTripTime(id: string, driverId: string, time: string) {
  const trip = state.trips.find((item) => item.id === id && item.shofer_id === driverId);
  if (!trip) return false;
  trip.ora = time;
  return true;
}

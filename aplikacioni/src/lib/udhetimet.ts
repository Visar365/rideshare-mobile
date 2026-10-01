export type Udhetim = {
  id: number;
  nga: string;
  drejt: string;
  ora: string;
  cmimi: number; // në euro
  vendeTeLira: number;
  shoferi: string;
};

export const udhetimet: Udhetim[] = [
  { id: 1, nga: "AAB", drejt: "Prishtinë", ora: "08:30", cmimi: 3, vendeTeLira: 3, shoferi: "Arben" },
  { id: 2, nga: "AAB", drejt: "Fushë Kosovë", ora: "10:00", cmimi: 6, vendeTeLira: 2, shoferi: "Elira" },
  { id: 3, nga: "AAB", drejt: "Gjilan", ora: "14:15", cmimi: 9, vendeTeLira: 0, shoferi: "Besnik" },
];

export function gjejUdhetimin(id: number): Udhetim | undefined {
  return udhetimet.find((u) => u.id === id);
}

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ndryshoOren } from "@/lib/lejet";
import { isLocalDemoEnabled } from "@/lib/demo";

export async function ruajOren(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const ora = String(formData.get("ora") ?? "");
  let mesazh: string;
  try {
    mesazh = await ndryshoOren(id, ora);
  } catch {
    mesazh = "databaza";
  }
  if (mesazh === "ruajtur") {
    revalidatePath("/");
    revalidatePath("/panel");
    revalidatePath(`/udhetimi/${id}`);
  }
  redirect("/panel?m=" + encodeURIComponent(mesazh));
}

export async function hyrSiDemo(formData: FormData) {
  if (!isLocalDemoEnabled()) throw new Error("Hyrja demo lejohet vetëm në zhvillim lokal.");
  const role = formData.get("role");
  if (role !== "driver" && role !== "traveler") throw new Error("Roli demo nuk është i vlefshëm.");
  (await cookies()).set("rideshare-java5-demo", role, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60,
  });
  redirect("/panel");
}

export async function dilNgaDemo() {
  if (!isLocalDemoEnabled()) throw new Error("Hyrja demo lejohet vetëm në zhvillim lokal.");
  (await cookies()).delete("rideshare-java5-demo");
  redirect("/panel");
}

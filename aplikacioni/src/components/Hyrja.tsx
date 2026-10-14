"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { dilNgaDemo, hyrSiDemo } from "@/app/panel/actions";

export default function Hyrja({
  brenda = false,
  demo = false,
  allowDemo = false,
}: {
  brenda?: boolean;
  demo?: boolean;
  allowDemo?: boolean;
}) {
  const { data: session } = useSession();
  if (brenda && demo) return <form action={dilNgaDemo}><button className="action secondary" type="submit">Dil nga demo</button></form>;
  if (brenda && session) return <button className="action secondary" onClick={() => signOut({ callbackUrl: "/" })}>Dil nga llogaria</button>;
  if (allowDemo) return <div className="demo-login">
    <form action={hyrSiDemo}><input type="hidden" name="role" value="driver" /><button className="action" type="submit">Hyr si shofer demo</button></form>
    <form action={hyrSiDemo}><input type="hidden" name="role" value="traveler" /><button className="action secondary" type="submit">Hyr si udhëtar demo</button></form>
  </div>;
  return <button className="action" onClick={() => signIn("github", { callbackUrl: "/panel" })}>Hyr me GitHub</button>;
}

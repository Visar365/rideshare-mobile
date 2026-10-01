"use client";

import { useState } from "react";
import styles from "./rideshare.module.css";

export default function ButoniKerkeses({ vendeTeLira }: { vendeTeLira: number }) {
  const [derguar, setDerguar] = useState(false);
  const plot = vendeTeLira === 0;

  return (
    <div>
      <button
        type="button"
        className={styles.butoni}
        disabled={plot || derguar}
        onClick={() => setDerguar(true)}
      >
        {plot ? "Nuk ka vende të lira" : "Kërko vend"}
      </button>
      {derguar && (
        <p className={styles.statusi} role="status">
          Simulim: Në pritje
        </p>
      )}
      {plot && <p className={styles.mesazhi}>Ky udhëtim është plot, prandaj kërkesa është e çaktivizuar.</p>}
    </div>
  );
}

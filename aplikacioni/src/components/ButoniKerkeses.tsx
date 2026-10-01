"use client";

import Link from "next/link";
import styles from "./rideshare.module.css";

export default function ButoniKerkeses({
  id,
  vendeTeLira,
}: {
  id: number;
  vendeTeLira: number;
}) {
  const plot = vendeTeLira === 0;

  return (
    <div>
      {plot ? (
        <>
          <button type="button" className={styles.butoni} disabled>
            Nuk ka vende të lira
          </button>
          <p className={styles.mesazhi}>
            Ky udhëtim është plot, prandaj kërkesa është e çaktivizuar.
          </p>
        </>
      ) : (
        <Link href={`/udhetimi/${id}/kerkesa`} className={styles.butoni}>
          Kërko vend
        </Link>
      )}
    </div>
  );
}

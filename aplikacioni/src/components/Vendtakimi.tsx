"use client";

import { useState } from "react";
import styles from "./rideshare.module.css";

type UdhetimPerKonfirmim = {
  id: string;
  nisja: string;
  destinacioni: string;
  ora: string;
  vendtakimi: string;
};

type GjendjaVendndodhjes = "idle" | "loading" | "success" | "denied" | "timeout" | "unavailable";
type Pozicioni = { latitude: number; longitude: number; accuracy: number };

const mesazhet: Record<GjendjaVendndodhjes, string> = {
  idle: "Gati. Zgjidh një mënyrë për të përfunduar udhëtimin.",
  loading: "Po kërkojmë vendndodhjen… Zgjidh Lejo ose Refuzo në njoftimin e shfletuesit.",
  success: "Pozicioni u mor. Udhëtimi është gati për konfirmim.",
  denied: "Leja u refuzua. Shkruaj vendtakimin manualisht; faqja vazhdon të punojë.",
  timeout: "Kërkesa për vendndodhje skadoi. Provo përsëri ose shkruaj vendtakimin manualisht.",
  unavailable: "Vendndodhja nuk mbështetet ose nuk është e disponueshme. Shkruaj vendtakimin manualisht.",
};

export default function Vendtakimi({ udhetim }: { udhetim: UdhetimPerKonfirmim }) {
  const [draft, setDraft] = useState("");
  const [confirmed, setConfirmed] = useState("");
  const [meetingError, setMeetingError] = useState("");
  const [locationState, setLocationState] = useState<GjendjaVendndodhjes>("idle");
  const [position, setPosition] = useState<Pozicioni | null>(null);

  function confirmMeeting() {
    const value = draft.trim();
    if (!value) {
      setMeetingError("Shkruaj vendtakimin para se ta konfirmosh.");
      return;
    }
    setMeetingError("");
    setConfirmed(value);
  }

  function requestLocation() {
    setPosition(null);
    if (!window.isSecureContext || !navigator.geolocation) {
      setLocationState("unavailable");
      return;
    }

    setLocationState("loading");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setPosition({ latitude: coords.latitude, longitude: coords.longitude, accuracy: coords.accuracy });
        setLocationState("success");
      },
      (error) => {
        setLocationState(error.code === 1 ? "denied" : error.code === 3 ? "timeout" : "unavailable");
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 },
    );
  }

  return (
    <section className={styles.meeting} aria-labelledby="meeting-title">
      <p className={styles.eyebrow}>JAVA 8 · VENDNDODHJA</p>
      <h2 id="meeting-title">Udhëtimi {udhetim.id} · {udhetim.nisja} → {udhetim.destinacioni}</h2>
      <p className={styles.meetingMeta}>Arta · udhëtimi i Dritonit · {udhetim.ora}</p>
      <p className={styles.meetingMeta}>Vendtakimi i planifikuar: {udhetim.vendtakimi}</p>

      <div className={styles.meetingGrid}>
        <div className={styles.meetingCard}>
          <h3>Shkruaj vendtakimin</h3>
          <label htmlFor="meeting-input">Vendtakimi i Artës</label>
          <input
            id="meeting-input"
            data-testid="meeting-input"
            value={draft}
            onChange={(event) => {
              setDraft(event.target.value);
              if (event.target.value.trim()) setMeetingError("");
            }}
            onKeyDown={(event) => { if (event.key === "Enter") confirmMeeting(); }}
            placeholder="p.sh. Biblioteka"
            autoComplete="off"
          />
          <button className={styles.meetingButton} data-testid="confirm-meeting" type="button" onClick={confirmMeeting}>
            Konfirmo në telefon
          </button>
          <p className={styles.meetingError} data-testid="meeting-error" role="alert" hidden={!meetingError}>
            {meetingError}
          </p>
          <p className={styles.meetingConfirmed} data-testid="confirmed-meeting" role="status" aria-live="polite" hidden={!confirmed}>
            Vendtakimi i konfirmuar: <strong>{confirmed}</strong>
          </p>
        </div>

        <div className={styles.meetingCard}>
          <h3>Vendndodhja e pajisjes</h3>
          <p className={styles.meetingMeta}>Kërkesa nis vetëm pasi shtyp butonin. Mund të zgjedhësh vendtakimin manual edhe nëse leja refuzohet.</p>
          <button className={`${styles.meetingButton} ${styles.meetingButtonSecondary}`} data-testid="locate-me" type="button" onClick={requestLocation} disabled={locationState === "loading"}>
            {locationState === "loading" ? "Po kërkojmë vendndodhjen…" : "Përdor vendndodhjen time"}
          </button>
          <p className={styles.locationStatus} data-testid="location-status" data-state={locationState} role="status" aria-live="polite">
            {mesazhet[locationState]}
          </p>
          <div className={styles.positionResult} hidden={!position}>
            <strong>Pozicioni u mor</strong>
            {position && <p>Gjerësia: {position.latitude.toFixed(5)} · Gjatësia: {position.longitude.toFixed(5)}</p>}
            <p>Saktësia: <span data-testid="location-accuracy">{position ? `±${Math.round(position.accuracy)} m` : ""}</span></p>
          </div>
        </div>
      </div>
      <p className={styles.meetingPrivacy}>Koordinatat shfaqen vetëm këtu. Aplikacioni nuk i ruan dhe nuk i dërgon te serveri.</p>
    </section>
  );
}

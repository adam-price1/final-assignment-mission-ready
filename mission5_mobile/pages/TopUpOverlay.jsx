// pages/TopUpOverlay.jsx
import React from "react";
import styles from "./TopUpOverlay.module.css";

export default function TopUpOverlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.header}>
          <span>Top up</span>
          <span className={styles.close}>✕</span>
        </div>

        <div className={styles.section}>
          <div className={styles.label}>Recent saved card</div>
          <div className={styles.cardNumber}>1234-5678-1234-5678</div>
        </div>

        <div className={styles.section}>
          <div className={styles.label}>Amount to top up</div>
          <div className={styles.amount}>0</div>
          <input type="range" min="0" max="200" className={styles.slider} />
        </div>

        <button className={styles.topUpBtn}>Top up now</button>
      </div>
    </div>
  );
}

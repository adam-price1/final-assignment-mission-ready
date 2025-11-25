import React, { useState } from "react";
import styles from "./TopUpOverlay.module.css";
import { useNavigate } from "react-router-dom";

export default function TopUpOverlay() {
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className={styles.overlayContainer}>
      <div className={styles.topupCard}>
        {/* HEADER */}
        <div className={styles.header}>
          <p className={styles.title}>Top up</p>
          <button className={styles.closeBtn} onClick={() => navigate(-1)}>
            ×
          </button>
        </div>

        {/* SAVED CARD */}
        <div className={styles.section}>
          <p className={styles.labelSmall}>Recent saved card</p>
          <div className={styles.cardBox}>
            <p className={styles.cardNumber}>1234-5678-1234-5678</p>
            <img
              src="/image/icons/more/visa.png"
              alt="Visa"
              className={styles.cardIcon}
            />
          </div>
        </div>

        {/* AMOUNT */}
        <div className={styles.section}>
          <p className={styles.labelLarge}>Amount to top up</p>
          <p className={styles.amount}>${amount}</p>

          <input
            type="range"
            min="0"
            max="100"
            value={amount}
            className={styles.slider}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* BUTTON */}
        <button className={styles.topupBtn}>Top up now</button>
      </div>
    </div>
  );
}

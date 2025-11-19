// pages/CardSuccess.jsx
import React from "react";
import styles from "./CardSuccess.module.css";

export default function CardSuccess() {
  return (
    <div className={styles.container}>
      <div className={styles.statusBar}>9:41</div>

      <div className={styles.successIcon}>
        <img
          src="/image/icons/zicons/success-check.svg"
          alt="success"
          className={styles.icon}
        />
      </div>

      <div className={styles.text}>Payment method added successful</div>
      <p className={styles.subText}>Thank you for choosing Z app</p>

      <button className={styles.homeBtn}>Go back to home</button>
    </div>
  );
}

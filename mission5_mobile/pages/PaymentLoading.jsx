// pages/PaymentLoading.jsx
import React from "react";
import styles from "./PaymentLoading.module.css";

export default function PaymentLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.statusBar}>9:41</div>

      <div className={styles.loadingText}>Loading...</div>
      <p className={styles.subText}>Please wait while the page loads</p>
    </div>
  );
}

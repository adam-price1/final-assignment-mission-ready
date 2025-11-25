import React from "react";
import styles from "./PaymentLoading.module.css";

export default function PaymentLoading() {
  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <img
          src="/image/icons/more/card.png"
          alt="icon"
          className={styles.headerIcon}
        />
        <p className={styles.headerText}>Add Payment method</p>
      </div>

      {/* LOADING SECTION */}
      <div className={styles.loadingContainer}>
        <p className={styles.loadingText}>Loading...</p>
        <p className={styles.loadingSub}>Please wait while the page loads</p>
      </div>
    </div>
  );
}

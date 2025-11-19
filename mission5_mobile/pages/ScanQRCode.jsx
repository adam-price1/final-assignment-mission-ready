// pages/ScanQRCode.jsx
import React from "react";
import styles from "./ScanQRCode.module.css";

export default function ScanQRCode() {
  return (
    <div className={styles.container}>
      <div className={styles.statusBar}>9:41</div>

      <div className={styles.header}>
        <span className={styles.back}>←</span>
        <span className={styles.title}>Scan in store at pump</span>
        <span className={styles.empty}></span>
      </div>

      <div className={styles.box}>
        <div className={styles.scanTitle}>Scan QR Code</div>
        <p className={styles.scanText}>
          Use this when paying inside the store or before fueling at the pump.
        </p>

        <img
          src="/image/icons/zicons/qr-demo.png"
          className={styles.qr}
          alt="qr"
        />
      </div>
    </div>
  );
}

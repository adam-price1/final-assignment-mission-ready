import React from "react";
import styles from "./ScanQRCode.module.css";
import backIcon from "/image/icons/more/back.png";
import menuIcon from "/image/icons/more/menu.png";
import qrCode from "/image/icons/qr/QR Code.png";
import rectangle from "/image/icons/qr/Rectangle 2613.png";
import subtract from "/image/icons/qr/Subtract.png";

export default function ScanQRCode() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <img src={backIcon} alt="Back" className={styles.backIcon} />
        <div className={styles.titleGroup}>
          <img src={menuIcon} alt="Menu" className={styles.menuIcon} />
          <h2>Scan in store at pump</h2>
        </div>
      </header>

      {/* Main QR Section */}
      <main className={styles.main}>
        <div className={styles.cardWrapper}>
          <div className={styles.topCard}>
            <h3>Scan QR code</h3>
            <p>
              Use the litres by scanning your QR code when paying inside the
              store or before fueling at the pump
            </p>
            <div className={styles.dashedLine}></div>
          </div>

          <div className={styles.bottomCard}>
            <img src={qrCode} alt="QR Code" className={styles.qrCode} />
          </div>
        </div>
      </main>
    </div>
  );
}

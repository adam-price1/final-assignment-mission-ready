import React from "react";
import styles from "./Overlay.module.css";
import headerImg from "../../../assets/overlay/header-confirm.png";
import swoosh from "../../../assets/overlay/z-swoosh.png";

const OrderConfirmOverlay = () => {
  return (
    <div className={styles.overlayWrapper}>
      <div className={`${styles.overlayContainer} ${styles.confirmOverlay}`}>
        <div className={styles.overlayHeader}>
          <img src={headerImg} alt="Order Confirmed" />
        </div>

        <p className={`${styles.overlayText} ${styles.confirmText}`}>
          Thank you for your order!
          <br />
          <br />
          Your request has been successfully sent to our team at Z. We’ll notify
          you shortly with a confirmation and details on when your order will be
          ready for pick-up. Stay tuned!
        </p>

        <img src={swoosh} alt="Swoosh" className={styles.confirmImage} />

        <div className={styles.buttonRow}>
          <button className={styles.btnPrimary}>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmOverlay;

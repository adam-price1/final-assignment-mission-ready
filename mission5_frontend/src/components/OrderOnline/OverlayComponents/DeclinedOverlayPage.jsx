import React from "react";
import styles from "./Overlay.module.css";
import headerImg from "../../../assets/overlay/header-declined.png";

const DeclinedOverlayPage = () => {
  return (
    <div className={styles.overlayWrapper}>
      <div className={`${styles.overlayContainer} ${styles.declinedOverlay}`}>
        <div className={styles.overlayHeader}>
          <img src={headerImg} alt="Payment Declined" />
        </div>

        <p className={`${styles.overlayText} ${styles.declinedText}`}>
          We’re sorry, but your payment was not successful. Please check your
          payment details and try again. If the issue persists, contact your
          bank or reach out to our support team for assistance.
          <br />
          <br />
          Thank you!
        </p>

        <div className={styles.buttonRow}>
          <button className={styles.btnCancel}>Cancel</button>
          <button className={styles.btnPrimary}>Try another card</button>
        </div>
      </div>
    </div>
  );
};

export default DeclinedOverlayPage;

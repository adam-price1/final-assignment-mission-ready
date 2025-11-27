import React from "react";
import styles from "./Overlay.module.css";
import headerImg from "../../../assets/overlay/header-declined.png";

const DeclinedOverlay = ({ onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlayWrapper} onClick={handleBackgroundClick}>
      <div className={`${styles.overlayContainer} ${styles.declinedOverlay}`}>
        <div className={styles.overlayHeader}>
          <img src={headerImg} alt="Payment Declined" />
        </div>

        <p className={styles.overlayText}>
          We’re sorry, but your payment was not successful.
          <br />
          <br />
          Please check your card details and try again.
        </p>

        <div className={styles.buttonRow}>
          <button className={styles.btnCancel} onClick={onClose}>
            Cancel
          </button>

          <button className={styles.btnPrimary} onClick={onClose}>
            Try another card
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeclinedOverlay;

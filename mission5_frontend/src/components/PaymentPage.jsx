import React, { useState } from "react";
import styles from "./PaymentPage.module.css";

// Images
import banner from "/image/icons/more/Frame 7185.png";

// Overlays
import PaymentOverlay from "./OrderOnline/OverlayComponents/PaymentOverlay";
import DeclinedOverlay from "./OrderOnline/OverlayComponents/DeclinedOverlayPage";
import OrderConfirmOverlay from "./OrderOnline/OverlayComponents/OrderConfirmOverlay";

export default function PaymentPage() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showDeclined, setShowDeclined] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const openPaymentOverlay = () => {
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = () => {
    setShowPaymentForm(false);

    const isSuccess = Math.random() < 0.5;

    if (isSuccess) {
      setShowConfirm(true);
    } else {
      setShowDeclined(true);
    }
  };

  const closeAll = () => {
    setShowPaymentForm(false);
    setShowDeclined(false);
    setShowConfirm(false);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.bannerWrapper}>
        <img src={banner} alt="My Payment Cards" className={styles.bannerImg} />
      </div>

      <div className={styles.sectionTitle}>Use my card</div>

      <div className={styles.cardBox}>
        <div className={styles.cardText}>
          <div className={styles.label}>Card Name / Nick Name</div>
          <div className={styles.label}>Card Type</div>
        </div>

        <div className={styles.cardNumber}>8245</div>
      </div>

      <div className={styles.buttonRow}>
        <button className={styles.cancelBtn}>Cancel</button>

        <button className={styles.payBtn} onClick={openPaymentOverlay}>
          Pay
        </button>
      </div>

      <div className={styles.otherMethodBox}>Use another payment method</div>

      {showPaymentForm && (
        <PaymentOverlay onClose={closeAll} onSubmit={handlePaymentSubmit} />
      )}

      {showDeclined && <DeclinedOverlay onClose={closeAll} />}

      {showConfirm && <OrderConfirmOverlay onClose={closeAll} />}
    </div>
  );
}

import React, { useState } from "react";
import styles from "./PaymentPage.module.css";

// Images
import banner from "/image/icons/more/Frame 7185.png";

// Components
import Header from "./Header/Header";
import Header1 from "./Header/Header1";
import Footer from "./Footer/Footer";

// Overlays
import PaymentOverlay from "./OrderOnline/OverlayComponents/PaymentOverlay";
import DeclinedOverlay from "./OrderOnline/OverlayComponents/DeclinedOverlayPage";
import OrderConfirmOverlay from "./OrderOnline/OverlayComponents/OrderConfirmOverlay";

export default function PaymentPage() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showDeclined, setShowDeclined] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  /* -----------------------------
        HANDLERS
  ------------------------------ */

  // Open payment form overlay
  const openPaymentOverlay = () => {
    setShowPaymentForm(true);
  };

  // When Pay is clicked inside the overlay
  const handlePaymentSubmit = () => {
    setShowPaymentForm(false);

    // 🎲 Random outcome: 50% success / 50% decline
    const isSuccess = Math.random() < 0.5;

    if (isSuccess) {
      setShowConfirm(true); // ✅ Payment success
    } else {
      setShowDeclined(true); // ❌ Payment failed
    }
  };

  // Close all overlays
  const closeAll = () => {
    setShowPaymentForm(false);
    setShowDeclined(false);
    setShowConfirm(false);
  };

  // Back to home (after success)
  const goHome = () => {
    closeAll();
    window.location.href = "/";
  };

  /* -----------------------------
        PAGE UI
  ------------------------------ */

  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <Header />
      <Header1 />

      {/* Banner */}
      <div className={styles.bannerWrapper}>
        <img src={banner} alt="My Payment Cards" className={styles.bannerImg} />
      </div>

      <div className={styles.sectionTitle}>Use my card</div>

      {/* Card Box */}
      <div className={styles.cardBox}>
        <div className={styles.cardText}>
          <div className={styles.label}>Card Name / Nick Name</div>
          <div className={styles.label}>Card Type</div>
        </div>

        <div className={styles.cardNumber}>8245</div>
      </div>

      {/* Pay Button */}
      <div className={styles.buttonRow}>
        <button className={styles.cancelBtn}>Cancel</button>

        <button className={styles.payBtn} onClick={openPaymentOverlay}>
          Pay
        </button>
      </div>

      <div className={styles.otherMethodBox}>Use another payment method</div>

      <Footer />

      {/* Payment Form Overlay */}
      {showPaymentForm && (
        <PaymentOverlay onClose={closeAll} onSubmit={handlePaymentSubmit} />
      )}

      {/* Declined Payment Overlay */}
      {showDeclined && <DeclinedOverlay onClose={closeAll} />}

      {/* Order Confirm Overlay */}
      {showConfirm && <OrderConfirmOverlay onHome={goHome} />}
    </div>
  );
}

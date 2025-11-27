import React, { useState } from "react";
import styles from "./Overlay.module.css";
import headerImg from "../../../assets/overlay/header-payment.png";

const PaymentOverlay = ({ onClose, onSubmit }) => {
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!card || !expiry || !cvv || !name) {
      alert("Please fill all fields");
      return;
    }

    onSubmit();
  };

  return (
    <div className={styles.overlayWrapper} onClick={handleBackgroundClick}>
      <div className={`${styles.overlayContainer} ${styles.paymentOverlay}`}>
        <div className={styles.overlayHeader}>
          <img src={headerImg} alt="Payment Header" />
        </div>

        <div className={styles.overlayText}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formField}>
              <label>Card number</label>
              <input
                type="text"
                placeholder="Please enter your card number"
                value={card}
                onChange={(e) => setCard(e.target.value)}
              />
            </div>

            <div className={styles.formField}>
              <label>Expiry date</label>
              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </div>

            <div className={styles.formField}>
              <label>CVV number</label>
              <input
                type="text"
                placeholder="Please enter CVV number"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>

            <div className={styles.formField}>
              <label>Name on card</label>
              <input
                type="text"
                placeholder="Please enter your name on card"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </form>
        </div>

        <div className={styles.buttonRow}>
          <button className={styles.btnCancel} onClick={onClose}>
            Cancel
          </button>

          <button className={styles.btnPrimary} onClick={handleSubmit}>
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOverlay;

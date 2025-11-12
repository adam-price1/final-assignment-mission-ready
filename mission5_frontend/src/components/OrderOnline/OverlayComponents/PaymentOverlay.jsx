import React from "react";
import styles from "./Overlay.module.css";
import headerImg from "../../../assets/overlay/header-payment.png";

const PaymentOverlay = () => {
  return (
    <div className={styles.overlayWrapper}>
      <div className={`${styles.overlayContainer} ${styles.paymentOverlay}`}>
        <div className={styles.overlayHeader}>
          <img src={headerImg} alt="Payment Header" />
        </div>

        <div className={styles.overlayText}>
          <form>
            <div className={styles.formField}>
              <label>Card number</label>
              <input type="text" placeholder="Please enter your card number" />
            </div>

            <div className={styles.formField}>
              <label>Expiry date</label>
              <input type="text" placeholder="MM/YY" />
            </div>

            <div className={styles.formField}>
              <label>CVV number</label>
              <input type="text" placeholder="Please enter CVV number" />
            </div>

            <div className={styles.formField}>
              <label>Name on card</label>
              <input type="text" placeholder="Please enter your name on card" />
            </div>
          </form>
        </div>

        <div className={styles.buttonRow}>
          <button className={styles.btnCancel}>Cancel</button>
          <button className={styles.btnPrimary}>Pay</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentOverlay;

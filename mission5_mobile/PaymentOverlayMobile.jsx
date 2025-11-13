import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MobileOverlay.module.css";

// ✅ FIXED IMAGE PATH (now points to mission5_frontend)
import headerImg from "../mission5_frontend/src/assets/overlay/header-payment.png";

export default function PaymentOverlayMobile() {
  const navigate = useNavigate();

  return (
    <div className={styles.screenBg}>
      <div className={styles.card}>
        <img
          src={headerImg}
          alt="Payment Header"
          className={styles.headerImage}
        />

        <div className={styles.body}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <label className={styles.label}>Card number</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Please enter your card number"
            />

            <div className={styles.row}>
              <div>
                <label className={styles.label}>Expiry date</label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className={styles.label}>CVV number</label>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="CVV"
                />
              </div>
            </div>

            <label className={styles.label}>Name on card</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Please enter your name on card"
            />
          </form>
        </div>

        <div className={styles.footerButtons}>
          <button
            className={`${styles.btn} ${styles.btnGhost}`}
            onClick={() => navigate("/selection")}
          >
            Cancel
          </button>
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={() => navigate("/order-confirm")}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}

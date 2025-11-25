import React from "react";
import styles from "./AddCardDetails.module.css";

export default function AddCardDetails() {
  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <img
          src="/image/icons/more/back.png"
          className={styles.backIcon}
          alt="back"
        />

        <img
          src="/image/icons/more/card.png"
          className={styles.headerCardIcon}
          alt="card icon"
        />

        <p className={styles.headerText}>Add Payment method</p>
      </div>

      {/* FORM */}
      <div className={styles.formWrapper}>
        {/* CARD NUMBER */}
        <div>
          <p className={styles.label}>Card number</p>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              placeholder="Please enter your card number"
            />
            <img src="/image/icons/more/visa.png" className={styles.visaIcon} />
          </div>
        </div>

        {/* EXPIRY DATE */}
        <div>
          <p className={styles.label}>Expiry date</p>
          <div className={styles.inputBox}>
            <input className={styles.input} placeholder="MM/YY" />
          </div>
        </div>

        {/* CVV */}
        <div>
          <p className={styles.label}>CVV number</p>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              placeholder="Please enter your CVV number"
            />
            <img
              src="/image/icons/more/info (2).png"
              className={styles.inputIcon}
            />
          </div>
        </div>

        {/* NAME ON CARD */}
        <div>
          <p className={styles.label}>Name on card</p>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              placeholder="Please enter your name on card"
            />
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <button className={styles.payButton}>Click to pay</button>
    </div>
  );
}

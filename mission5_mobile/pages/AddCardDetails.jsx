// pages/AddCardDetails.jsx
import React from "react";
import styles from "./AddCardDetails.module.css";

export default function AddCardDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.statusBar}>9:41</div>

      <div className={styles.header}>
        <span className={styles.back}>←</span>
        <span className={styles.title}>Add Payment method</span>
        <span className={styles.empty}></span>
      </div>

      <div className={styles.form}>
        <label>Card number</label>
        <input type="text" placeholder="Enter card number" />

        <label>Expiry date</label>
        <input type="text" placeholder="MM/YY" />

        <label>CVV</label>
        <input type="text" placeholder="123" />

        <label>Name on card</label>
        <input type="text" placeholder="Enter name" />

        <button className={styles.payBtn}>Click to pay</button>
      </div>
    </div>
  );
}

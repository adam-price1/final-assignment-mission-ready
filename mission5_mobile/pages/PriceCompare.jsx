// pages/PriceCompare.jsx
import React from "react";
import styles from "./PriceCompare.module.css";

export default function PriceCompare() {
  return (
    <div className={styles.container}>
      <div className={styles.statusBar}>9:41</div>

      <h2 className={styles.title}>Price Comparison</h2>

      <div className={styles.searchRow}>
        <input className={styles.input} placeholder="Enter Address" />
        <input className={styles.input} placeholder="Enter Address" />
      </div>

      <div className={styles.grid}>
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <div key={i} className={styles.card}>
            <img
              src="/image/icons/zicons/appfueltank.svg"
              alt="station"
              className={styles.logo}
            />
            <div className={styles.station}>Z Kingsway Station</div>
            <div className={styles.address}>26 Clevedon Road, Papakura</div>
            <div className={styles.price}>$297.9 per liter</div>
            <button className={styles.topUpBtn}>Top up</button>
          </div>
        ))}
      </div>
    </div>
  );
}

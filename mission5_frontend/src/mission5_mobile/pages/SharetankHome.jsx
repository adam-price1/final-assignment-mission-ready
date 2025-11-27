import React from "react";
import styles from "./SharetankHome.module.css";
import {Link} from "react-router-dom";

export default function SharetankHome() {
  return (
    <div className={styles.screen}>
      {/* ---- STATUS BAR ---- */}
      <div className={styles.statusBar}>
        <span className={styles.time}>9:41</span>
        <img 
        src="/image/icons/zicons/Lev.svg"
        alt="status"
        className={styles.statusIconImg}
        />
       
      </div>

      {/* ---- ORANGE HEADER ---- */}
      {/* ---- ORANGE HEADER (NEW CIRCLE VERSION) ---- */}
<div className={styles.headerWrapper}>
  <div className={styles.headerCircle}></div>

  <div className={styles.headerContent}>
    <p className={styles.hello}>Kia ora Alex,</p>

    <div className={styles.sharetankRow}>
      <img
        src="/image/icons/zicons/whitepump.PNG"
        alt="Sharetank"
        className={styles.sharetankIcon}
      />
      <div>
        <p className={styles.sharetankTitle}>Sharetank</p>
        <p className={styles.sharetankSubtitle}>
          Maximise Your Fuel,<br></br>
           Amplify Your Sharing
        </p>
      </div>
    </div>

   <Link to="/mobile/sharetank/:tankId" className={styles.primaryButton}>
  View my tank
</Link>

  </div>
</div>


     <div className={styles.cardGrid}>
  {/* LEFT BIG CARD */}
  <button className={`${styles.card} ${styles.bigCard}`}>
    <span>Fuel Price</span>
    <span>Comparison</span>
  </button>

  {/* RIGHT COLUMN (2 SMALL CARDS) */}
  <div className={styles.smallCardColumn}>
    <button className={styles.cardSmall}>
      <span>Order</span>
      <span>Food</span>
    </button>

  <button className={styles.cardSmall}>
  <div className={styles.cardText}>
    <span className={styles.line1}>Z</span>
    <span className={styles.line2}>Near me</span>
  </div>

  <img
    src="/image/icons/zicons/mapIcon.svg"
    className={styles.cardIcon}
    alt=""
  />
</button>

  </div>
</div>
</div>
  );
}

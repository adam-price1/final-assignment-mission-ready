// pages/MoreMenu.jsx
import React from "react";
import styles from "./MoreMenu.module.css";

export default function MoreMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.statusBar}>9:41</div>

      <div className={styles.header}>
        <span className={styles.back}>←</span>
        <span className={styles.title}>More</span>
        <span className={styles.empty}></span>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>My account</h3>

        <div className={styles.row}>Personal information ›</div>
        <div className={styles.row}>Notification settings ›</div>
        <div className={styles.row}>Loyalty card ›</div>
        <div className={styles.row}>Recent activity ›</div>
        <div className={styles.row}>EV charge tag ›</div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Promotions</h3>
        <div className={styles.row}>My vouchers ›</div>
        <div className={styles.row}>Invite friends ›</div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Help & Support</h3>
        <div className={styles.row}>Find a Z ›</div>
        <div className={styles.row}>Legal ›</div>
        <div className={styles.row}>Give Feedback ›</div>
        <div className={styles.row}>Contact us ›</div>
      </div>
    </div>
  );
}

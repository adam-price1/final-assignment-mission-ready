import React from "react";
import styles from "./PaymentPage.module.css";

// Images
import banner from "/image/icons/more/Frame 7185.png";

// Components
import Header from "./Header/Header";
import Header1 from "./Header/Header1";
import Footer from "./Footer/Footer";

export default function PaymentPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Header */}
      <Header />
      <Header1 />

      {/* Banner */}
      <div className={styles.bannerWrapper}>
        <img src={banner} alt="My Payment Cards" className={styles.bannerImg} />
      </div>

      {/* Section Title */}
      <div className={styles.sectionTitle}>Use my card</div>

      {/* Card Box */}
      <div className={styles.cardBox}>
        <div className={styles.cardText}>
          <div className={styles.label}>Card Name / Nick Name</div>
          <div className={styles.label}>Card Type</div>
        </div>

        <div className={styles.cardNumber}>8245</div>
      </div>

      {/* Buttons */}
      <div className={styles.buttonRow}>
        <button className={styles.cancelBtn}>Cancel</button>
        <button className={styles.payBtn}>Pay</button>
      </div>

      {/* Use another method box */}
      <div className={styles.otherMethodBox}>Use another payment method</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

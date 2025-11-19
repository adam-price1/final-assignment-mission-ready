import React from "react";
import styles from "./HowItWorksCard.module.css";

export default function HowItWorksCard({ title, body, showIllustration = false }) {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{body}</p>
      </div>

      {/* only the first card will render this */}
      {showIllustration && (
        <div className={styles.illustration}>
          <div className={`${styles.ring} ${styles.ringOuter}`} />
          <div className={`${styles.ring} ${styles.ringSecond}`} />
          <div className={`${styles.ring} ${styles.ringThird}`} />
          <div className={`${styles.ring} ${styles.ringFourth}`} />

          <div className={styles.iconCircle}>
            <div className={styles.centerOrange}></div>

            <img
              src="/image/icons/zicons/bluewaterdrop.svg"
              alt="Water Drop"
              className={styles.pin}
            />

            <img
              src="/image/icons/zicons/mask.svg"
              alt="Person"
              className={styles.mask}
            />
          </div>
        </div>
      )}
    </div>
  );
}

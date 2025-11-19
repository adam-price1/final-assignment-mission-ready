import React from "react";
import styles from "./HowItWorksPage.module.css";
import HowItWorksCard from "./HowItWorksCard";

const CARDS = [
  {
    title: "Buy fuel now, use it later",
    body: "Lock the lowest pump price within 30km of your location and buy it to use later!",
        showIllustration:true,
  },
  {
    title: "Share it with others",
    body: "You're free to share the litres in your Sharetank with others, or keep it just for you.",
  showIllustration:false,
  },
];

const STEPS = [
  {
    num: 1,
    title: "Pay in app",
    body:
      "Drive in, open your app, select your pump number and use your Sharetank litres as payment.",
  },
  {
    num: 2,
    title: "Pay by plate",
    body:
      "Register your vehicle and we'll automatically prepare the pump for you when you arrive. Simply pull in, fuel up, and go!",
    linkLabel: "Learn more",
    linkHref: "#", // replace with real URL later
  },
  {
    num: 3,
    title: "In store or at the pump",
    body:
      "Use the litres by scanning your QR code when paying inside the store or before fueling at the pump.",
    linkLabel: "Scan QR code",
    linkHref: "#",
  },
];

export default function HowItWorksPage() {
  return (
    <div className={styles.screen}>
     <div className={styles.statusBar}>
  <span className={styles.time}>9:41</span>

  <div className={styles.statusIcons}>
    <img
      src="/image/icons/zicons/Lev.svg"
      alt="signal"
      className={styles.lev}
    />
  </div>
</div>

      {/* ---- TOP BAR ---- */}
      <div className={styles.topBarWrapper}>
      <div className={styles.topBar}>
       <button className={styles.backBtn}>
        <img
        src="/image/icons/zicons/mobilearrow.svg"
        alt="back arrow"
        className={styles.backIcon}
        />
       </button>

        <img
          src="/image/icons/zicons/trailer.svg"
          alt="trailer"
          className={styles.topIcon}
        />

        <span className={styles.topText}>How it works</span>
      </div>
</div>
      {/* ---- CARDS ---- */}
      <div className={styles.cardRow}>
        {CARDS.map((card) => (
          <HowItWorksCard
            key={card.title}
            title={card.title}
            body={card.body}
            showIllustration={card.showIllustration}
          />
        ))}
      </div>

      {/* ---- SECTION TITLE ---- */}
      <h2 className={styles.sectionTitle}>Way to use fuel</h2>

      {/* ---- STEPS ---- */}
      <div className={styles.steps}>
        {STEPS.map((step) => (
          <div key={step.num} className={styles.step}>
            <span className={styles.stepNum}>{step.num}</span>

            <div className={styles.stepText}>
              <p className={styles.stepTitle}>{step.title}</p>
              <p className={styles.stepBody}>{step.body}</p>

              {step.linkLabel && (
                <button className={styles.stepLink}>
                  {step.linkLabel}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

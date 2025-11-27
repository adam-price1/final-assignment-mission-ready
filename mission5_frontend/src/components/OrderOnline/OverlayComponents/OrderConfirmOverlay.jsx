import React, { useEffect, useState } from "react";
import styles from "./Overlay.module.css";

import checkIcon from "../../../assets/overlay/check.png";
import backIcon from "../../../assets/overlay/back.png";

import anim1 from "../../../assets/overlay/Property1_Default.png";
import anim2 from "../../../assets/overlay/Property1_Variant4(1).png";
import anim3 from "../../../assets/overlay/Property1_Variant4.png";
import anim4 from "../../../assets/overlay/Property1_Variant3.png";

const OrderConfirmOverlay = ({ onClose }) => {
  const frames = [anim1, anim2, anim3, anim4];
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlayWrapper} onClick={handleBackgroundClick}>
      <div className={styles.confirmCard}>
        <div className={styles.confirmHeader}>
          <img
            src={backIcon}
            alt="Back"
            className={styles.headerIcon}
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />

          <span className={styles.headerTitle}>Order Confirmed</span>

          <img
            src={checkIcon}
            alt="Success"
            className={styles.headerRightIcon}
          />
        </div>

        <div className={styles.confirmBody}>
          <h3>Thank you for your order!</h3>
          <p>
            Your request has been successfully sent to our team at Z.
            <br />
            <br />
            We’ll notify you shortly once your order is ready for pick-up.
          </p>
        </div>

        <img
          src={frames[frameIndex]}
          alt="Animation"
          className={styles.animationBubble}
        />
      </div>
    </div>
  );
};

export default OrderConfirmOverlay;

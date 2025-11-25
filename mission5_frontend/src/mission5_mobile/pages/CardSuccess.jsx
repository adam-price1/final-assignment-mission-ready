import React from "react";
import styles from "./CardSuccess.module.css";
import { useNavigate } from "react-router-dom";

export default function CardSuccess() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <img
          src="/image/icons/more/back.png"
          alt="back"
          className={styles.backIcon}
          onClick={() => navigate(-1)}
        />
        <p className={styles.headerText}>Add Payment method</p>
      </div>

      {/* SUCCESS ICON */}
      <img
        src="/image/icons/more/imageSuccess.JPG"
        alt="success"
        className={styles.successImage}
      />

      {/* TEXT */}
      <p className={styles.title}>Payment method added successful</p>
      <p className={styles.subtitle}>Thank you for choosing Z app</p>

      {/* BUTTON */}
      <button
        className={styles.homeButton}
        onClick={() => navigate("/mobile/home")}
      >
        Go back to home
      </button>
    </div>
  );
}

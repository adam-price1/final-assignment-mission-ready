import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./MobileOverlay.module.css";

// Temporary test (replace with real pages later)
function Onboarding1() {
  return (
    <div style={{ padding: "24px", textAlign: "center" }}>
      <h2>👋 Welcome to Z App Mobile</h2>
      <p>This is Onboarding 1 (test screen)</p>
    </div>
  );
}

// ✅ Footer Component
function MobileFooter() {
  return (
    <footer className={styles.mobileFooter}>
      <div className={styles.footerIcons}>
        <button className={styles.footerBtn}>🏠 Home</button>
        <button className={styles.footerBtn}>🗺️ Map</button>
        <button className={styles.footerBtn}>🛍️ Orders</button>
        <button className={styles.footerBtn}>⚙️ More</button>
      </div>
    </footer>
  );
}

export default function MobileApp() {
  return (
    <div className={styles.screenBg}>
      <div className={styles.card}>
        <Routes>
          <Route path="/" element={<Onboarding1 />} />

          {/* Fallback (always shows something) */}
          <Route
            path="*"
            element={
              <div
                style={{
                  padding: "24px",
                  textAlign: "center",
                  color: "#2c2c54",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                📱 Mobile App Loaded Successfully
                <br />
                (No route matched)
              </div>
            }
          />
        </Routes>

        {/* ✅ Mobile Footer */}
        <MobileFooter />
      </div>
    </div>
  );
}

import React from "react";
import styles from "./Footer.module.css";
import zLogo from "/image/logo.png"; // ← place your Z logo in /src/assets

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <img src={zLogo} alt="Z Energy logo" className={styles.logo} />
        </div>

        <div className={styles.links}>
          <div className={styles.column}>
            <h4>Products and services</h4>
            <ul>
              <li>At the station</li>
              <li>Z app</li>
              <li>Rewards and promotions</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>For businesses</h4>
            <ul>
              <li>Z Business fuel card</li>
              <li>Fuels and services</li>
              <li>Business tips and stories</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>About Z</h4>
            <ul>
              <li>Our story</li>
              <li>Our people</li>
              <li>What we stand for</li>
              <li>Sustainability</li>
              <li>News</li>
              <li>Careers at Z</li>
              <li>Corporate Centre</li>
            </ul>
          </div>
        </div>

        <button className={styles.contactBtn}>Contact us ▸</button>
      </div>
    </footer>
  );
}

export default Footer;

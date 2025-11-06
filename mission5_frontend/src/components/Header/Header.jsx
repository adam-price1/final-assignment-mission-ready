import React from "react";
import styles from "./Header.module.css";
import zLogo from "/image/logo.png";
import shoppingCart from "/image/icons/shoppingCart.png";
import searchIcon from "/image/icons/searchIcon.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={zLogo} alt="Z Energy logo" className={styles.logo} />
        <button className={styles.personalBtn}>For personal</button>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            How to enjoy Z station <span>▾</span>
          </li>
          <li>
            Reward and promotion <span>▾</span>
          </li>
          <li>
            Location <span>▾</span>
          </li>
          <li>Z App</li>
          <li>About Z</li>
        </ul>
      </nav>

      <div className={styles.right}>
        <image src={shoppingCart} className={styles.icon} />
        <image src={searchIcon} className={styles.icon} />
        <button className={styles.loginBtn}>Login ▸</button>
      </div>
    </header>
  );
}

export default Header;

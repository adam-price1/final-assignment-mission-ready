import React from "react";
import { Link } from "react-router-dom"; // added import
import styles from "./Header.module.css";
import zLogo from "/image/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {/* logo now routes home */}
        <Link to="/">
          <img src={zLogo} alt="Z Energy logo" className={styles.logo} />
        </Link>

        <button className={styles.personalBtn}>For personal</button>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>Z App</li>
          <li>About Z</li>
          <li>
            <button>
              <img src="/image/icons/shoppingCart.png" alt="shoppingIcon" />
            </button>
          </li>
          <li>
            <button>
              <img src="/image/icons/searchIcon.png" alt="searchIcon" />
            </button>
          </li>
          <li>
            <button className={styles.loginBtn}>Login ▸</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

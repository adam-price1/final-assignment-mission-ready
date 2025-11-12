import styles from "./Header1.module.css";
import arrowLogo from "/image/icons/zicons/arrow.png";

function Header1() {
  return (
    <header className={styles.header1}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            How to enjoy Z Station{" "}
            <img src={arrowLogo} alt="" className={styles.arrow}></img>
          </li>
          <li>
            Reward and promotion
            <img src={arrowLogo} alt="" className={styles.arrow}></img>
          </li>
          <li>
            Location<img src={arrowLogo} alt="" className={styles.arrow}></img>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header1;

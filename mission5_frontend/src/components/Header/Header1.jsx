import styles from "./Header1.module.css";

function Header1() {
  return (
    <header className={styles.header1}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>How to enjoy Z Station</li>
          <li>Reward and promotion</li>
          <li>Location</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header1;

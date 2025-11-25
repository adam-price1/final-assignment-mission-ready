import styles from "./Onboarding.module.css";
import zLogo from "/image/logo.png";

function Onboarding1() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <div className={styles.topSection}>
        <img src={zLogo} alt="Z logo" className={styles.logo} />
      </div>
      <p>This is Onboarding Screen 1</p>
    </div>
  );
}

export default Onboarding1;

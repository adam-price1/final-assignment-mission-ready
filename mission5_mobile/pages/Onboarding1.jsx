import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding.module.css";
import zLogo from "/image/logo.png";

function Onboarding1() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/mobile/onboarding2");
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <div className={styles.topSection}>
        <img src={zLogo} alt="Z logo" className={styles.logo} />
      </div>
    </div>
  );
}

export default Onboarding1;

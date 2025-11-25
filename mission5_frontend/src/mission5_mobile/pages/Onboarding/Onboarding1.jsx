import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding.module.css";
import onboarding from "/image/Onboarding_1.png";

function Onboarding1() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/mobile/onboarding2");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.startContainer}>
      <img src={onboarding} alt="onboarding start" className={styles.start} />
    </div>
  );
}

export default Onboarding1;

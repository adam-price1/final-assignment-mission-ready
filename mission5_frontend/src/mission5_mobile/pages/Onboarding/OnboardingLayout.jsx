import { useNavigate } from "react-router-dom";
import styles from "./Onboarding.module.css";
import arrow from "/image/icons/zicons/arrow.png";

export default function OnboardingLayout({
  title,
  image,
  description,
  page,
  totalPages,
  next,
}) {
  const navigate = useNavigate();

  return (
    <div className={styles.container} onClick={() => next && navigate(next)}>
      <div style={{ padding: "16px" }}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          <img src={arrow} alt="back arrow" className={styles.backArrow} />
        </button>
      </div>

      <h2 className={styles.title}>{title}</h2>

      <img src={image} alt={title} className={styles.illustration} />

      <div className={styles.dots}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index + 1 === page ? styles.active : ""
            }`}
          />
        ))}
      </div>

      <p className={styles.description}>{description}</p>
    </div>
  );
}

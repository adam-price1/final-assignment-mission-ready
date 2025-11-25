import { Link } from "react-router-dom";
import styles from "./FeaturesBlock.module.css";

export default function FeaturesBlock({
  title,
  kicker,
  body,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt = "",
  reverse = false,
}) {
  return (
    <section className={`${styles.block} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.media}>
        <img src={imageSrc} alt={imageAlt} />
      </div>

      <div className={styles.content}>
        {kicker && <p className={styles.kicker}>{kicker}</p>}
        <h2 className={styles.h2}>{title}</h2>
        {body && <p className={styles.body}>{body}</p>}
        {ctaLabel && (
          <Link to={ctaHref} className={styles.button}>
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Map1.module.css";

const FILTER_ICONS = [
  { src: "/image/icons/zicons/carWash.png", alt: "Car wash" },
  { src: "/image/icons/zicons/EV2.png", alt: "EV" },
  { src: "/image/icons/zicons/toilet.png", alt: "Toilets" },
  { src: "/image/icons/zicons/coffee.png", alt: "Coffee" },
];

function Map1() {
  const navigate = useNavigate();

  return (
    <div className={styles.screen}>
      {/* ---- STATUS BAR ---- */}
<div className={styles.statusBar}>
  <span className={styles.time}>9:41</span>

  <img
    src="/image/icons/zicons/Lev.svg"
    alt="Status levels"
    className={styles.levels}
  />
</div>


      {/* ---- SEARCH BAR + HOME ---- */}
      <div className={styles.searchRow}>
        <div className={styles.searchBox}>
          <img
            src="/image/icons/searchIcon.svg"
            alt="Search"
            className={styles.searchIcon}
          />
          <input
            className={styles.searchInput}
            placeholder="Search for a station"
          />
        </div>

        <button
          className={styles.homeButton}
          onClick={() => navigate("/mobile/home")}
        >
          <img
            src="/image/icons/zicons/house.svg"
            alt="Home"
          />
        </button>
      </div>

      {/* ---- MAP AREA ---- */}
      <div className={styles.mapWrapper}>
        <img
          src="/image/icons/zicons/mapPapakura.png"
          alt="Map"
          className={styles.mapImage}
        />
{/* orange dot */}
        <img
          src="/image/icons/zicons/center.svg"
          alt="station"
          className={styles.stationPin}
          onClick={() => navigate("/mobile/map-kingsway")}
        />

        <img
          src="/image/icons/zicons/centering.svg"
          alt="you are here"
          className={styles.userPin}
        />

        {/* bottom filter bar */}
        <div className={styles.filterBar}>
          {FILTER_ICONS.map((icon, i) => (
            <img
              key={i}
              src={icon.src}
              alt={icon.alt}
              className={styles.filterIcon}
            />
          ))}

          {/* stacked phone + card */}
          <div className={styles.iconStack}>
            <img
              src="/image/icons/zicons/cellPhone.svg"
              alt="Phone"
              className={styles.leftIcon}
            />
            <img
              src="/image/icons/zicons/overlay.svg"
              alt="Card"
              className={styles.rightIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map1;
 
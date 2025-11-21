import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./KingswayMap.module.css";


function KingswayMap() {
  const navigate = useNavigate();

  return (
    <div className={styles.screen}>
      {/* ---- STATUS BAR ---- */}
      <div className={styles.statusBar}>
        <span className={styles.time}>9:41</span>

        <img
          src="/image/icons/zicons/Lev.svg"   // signal + wifi + battery in one icon
          alt="Status levels"
          className={styles.levels}
        />
      </div>

      {/* ---- SEARCH BAR + HOME ---- */}
      <div className={styles.searchRow}>
        <div className={styles.searchBox}>
          <img
            src="/image/icons/zicons/search.png"
            alt="Search"
            className={styles.searchIcon}
          />
          {/* empty input just to keep spacing, you can wire it later */}
          <input
            className={styles.searchInput}
            placeholder=""
          />
        </div>

        <button
          className={styles.homeButton}
          onClick={() => navigate("/home")}
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
          src="/image/icons/zicons/clevedonmap.png"  // your Kingsway map image
          alt="Kingsway Map"
          className={styles.mapImage}
        />

        {/* Z orange station pin */}
        <img
          src="/image/icons/zicons/center.svg"
          alt="Station"
          className={styles.stationPin}
        />

        {/* Blue current-location pin */}
        <img
          src="/image/icons/zicons/centering.svg"
          alt="You are here"
          className={styles.userPin}
        />

        {/* ---- BOTTOM SHEET ---- */}
        <div className={styles.bottomSheet}>
          <button className={styles.bottomClose}>
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default KingswayMap;

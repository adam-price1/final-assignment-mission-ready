import React from "react";
import styles from "./MapZoom.module.css";

function MapZoom() {
  return (
    <div className={styles.stationcard}>
      {/* Header */}
      <h2 className={styles.stationtitle}>Z Kingsway Station</h2>
      <p className={styles.stationaddress}>26 Clevedon Road, Papakura</p>

      {/* Hours */}
      <div className={styles.stationhours}>
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className={styles.stationhoursRow}>
            <span>{day}</span>
            <span>24 Hours</span>
          </div>
        ))}
      </div>

      {/* Service Offers */}
      <p className={styles.stationsectionTitle}>Services Offered</p>

      <div className={styles.stationiconRow}>
        <img src="/image/icons/zicons/toilet.png" alt="Toilet" />
        <img src="/image/icons/zicons/car.png" alt="Car" />
        <img src="/image/icons/zicons/gas.png" alt="Gas" />
        <img src="/image/icons/zicons/ev2.png" alt="EV Charger" />
        <img src="/image/icons/zicons/coffee.png" alt="Coffee" />
      </div>

      {/* ---- PRICE BUTTON ---- */}
      <div className={styles.stationbigButton}>
        <div>
          <p className={styles.stationbtnTitle}>Worried about Prices?</p>
          <a className={styles.stationlink}>Click here</a>
        </div>
        <img src="/image/icons/zicons/money.png" className={styles.stationbtnIcon} />
      </div>

      {/* Contact */}
      <p className={styles.stationsectionTitle}>Contact Store</p>

      <div className={styles.stationphoneRow}>
        <img src="/image/icons/zicons/phone.png" className={styles.stationphoneIcon} />
        <span>09 2988185</span>
      </div>

      {/* Coffee Button */}
      <div className={styles.stationbigButton}>
        <div>
          <p className={styles.stationbtnTitle}>Need more energy?</p>
          <a className={styles.stationlink}>Pre-order Now!</a>
        </div>
        <img src="/image/icons/zicons/coffee-cup.png" className={styles.stationbtnIcon} />
      </div>

      {/* Fuel Button */}
      <div className={styles.stationbigButton}>
        <div>
          <p className={styles.stationbtnTitle}>Out of Fuel?</p>
          <a className={styles.stationlink}>Top up now, Click here!</a>
        </div>
        <img src="/image/icons/zicons/fuel-light.png" className={styles.stationbtnIcon} />
      </div>
    </div>
  );
}

export default MapZoom;

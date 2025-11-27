import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MapZoom.module.css";
import {Link} from "react-router-dom";


function MapZoom() {
  const navigate = useNavigate();
  
  return (
    <div className={styles.screen}>
      {/* ---- MAP AREA ---- */}
      <div className={styles.mapContainer}>
        <img
          src="/image/icons/zicons/maptop.png"
          alt="map"
          className={styles.mapImg}
          
        />

        {/* map marker */}
        <img
          src="/image/icons/zicons/orangepin.png"
          alt="marker"
          className={styles.pin}
           onClick={() => navigate("/mobile/map-kingsway")}
        />
      </div>

       {/* ---- ORANGE PANEL ---- */}
     <div className={styles.panel}>
         <div className={styles.stationcard}>
          <img
            src="/image/icons/zicons/logos_google-maps.svg"
           alt="Open map"
             className={styles.mappin}
            onClick={() => navigate("/mobile/map")}
           /> 

          {/* Header */}
          <h2 className={styles.stationtitle}>Z Kingsway Station</h2>
          <p className={styles.stationaddress}>
            26 Clevedon Road, Papakura
          </p>

          {/* Hours */}
          <div className={styles.stationhours}>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className={styles.stationhoursRow}>
                <span>{day}</span>
                <span>24 Hours</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Offers */}
        <p className={styles.stationsectionTitle}>Services Offered</p>

        <div className={styles.stationiconRow}>
          <img src="/image/icons/zicons/toilet.png" alt="Toilet" />
          <img src="/image/icons/zicons/Gas.png" alt="Gas" />
          <img src="/image/icons/zicons/coffee.png" alt="Coffee" />
          <img src="/image/icons/zicons/atm.png" alt="ATM" />
        </div>

        {/* ---- PRICE BUTTON ---- */}
        <div className={styles.stationbigButton}>
          <div>
            <p className={styles.stationbtnTitle}>Worried about Prices?</p>
           <Link
     to="/price-compare"
    className={styles.stationlink}
  >
    Click here
  </Link>
          </div>
          <img
            src="/image/icons/zicons/dollarsign.svg"
            className={styles.stationbtnIcon}
            alt="Dollar sign"
          />
        </div>

        {/* Contact */}
        <p className={styles.stationsectionTitle}>Contact Store</p>

        <div className={styles.stationphoneRow}>
          <img
            src="/image/icons/zicons/phone.png"
            className={styles.stationphoneIcon}
            alt="Phone"
          />
          <span>09 2988185</span>
        </div>

        {/* Coffee Button */}
        <div className={styles.stationbigButton}>
          <div>
            <p className={styles.stationbtnTitle}>Need more energy?</p>
            <a className={styles.stationlink}>Pre-order Now!</a>
          </div>
          <img
            src="/image/icons/zicons/blackcoffee.svg"
            className={styles.stationbtnIcon}
            alt="Coffee"
          />
        </div>

        {/* Fuel Button */}
        <div className={styles.stationbigButton}>
          <div>
            <p className={styles.stationbtnTitle}>Out of Fuel?</p>
            <a className={styles.stationlink}>Top up now, Click here!</a>
          </div>
          <img
            src="/image/icons/zicons/emptytank.svg"
            className={styles.stationbtnIcon}
            alt="Empty tank"
          />
        </div>
      </div>
    </div>
  );
}

export default MapZoom;

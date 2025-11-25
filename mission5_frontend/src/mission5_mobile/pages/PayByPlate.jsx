import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./PayByPlate.module.css";


export default function PayByPlate() {
  const navigate =useNavigate();

  const goBack = () => navigate(-1);
  const goAddVehicle =() => navigate("/mobile/add-vehical");
  const goHowItWorks =() => navigate("/mobile/howitworks");


  return(
    <div className={styles.screen}>
      {/* status bar */}
      <div className={styles.statusBar}>
        <span className={styles.time}>9:41</span>
        <img
        src="/image/icons/zicons/Lev.svg"
        alt="status icons"
        className={styles.statusIcons}
        />
      </div>

        {/*top bar  */}
        <div className={styles.topBar}>
          <button
          type="button"
          className={styles.backBtn}
            onClick={goBack}
            aria-label="Back"
            >
            <img
            src="/image/icons/zicons/mobilearrow.svg"
            alt="back"
            className={styles.backIcon}
            />
          </button>

           <img
           src="/image/icons/zicons/credit.svg" 
           alt="credit card"
           className={styles.topicon}
           />
           <span className={styles.topTitle}>Pay By Plate</span>
        </div>

        {/* intro text */}
        <p className={styles.subtitle}>
          Register your vehicle number plate for a free fueling
          next time you visit Z
        </p>

        {/* tabs */}
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.activeTab}`}>
            My vehicle
          </button>
          <button className={styles.tab} onClick={goHowItWorks}>
            How it works
          </button>
        </div>

        {/* enpty state */}
        <div className={styles.emptyState}>
          <img
          src="/image/icons/zicons/CarDrifting.svg"
          alt="car"
          className={styles.carImage}
          />
          <p className={styles.emptyText}>
            You don't have any registered vehicles
          </p>
          <button
          type="button"
          className={styles.goAddVehicleBtn}
          onClick={goAddVehicle}
          >
            +Add vehicle
          </button>
        </div>
    </div>
  );
}

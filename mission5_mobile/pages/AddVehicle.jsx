import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddVehicle.module.css";

export default function AddVehicle() {
  const navigate = useNavigate();
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [confirmDetails, setConfirmDetails] = useState(false);

  const FUEL_TYPES = [
    { id: 1, label: "Z 91", small: "Z 91" },
    { id: 2, label: "Z X 95", small: "Z X 95" },
    { id: 3, label: "Z D", small: "Z D" },
  ];

  return (
    <div className={styles.screen}>
      {/* ---- HEADER ---- */}
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          ←
        </button>
        <img
          src="/image/icons/zicons/car.png"
          alt="car"
          className={styles.headerIcon}
        />
        <span className={styles.headerTitle}>Vehicle preferences</span>
      </div>

      {/* ---- NUMBER PLATE ---- */}
      <div className={styles.section}>
        <p className={styles.label}>Number plate</p>
        <p className={styles.sublabel}>Please enter your plate number</p>

        <div className={styles.plateBox}>Z E D 1 2 3</div>
      </div>

      {/* ---- FUEL TYPE ---- */}
      <div className={styles.section}>
        <p className={styles.label}>Fuel type</p>
        <p className={styles.sublabel}>Please select your fuel type</p>

        <div className={styles.fuelRow}>
          {FUEL_TYPES.map((fuel) => (
            <div
              key={fuel.id}
              className={`${styles.fuelCard} ${
                selectedFuel === fuel.id ? styles.fuelSelected : ""
              }`}
              onClick={() => setSelectedFuel(fuel.id)}
            >
              <div className={styles.fuelIcon}>⛽</div>
              <p className={styles.fuelSmall}>{fuel.small}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---- PAYMENT METHOD ---- */}
      <div className={styles.paymentRow}>
        <div className={styles.paymentLeft}>
          <img
            src="/image/icons/zicons/card.png"
            alt="card"
            className={styles.paymentIcon}
          />
          <div>
            <p className={styles.paymentTitle}>Payment method</p>
            <p className={styles.paymentSubtitle}>
              Please select your payment type
            </p>
          </div>
        </div>
        <button className={styles.addBtn}>+ Add</button>
      </div>

      <hr className={styles.divider} />

      {/* ---- CONFIRM ON ARRIVAL ---- */}
      <div className={styles.toggleRow}>
        <div className={styles.toggleLeft}>
          <img
            src="/image/icons/zicons/bell.png"
            alt="bell"
            className={styles.bellIcon}
          />
          <div>
            <p className={styles.toggleTitle}>
              Confirm my details on arrival
            </p>
            <p className={styles.toggleSubtitle}>
              Recognise my plate but don’t want to authorise the pump automatically
            </p>
          </div>
        </div>

        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={confirmDetails}
            onChange={() => setConfirmDetails(!confirmDetails)}
          />
          <span className={styles.slider}></span>
        </label>
      </div>

      <hr className={styles.divider} />

      {/* ---- SAVE BUTTON ---- */}
      <button className={styles.saveBtn}>Save</button>
    </div>
  );
}

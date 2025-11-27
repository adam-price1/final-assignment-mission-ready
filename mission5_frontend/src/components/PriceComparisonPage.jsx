import React, { useState, useEffect } from "react";
import styles from "./PriceComparisonPage.module.css";

import bannerTop from "../assets/banner/2.png";
import bannerHero from "../assets/banner/3.png";
import zLogo from "../assets/banner/4.png";

const PriceComparisonPage = () => {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const [stations, setStations] = useState([]); // backend data
  const [results1, setResults1] = useState([]);
  const [results2, setResults2] = useState([]);

  const [loading, setLoading] = useState(true);

  /* ---------------------- FETCH FROM BACKEND ---------------------- */
  useEffect(() => {
    fetch("http://localhost:4000/api/custom/compare-prices")
      .then((res) => res.json())
      .then((data) => {
        console.log("Backend prices:", data);
        setStations(data.prices || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load backend data:", err);
        setLoading(false);
      });
  }, []);

  /* ---------------------- FIND MATCHING STATIONS ---------------------- */
  const findStations = (input) => {
    const searchTerm = input.trim().toLowerCase();
    if (!searchTerm) return [];

    return stations.filter(
      (station) =>
        station.stationName?.toLowerCase().includes(searchTerm) ||
        station.area?.toLowerCase().includes(searchTerm)
    );
  };

  const handleSearch1 = () => setResults1(findStations(address1));
  const handleSearch2 = () => setResults2(findStations(address2));

  if (loading) {
    return (
      <div className={styles.pageWrapper}>
        <p>Loading fuel prices...</p>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      {/* Top banner */}
      <section className={styles.topBanner}>
        <img src={bannerTop} alt="Fuel Your Savings" />
      </section>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img src={bannerHero} alt="Banner" className={styles.heroImage} />
      </section>

      <section className={styles.whiteSection}>
        <h2 className={styles.sectionTitle}>Compare Prices Across Stations</h2>

        {/* First Search */}
        <div className={styles.searchGroup}>
          <input
            type="text"
            placeholder="Enter address"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
          <button onClick={handleSearch1}>Search</button>
        </div>

        {/* Results 1 */}
        <div className={styles.cardGrid}>
          {results1.map((station, idx) => (
            <div key={idx} className={styles.stationBlock}>
              <h3 className={styles.stationName}>{station.stationName}</h3>

              <div className={styles.stationGroup}>
                {station.fuels?.map((fuel, i) => (
                  <div key={i} className={styles.fuelCard}>
                    <div className={styles.cardHeader}>
                      <img src={zLogo} alt="Z logo" />
                      <span>{fuel.fuelType}</span>
                    </div>
                    <p className={styles.price}>${fuel.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Second Search */}
        <div className={styles.searchGroup}>
          <input
            type="text"
            placeholder="Enter second address"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
          <button onClick={handleSearch2}>Search</button>
        </div>

        {/* Results 2 */}
        <div className={styles.cardGrid}>
          {results2.map((station, idx) => (
            <div key={idx} className={styles.stationBlock}>
              <h3 className={styles.stationName}>{station.stationName}</h3>

              <div className={styles.stationGroup}>
                {station.fuels?.map((fuel, i) => (
                  <div key={i} className={styles.fuelCard}>
                    <div className={styles.cardHeader}>
                      <img src={zLogo} alt="Z logo" />
                      <span>{fuel.fuelType}</span>
                    </div>
                    <p className={styles.price}>${fuel.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PriceComparisonPage;

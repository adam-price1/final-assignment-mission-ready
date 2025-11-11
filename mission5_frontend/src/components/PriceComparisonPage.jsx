import React, { useState } from "react";
import styles from "./PriceComparisonPage.module.css";

export default function PriceComparisonPage() {
  const [address, setAddress] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Approximate Z station coordinates + mock prices
  const stations = [
    { id: 1, name: "Z Albany", lat: -36.726, lon: 174.707, price: 2.87 },
    { id: 2, name: "Z New Lynn", lat: -36.907, lon: 174.683, price: 2.93 },
    { id: 3, name: "Z Sylvia Park", lat: -36.918, lon: 174.838, price: 2.98 },
    { id: 4, name: "Z Henderson", lat: -36.87, lon: 174.628, price: 3.07 },
    { id: 5, name: "Z Westgate", lat: -36.802, lon: 174.62, price: 2.01 },
    { id: 6, name: "Z Ponsonby", lat: -36.85, lon: 174.742, price: 2.95 },
  ];

  // Convert address → coordinates using OpenStreetMap
  const getCoordinatesFromAddress = async (address) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );
    const data = await res.json();
    if (data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
      };
    }
    throw new Error("Address not found");
  };

  // Haversine formula to calculate distance (km)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  // Main search
  const handleSearch = async () => {
    if (!address.trim()) return alert("Please enter an address.");
    setLoading(true);
    try {
      const { lat, lon } = await getCoordinatesFromAddress(address);
      const sorted = stations
        .map((s) => ({
          ...s,
          distance: calculateDistance(lat, lon, s.lat, s.lon).toFixed(1),
          color: s.price < 2.9 ? "green" : s.price > 3 ? "orange" : "yellow",
        }))
        .sort((a, b) => a.distance - b.distance);
      setResults(sorted);
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <header className={styles.header}>
        <h1>Fuel Your Savings - Compare Prices Now!</h1>
      </header>

      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <h2>Compare Prices Across Stations</h2>
          </div>
          <div className={styles.heroRight}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Gas_station_pump.jpg/800px-Gas_station_pump.jpg"
              alt="Fuel pump"
            />
          </div>
        </section>

        {/* Search Section */}
        <section className={styles.comparison}>
          <h3>Compare Prices Across Stations</h3>
          <div className={styles.searchRow}>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address or suburb"
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          {loading && (
            <p className={styles.loading}>Searching nearby stations...</p>
          )}

          {results.length > 0 && (
            <div className={styles.cardGrid}>
              {results.map((card) => (
                <div
                  key={card.id}
                  className={`${styles.card} ${styles[card.color]}`}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Z_Energy_logo.svg/1200px-Z_Energy_logo.svg.png"
                    alt="Z logo"
                  />
                  <h4>{card.name}</h4>
                  <p>{card.distance} km away</p>
                  <h5>${card.price.toFixed(2)} per litre</h5>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added
import styles from "./PriceCompare.module.css";

export default function PriceCompare() {
  const [addressA, setAddressA] = useState("");
  const [addressB, setAddressB] = useState("");
  const navigate = useNavigate(); // ✅ Added

  const stations = [
    {
      name: "Z Papakura Station",
      address: "254 Great South Road, Takanini",
      region: "takanini papakura south auckland",
      lat: -37.04,
      lng: 174.9,
      fuel: { 91: 264.9, 95: 282.9, diesel: 275.9 },
    },
    {
      name: "Z Kingsway Station",
      address: "26 Clevedon Road, Papakura",
      region: "papakura clevedon south auckland",
      lat: -37.062,
      lng: 174.94,
      fuel: { 91: 297.9, 95: 316.9, diesel: 289.9 },
    },
    {
      name: "Z Manukau City",
      address: "15 Cavendish Drive, Manukau",
      region: "manukau south auckland",
      lat: -36.99,
      lng: 174.88,
      fuel: { 91: 279.9, 95: 298.9, diesel: 268.9 },
    },
    {
      name: "Z Mt Wellington",
      address: "519 Ellerslie Panmure Hwy, Mt Wellington",
      region: "mt wellington east auckland ellerslie panmure",
      lat: -36.905,
      lng: 174.84,
      fuel: { 91: 288.9, 95: 304.9, diesel: 272.9 },
    },
    {
      name: "Z Albany",
      address: "12 Don McKinnon Drive, Albany",
      region: "albany north shore auckland",
      lat: -36.721,
      lng: 174.7,
      fuel: { 91: 281.9, 95: 299.9, diesel: 270.9 },
    },
    {
      name: "Z Glenfield",
      address: "414 Glenfield Road, Glenfield",
      region: "glenfield north shore auckland",
      lat: -36.785,
      lng: 174.73,
      fuel: { 91: 283.9, 95: 302.9, diesel: 272.9 },
    },
    {
      name: "Z Takapuna",
      address: "75 Barry's Point Road, Takapuna",
      region: "takapuna milford north shore auckland",
      lat: -36.8,
      lng: 174.76,
      fuel: { 91: 286.9, 95: 305.9, diesel: 273.9 },
    },
    {
      name: "Z Henderson Valley",
      address: "130 Henderson Valley Road, Henderson",
      region: "henderson west auckland",
      lat: -36.867,
      lng: 174.63,
      fuel: { 91: 285.9, 95: 307.9, diesel: 273.9 },
    },
  ];

  const fakeCoordsFromText = (text) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) hash += text.charCodeAt(i);
    return { lat: -37.0 + (hash % 100) / 600, lng: 174.8 + (hash % 100) / 700 };
  };

  const roughDistance = (lat1, lng1, lat2, lng2) =>
    Math.sqrt(Math.pow(lat1 - lat2, 2) + Math.pow(lng1 - lng2, 2));

  const getBestStation = (query) => {
    if (!query.trim()) return null;
    const q = query.toLowerCase().trim();
    const userCoords = fakeCoordsFromText(query);
    let best = null;
    let bestScore = -9999;

    stations.forEach((s) => {
      let score = 0;

      if (s.region.includes(q)) score += 60;
      const words = q.split(" ");
      words.forEach((w) => {
        if (s.region.includes(w)) score += 25;
        if (s.name.toLowerCase().includes(w)) score += 15;
        if (s.address.toLowerCase().includes(w)) score += 10;
      });

      const dist = roughDistance(userCoords.lat, userCoords.lng, s.lat, s.lng);
      const distanceScore = 80 - dist * 100;
      const total = score + distanceScore;

      if (total > bestScore) {
        bestScore = total;
        best = s;
      }
    });

    return best;
  };

  const stationA = getBestStation(addressA);
  const stationB = getBestStation(addressB);

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <img
          src="/image/zicons/home.png"
          className={styles.homeIcon}
          alt="Home"
          onClick={() => navigate("/mobile/home")} // ✅ Route to /mobile/home
        />
        <h2 className={styles.title}>Price Comparison</h2>
      </div>

      <div className={styles.searchRow}>
        <input
          className={styles.input}
          placeholder="Enter Address"
          value={addressA}
          onChange={(e) => setAddressA(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder="Enter Address"
          value={addressB}
          onChange={(e) => setAddressB(e.target.value)}
        />
      </div>

      <FuelSection title="91 Fuel" a={stationA} b={stationB} type="91" />
      <FuelSection title="95 Fuel" a={stationA} b={stationB} type="95" />
      <FuelSection title="Diesel" a={stationA} b={stationB} type="diesel" />
    </div>
  );
}

function FuelSection({ title, a, b, type }) {
  const cards = [a, b].filter(Boolean);
  const isSingle = cards.length === 1;

  return (
    <>
      <div className={styles.fuelTitle}>{title}</div>
      <div
        className={`${styles.cardRow} ${isSingle ? styles.singleCenter : ""}`}
      >
        {a && <FuelCard station={a} type={type} />}
        {b && <FuelCard station={b} type={type} />}
      </div>
    </>
  );
}

function FuelCard({ station, type }) {
  const fuelIcons = {
    91: "/image/zicons/z91.png",
    95: "/image/zicons/z95.png",
    diesel: "/image/zicons/zd.png",
  };

  const priceColor =
    type === "91" ? "#3bd36b" : type === "95" ? "#ff6900" : "#3bd36b";

  return (
    <div className={styles.card}>
      <img src="/image/zicons/zlogo.png" className={styles.logo} alt="Z logo" />
      <div className={styles.station}>{station.name}</div>
      <div className={styles.address}>{station.address}</div>

      <div className={styles.pricePill} style={{ backgroundColor: priceColor }}>
        ${station.fuel[type]} per liter
      </div>

      <img src={fuelIcons[type]} alt={type} className={styles.fuelIcon} />

      <button className={styles.topUpBtn}>Top up</button>
    </div>
  );
}

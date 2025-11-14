
import { useMemo, useEffect } from "react";

import React from "react";
import styles from "./FindFuelStation.module.css";

// leaflet
import {MapContainer, TileLayer, Marker, Popup, useMap} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// default marker
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
L.Marker.prototype.options.icon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const ICONS = {
  car: "/image/icons/zicons/car.png",
  toilet: "/image/icons/zicons/toilet.png",
  gas: "/image/icons/zicons/Gas.png",
  EV2: "/image/icons/zicons/EV2.png",
  carwash: "/image/icons/zicons/carWash.png",
  coffeecup: "/image/icons/zicons/coffee.png",
  atm: "/image/icons/zicons/atm.png",
  phone: "/image/icons/zicons/phone.png",
  Search: "/image/icons/zicons/search.png",

};

const STATIONS = [
  {
    id: 1,
    name: "Z Kingsway Station",
    address: "26 Clevedon Road, Papakura",
    phone: "09 2988185",
    hours: { Sun:"24 Hours", Mon:"24 Hours", Tue:"24 Hours", Wed:"24 Hours", Thu:"24 Hours", Fri:"24 Hours", Sat:"24 Hours" },
    features: ["toilet", "gas", "coffeecup", "atm"],
    lat:-37.0625, lng:174.9445,
  },
  {
    id: 2,
    name: "Z Papakura North",
    address: "26 Clevedon Road, Papakura",
    phone: "09 2988185",
    hours: { Sun:"24 Hours", Mon:"24 Hours", Tue:"24 Hours", Wed:"24 Hours", Thu:"24 Hours", Fri:"24 Hours", Sat:"24 Hours" },
    features: ["toilet", "gas", "coffeecup", "atm"],
    lat:-37.056, lng:174.94,
  },
];


function SearchBar() {
  return (
    <div className={styles.searchBar}>
     
      <input placeholder="Enter Your Location" />
    </div>
  );
}

function FeatureIcons({ features }) {
  return (
    <div className={styles.features}>
      {features.map((key) => (
        <img key={key} src={ICONS[key]} alt={key} className={styles.featureIcon} />
      ))}
    </div>
  );
}

/* Fit map to markers */
function FitToMarkers({ stations }) {
  const map = useMap();

  const bounds = useMemo(() => {
    const b = L.latLngBounds([]);
    stations.forEach(s => b.extend([s.lat, s.lng]));
    return b;
  }, [stations]);

  useEffect(() => {
    if (!stations.length) return;
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map, bounds, stations.length]);

  return null;
}



function StationMap({ stations }) {
  const center = stations.length ? [stations[0].lat, stations[0].lng] : [-36.85, 174.76];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "480px", width: "100%", borderRadius: "16px",  }}
      scrollWheelZoom
      className={styles.mapBox} // keep this too; we’ll move back to CSS after it works
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitToMarkers stations={stations} />
      {stations.map(s => (
        <Marker key={s.id} position={[s.lat, s.lng]}>
          <Popup>
            <strong>{s.name}</strong><br />
            {s.address}<br />
            {s.phone}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}


function StationCard({ s }) {
  return (
    <article className={styles.card}>
      <header className={styles.cardHead}>
        <div className={styles.cardGrid}>

          <div className={styles.leftCol}>
            <h3 className={styles.cardTitle}>{s.name}</h3>
            <div className={styles.cardAddr}>{s.address}</div>
      {/* icons on cards */}
        <FeatureIcons features={s.features} />

          </div>
        </div>
      </header>


      {/* compact hours block – sits top-right */}
      <div className={styles.hoursWrap}>
        {Object.entries(s.hours).map(([day, h]) => (
          <div key={day} className={styles.hourRow}>
            <span className={styles.day}>{day}</span>
            <span className={styles.time}>{h}</span>
          </div>
        ))}
      </div>


      <div className={styles.contact}>
        <span className ={styles.contactLabel}>Contact Store</span>
        <div className={styles.phoneRow}>
          <img src={ICONS.phone} className={styles.smallIcon} alt="" />
          <span>{s.phone}</span>
        </div>
      </div>
    </article>
  );
}

export default function FindFuelStation() {

  

 
  return (
    <main className={styles.container}>
      <section
  className={styles.hero}
  style={{
    backgroundImage: "url('/image/banners/banner.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <h1 className={styles.heroTitle}>Find a Fuel Station</h1>
</section>

      <SearchBar />

      <div className={styles.grid}>
        <section className={styles.listCol}>
          {STATIONS.map((s) => (
            <StationCard key={s.id} s={s} />
          ))}
        </section>
<section className ={styles.mapCol}>
  <StationMap stations={STATIONS} />
</section>
        
      </div>
    </main>
  );
}

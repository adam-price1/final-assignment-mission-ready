// mobile.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./MobileOverlay.module.css";

/* --- IMPORT ALL MOBILE PAGES --- */
import AddCardDetails from "./pages/AddCardDetails";
import AddVehicle from "./pages/AddVehicle";
import CardSuccess from "./pages/CardSuccess";
import ColdDrinkDetails from "./pages/ColdDrinkDetails";
import ColdDrinksPage from "./pages/ColdDrinksPage";
import ConfirmOrderPage from "./pages/ConfirmOrderPage";
import DeclinedOverlayMobile from "./pages/DeclinedOverlayMobile";
import FoodDetails from "./pages/FoodDetails";
import FoodPage from "./pages/FoodPage";
import HomePage from "./pages/HomePage";
import HotDrinkDetails from "./pages/HotDrinkDetails";
import HotDrinksPage from "./pages/HotDrinksPage";
import KingswayMap from "./pages/KingswayMap";
import Map1 from "./pages/Map1";
import MapZoom from "./pages/MapZoom";
import MoreMenu from "./pages/MoreMenu";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import Onboarding4 from "./pages/Onboarding4";
import OrderFoodHome from "./pages/OrderFoodHome";
import PayByPlate from "./pages/PayByPlate";
import PriceCompare from "./pages/PriceCompare";
import ScanQRCode from "./pages/ScanQRCode";
import Sharetank from "./pages/Sharetank";
import SignUp1 from "./pages/SignUp1";
import SignUp2 from "./pages/SignUp2";
import ThankYouPage from "./pages/ThankYouPage";
import TopUpOverlay from "./pages/TopUpOverlay";
import VegetarianFoodPage from "./pages/VegetarianFoodPage";
import HowItWorksPage from "./pages/HowItWorksPage";


/* --- FOOTER (bottom tabs) --- */
function MobileFooter() {
  return (
    <footer className={styles.mobileFooter}>
      <div className={styles.footerIcons}>
        <Link to="/mobile/home" className={styles.footerBtn}>🏠 Home</Link>
        <Link to="/mobile/map" className={styles.footerBtn}>🗺️ Map</Link>
        <Link to="/mobile/orders" className={styles.footerBtn}>🛍️ Orders</Link>
        <Link to="/mobile/more" className={styles.footerBtn}>⚙️ More</Link>
      </div>
    </footer>
  );
}

export default function MobileApp() {
  return (
    <div className={styles.screenBg}>
      <div className={styles.card}>
        <Routes>

          {/* Onboarding Flow */}
          <Route index element={<Onboarding1 />} />
          <Route path="onboarding2" element={<Onboarding2 />} />
          <Route path="onboarding3" element={<Onboarding3 />} />
          <Route path="onboarding4" element={<Onboarding4 />} />

          {/* Main Screens */}
          <Route path="home" element={<HomePage />} />
          <Route path="food" element={<FoodPage />} />
          <Route path="food/:id" element={<FoodDetails />} />

          <Route path="cold-drinks" element={<ColdDrinksPage />} />
          <Route path="cold-drink/:id" element={<ColdDrinkDetails />} />

          <Route path="hot-drinks" element={<HotDrinksPage />} />
          <Route path="hot-drink/:id" element={<HotDrinkDetails />} />

          <Route path="order-food-home" element={<OrderFoodHome />} />

          {/* Map Screens */}
          <Route path="map" element={<Map1 />} />
          <Route path="map-zoom" element={<MapZoom />} />
          <Route path="map-kingsway" element={<KingswayMap />} />



          {/* Payments / Cards */}
          <Route path="add-card" element={<AddCardDetails />} />
          <Route path="card-success" element={<CardSuccess />} />
          <Route path="add-vehicle" element={<AddVehicle />} />
          <Route path="pay-by-plate" element={<PayByPlate />} />
          <Route path="order-confirm" element={<ConfirmOrderPage />} />
          <Route path="declined" element={<DeclinedOverlayMobile />} />
          <Route path="topup" element={<TopUpOverlay />} />

          {/* QR + Sharetank */}
          <Route path="scan" element={<ScanQRCode />} />
          <Route path="sharetank" element={<Sharetank />} />
          <Route path="howitworks" element={<HowItWorksPage />} />

          {/* Signup */}
          <Route path="signup1" element={<SignUp1 />} />
          <Route path="signup2" element={<SignUp2 />} />

          {/* Extras */}
          <Route path="thanks" element={<ThankYouPage />} />
          <Route path="veg-food" element={<VegetarianFoodPage />} />

          {/* Orders Placeholder */}
          <Route
            path="orders"
            element={
              <div style={{ padding: 24, textAlign: "center" }}>
                📦 No recent orders
              </div>
            }
          />

          {/* Fallback Route */}
          <Route
            path="*"
            element={
              <div style={{ padding: 24, textAlign: "center" }}>
                ❗ Mobile route not found
              </div>
            }
          />
        </Routes>

        {/* Bottom Navigation */}
        <MobileFooter />
      </div>
    </div>
  );
}

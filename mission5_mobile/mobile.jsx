// mobile.jsx
import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import styles from "./MobileOverlay.module.css";

/* IMPORT ALL PAGES */
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


import PaymentLoading from "./pages/PaymentLoading";


/* FOOTER */


/* --- FOOTER COMPONENT --- */
//  bef84af1ecff9cc0cd69589cfd7d87003047596e
function MobileFooter() {
  return (
    <footer className={styles.mobileFooter}>
      <div className={styles.footerIcons}>
        <Link to="/mobile/home" className={styles.footerBtn}>
          <img
            src="/image/icons/zicons/house.svg"
            alt="Home"
            className={styles.tabIconImg}
          />
          <span className={styles.footerLabel}>Home</span>
        </Link>

        <Link to="/mobile/scan" className={styles.footerBtn}>
          <img
            src="/image/icons/qrcode.svg"
            alt="QR"
            className={styles.tabIconImg}
          />
          <span className={styles.footerLabel}>QR Code</span>
        </Link>

        <Link to="/mobile/sharetank" className={styles.footerBtn}>
          <img
            src="/image/icons/zicons/appfueltank.svg"
            alt="Sharetank"
            className={styles.tabIconImg}
          />
          <span className={styles.footerLabel}>ShareTank</span>
        </Link>

        <Link to="/mobile/more" className={styles.footerBtn}>
          <img
            src="/image/icons/zicons/hamburger.svg"
            alt="More"
            className={styles.tabIconImg}
          />
          <span className={styles.footerLabel}>More</span>
        </Link>
      </div>
    </footer>
  );
}

export default function MobileApp() {
  const location = useLocation();

  const hiddenFooterRoutes = [
    "/mobile",
    "/mobile/onboarding1",
    "/mobile/onboarding2",
    "/mobile/onboarding3",
    "/mobile/onboarding4",

    "/mobile/signup1",
    "/mobile/signup2",

    "/mobile/add-card",
    "/mobile/card-success",
    "/mobile/loading",
    "/mobile/order-confirm",
    "/mobile/declined",
    "/mobile/topup",

    "/mobile/add-vehicle",

    "/mobile/paybyplate",
    "/mobile/howitworks", // if separate page exists

 


    "/mobile/map",
    "/mobile/map-zoom",
    "/mobile/map-kingsway",

    "/mobile/price-compare",
    "/mobile/scan",
    "/mobile/more",
  ];

  const hideFooter = hiddenFooterRoutes.includes(location.pathname);

  return (
    <div className={styles.screenBg}>
      <div className={`${styles.card} ${hideFooter ? styles.noFooter : ""}`}>
        <Routes>
          {/* Onboarding */}
          <Route index element={<Onboarding1 />} />
          <Route path="onboarding1" element={<Onboarding1 />} />
          <Route path="onboarding2" element={<Onboarding2 />} />
          <Route path="onboarding3" element={<Onboarding3 />} />
          <Route path="onboarding4" element={<Onboarding4 />} />

          {/* Main */}
          <Route path="home" element={<HomePage />} />
          <Route path="food" element={<FoodPage />} />
          <Route path="food/:id" element={<FoodDetails />} />

          <Route path="cold-drinks" element={<ColdDrinksPage />} />
          <Route path="cold-drink/:id" element={<ColdDrinkDetails />} />

          <Route path="hot-drinks" element={<HotDrinksPage />} />
          <Route path="hot-drink/:id" element={<HotDrinkDetails />} />

          <Route path="order-food-home" element={<OrderFoodHome />} />

          {/* Maps */}
          <Route path="map" element={<Map1 />} />
          <Route path="map-zoom" element={<MapZoom />} />
          <Route path="map-kingsway" element={<KingswayMap />} />

          {/* Payment */}
          <Route path="add-card" element={<AddCardDetails />} />
          <Route path="card-success" element={<CardSuccess />} />
          <Route path="add-vehicle" element={<AddVehicle />} />
          <Route path="paybyplate" element={<PayByPlate />} />
          <Route path="order-confirm" element={<ConfirmOrderPage />} />
          <Route path="declined" element={<DeclinedOverlayMobile />} />
          <Route path="topup" element={<TopUpOverlay />} />
          <Route path="loading" element={<PaymentLoading />} />

          {/* QR + Sharetank */}
          <Route path="scan" element={<ScanQRCode />} />
          <Route path="sharetank" element={<Sharetank />} />
          <Route path="howitworks" element={<HowItWorksPage />} />

          {/* Signup */}
          <Route path="signup1" element={<SignUp1 />} />
          <Route path="signup2" element={<SignUp2 />} />

          {/* Extras */}
          <Route path="veg-food" element={<VegetarianFoodPage />} />
          <Route path="thanks" element={<ThankYouPage />} />

          <Route path="price-compare" element={<PriceCompare />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div style={{ padding: 24, textAlign: "center" }}>
                ❗ Mobile route not found
              </div>
            }
          />
        </Routes>

        {!hideFooter && <MobileFooter />}
      </div>
    </div>
  );
}

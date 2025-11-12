import "./App.css";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

// -- Header & Footer Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// -- Order Online Overlay Components
import DeclinedOverlayPage from "./components/OrderOnline/OverlayComponents/DeclinedOverlayPage";
import OrderConfirmOverlay from "./components/OrderOnline/OverlayComponents/OrderConfirmOverlay";
import PaymentOverlay from "./components/OrderOnline/OverlayComponents/PaymentOverlay";

// -- Main App Pages
import Homepage from "./components/Homepage";
import CreateAccount from "./components/CreateAccount";
import PriceComparisonPage from "./components/PriceComparisonPage";
import FindFuelStation from "./components/FindFuelStation";
import LandingPage from "./components/OrderOnline/LandingPage";
import SelectionPage from "./components/OrderOnline/SelectionPage";
import LoginPage from "./components/LoginPage";
import SharetankPage from "./components/SharetankPage";

function App() {
  // ✅ Detect current route to hide header/footer on overlays
  const location = useLocation();
  const excludedRoutes = ["/payment", "/order-confirm", "/declined"];

  return (
    <>
      {/* ✅ Header hidden on overlay routes */}
      {!excludedRoutes.includes(location.pathname) && <Header />}

      <Routes>
        {/* 🌐 Main Pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/price-comparison" element={<PriceComparisonPage />} />
        <Route path="/find-station" element={<FindFuelStation />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sharetank" element={<SharetankPage />} />

        {/* 💳 Overlay Pages (no header/footer) */}
        <Route path="/payment" element={<PaymentOverlay />} />
        <Route path="/order-confirm" element={<OrderConfirmOverlay />} />
        <Route path="/declined" element={<DeclinedOverlayPage />} />
      </Routes>

      {/* ✅ Footer hidden on overlay routes */}
      {!excludedRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

// ✅ Wrap App in BrowserRouter (for useLocation to work)
export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

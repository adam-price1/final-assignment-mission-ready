import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

/* Header & Footer */
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Header1 from "./components/Header/Header1";

/* Overlays (no header/footer) */
import DeclinedOverlayPage from "./components/OrderOnline/OverlayComponents/DeclinedOverlayPage";
import OrderConfirmOverlay from "./components/OrderOnline/OverlayComponents/OrderConfirmOverlay";
import PaymentOverlay from "./components/OrderOnline/OverlayComponents/PaymentOverlay";

/* Desktop pages */
import Homepage from "./components/Homepage";
import CreateAccount from "./components/CreateAccount";
import PriceComparisonPage from "./components/PriceComparisonPage";
import FindFuelStation from "./components/FindFuelStation";
import LandingPage from "./components/OrderOnline/LandingPage";
import SelectionPage from "./components/OrderOnline/SelectionPage";
import LoginPage from "./components/LoginPage";
import SharetankPage from "./components/SharetankPage";

/* Desktop Payment Page */
import PaymentPage from "./components/PaymentPage";

/* Mobile site */
import MobileApp from "./mission5_mobile/mobile.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  /* Routes where header/footer should not show */
  const excludedRoutes = [
    "/payment",
    "/order-confirm",
    "/declined",
    "/mobile",
    "/payment-page",
  ];

  useEffect(() => {
    const handleResize = () => {
      const isMobile =
        window.innerWidth <= 768 ||
        /iPhone|Android|Mobile/i.test(navigator.userAgent);

      const onMobilePath = location.pathname.startsWith("/mobile");

      /* Keep same route when switching */
      const current = location.pathname.replace("/mobile", "");

      if (isMobile && !onMobilePath) {
        navigate("/mobile" + current, { replace: true });
      } else if (!isMobile && onMobilePath) {
        navigate(current === "" ? "/" : current, { replace: true });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [location.pathname, navigate]);

  /* Check if header/footer should be hidden */
  const isExcludedRoute = excludedRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!isExcludedRoute && <Header />}
      {!isExcludedRoute && <Header1 />}

      <Routes>
        {/* Desktop pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/selection" element={<SelectionPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/price-comparison" element={<PriceComparisonPage />} />
        <Route path="/find-station" element={<FindFuelStation />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sharetank" element={<SharetankPage />} />

        {/* Desktop payment page */}
        <Route path="/payment-page" element={<PaymentPage />} />

        {/* Overlays */}
        <Route path="/payment" element={<PaymentOverlay />} />
        <Route path="/order-confirm" element={<OrderConfirmOverlay />} />
        <Route path="/declined" element={<DeclinedOverlayPage />} />

        {/* Mobile site */}
        <Route path="/mobile/*" element={<MobileApp />} />
      </Routes>

      {!isExcludedRoute && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

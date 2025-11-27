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

/* Desktop pages */
import Homepage from "./components/Homepage";
import CreateAccount from "./components/CreateAccount";
import PriceComparisonPage from "./components/PriceComparisonPage";
import FindFuelStation from "./components/FindFuelStation";
import LandingPage from "./components/OrderOnline/LandingPage";
import SelectionPage from "./components/OrderOnline/SelectionPage";
import LoginPage from "./components/LoginPage";
import SharetankPage from "./components/SharetankPage";
import PaymentPage from "./components/PaymentPage";

/* Mobile site */
import MobileApp from "./mission5_mobile/mobile.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  /* MOBILE REDIRECT HANDLER */
  useEffect(() => {
    const handleResize = () => {
      const isMobile =
        window.innerWidth <= 768 ||
        /iPhone|Android|Mobile/i.test(navigator.userAgent);

      const onMobilePath = location.pathname.startsWith("/mobile");
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

  return (
    <>
      <Header />
      <Header1 />

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
        <Route path="/payment-page" element={<PaymentPage />} />

        {/* Mobile site */}
        <Route path="/mobile/*" element={<MobileApp />} />
      </Routes>

      <Footer />
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

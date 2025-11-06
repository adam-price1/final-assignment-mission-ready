import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Import pages
// --Header Footer Component
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// -- Order Online Component
import LandingPage from "./components/OrderOnline/LandingPage";
import SelectionPage from "./components/OrderOnline/SelectionPage";
import DeclinedOverlayPage from "./components/OverlayComponents/DeclinedOverlayPage";

import Homepage from "./components/Homepage";
import CreateAccount from "./components/CreateAccount";
import PriceComparisonPage from "./components/PriceComparisonPage";
import FindFuelStation from "./components/FindFuelStation";
import OrderConfirmOverlay from "./components/OverlayComponents/OrderConfirmOverlay";
import ConfirmOrderPage from "./components/ConfirmOrderPage";
import LoginPage from "./components/LoginPage";
import PaymentOverlay from "./components/OverlayComponents/PaymentOverlay";
import SharetankPage from "./components/SharetankPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/selection" element={<SelectionPage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/price-comparison" element={<PriceComparisonPage />} />
          <Route path="/declined" element={<DeclinedOverlayPage />} />
          <Route path="/find-station" element={<FindFuelStation />} />
          <Route path="/order-confirm" element={<OrderConfirmOverlay />} />
          <Route path="/confirm-order" element={<ConfirmOrderPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/payment" element={<PaymentOverlay />} />
          <Route path="/sharetank" element={<SharetankPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

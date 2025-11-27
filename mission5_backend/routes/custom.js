// routes/custom.js
import express from "express";

import Station from "../models/Station.js";
import FuelPrice from "../models/FuelPrice.js";
import QRCode from "../models/QRCode.js";
import PopUp from "../models/PopUp.js";
import Transactions from "../models/Transactions.js";

const router = express.Router();

/* -------------------- PAYMENT PAGE -------------------- */
router.get("/payment-page", (req, res) => {
  res.json({
    page: "payment",
    message: "Payment page working",
  });
});

/* -------------------- COMPARE PRICES (WITH SEARCH FILTER) -------------------- */
router.get("/compare-prices", async (req, res) => {
  try {
    const search = req.query.search?.toLowerCase() || "";

    const stations = await Station.find();
    const prices = await FuelPrice.find();

    // JOIN station + fuel prices
    const combined = stations.map((station) => {
      const fuels = prices
        .filter((p) => p.stationId?.toString() === station._id.toString())
        .map((p) => ({
          fuelType: p.fuelType,
          price: p.price,
        }));

      return {
        stationName: station.name,
        address: station.address,
        services: station.services,
        lat: station.lat,
        lng: station.lng,
        fuels,
      };
    });

    // FILTER BASED ON SEARCH INPUT
    const filtered = combined.filter((station) => {
      const nameMatch = station.stationName.toLowerCase().includes(search);
      const addressMatch = station.address.toLowerCase().includes(search);
      const serviceMatch = station.services.some((s) =>
        s.toLowerCase().includes(search)
      );

      return nameMatch || addressMatch || serviceMatch;
    });

    res.json({
      page: "compare-prices",
      count: filtered.length,
      prices: filtered,
    });
  } catch (err) {
    console.error("COMPARE ERROR:", err);
    res.status(500).json({ error: "Failed to fetch joined prices" });
  }
});

/* -------------------- THANK YOU PAGE -------------------- */
router.get("/thank-you", (req, res) => {
  res.json({
    page: "thank-you",
    message: "Thank you page working",
  });
});

/* -------------------- QR CODE PAGE -------------------- */
router.get("/qr-code", async (req, res) => {
  try {
    const qr = await QRCode.findOne();
    res.json({
      page: "qr-code",
      qrCode: qr || { message: "No QR Code found" },
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to load QR code" });
  }
});

/* -------------------- POP UP PAGE -------------------- */
router.get("/popup", async (req, res) => {
  try {
    const popup = await PopUp.findOne();
    res.json({
      page: "popup",
      popup: popup || { message: "No popup found" },
    });
  } catch (err) {
    res.status(500).json({ error: "Popup error" });
  }
});

/* -------------------- TRANSACTION HISTORY -------------------- */
router.get("/transactions", async (req, res) => {
  try {
    const history = await Transactions.find().limit(10);
    res.json({
      page: "transactions",
      count: history.length,
      history,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch transaction history" });
  }
});

export default router;

// routes/custom.js
import express from "express";
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

/* -------------------- COMPARE PRICES -------------------- */
router.get("/compare-prices", async (req, res) => {
  try {
    const prices = await FuelPrice.find().limit(20);
    res.json({
      page: "compare-prices",
      count: prices.length,
      prices,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch prices" });
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

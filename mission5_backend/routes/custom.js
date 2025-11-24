// routes/custom.js
import express from "express";
const router = express.Router();

router.get("/payment-page", (req, res) => {
  res.json({ message: "Payment page working" });
});

router.get("/compare-prices", (req, res) => {
  res.json({ message: "Compare prices working" });
});

router.get("/thank-you", (req, res) => {
  res.json({ message: "Thank you page working" });
});

export default router;

import express from "express";
import QRCode from "../models/QRCode.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const qr = await QRCode.findOne();
    res.json({
      source: "qrcode-router",
      qrCode: qr || { message: "No QR code available" },
    });
  } catch (err) {
    res.status(500).json({ error: "QR code fetch failed" });
  }
});

export default router;

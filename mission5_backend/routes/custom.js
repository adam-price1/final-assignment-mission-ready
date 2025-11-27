// routes/custom.js
import express from "express";

import Station from "../models/Station.js";
import FuelPrice from "../models/FuelPrice.js";
import QRCode from "../models/QRCode.js";

const router = express.Router();

/* -------------------- GET ALL STATIONS -------------------- */
router.get("/stations", async (req, res) => {
  try {
    const stations = await Station.find();
    res.json({
      page: "stations",
      count: stations.length,
      stations,
    });
  } catch (err) {
    console.error("STATION ERROR:", err);
    res.status(500).json({ error: "Failed to fetch stations" });
  }
});

/* -------------------- GET ALL FUEL PRICES -------------------- */
router.get("/fuel-prices", async (req, res) => {
  try {
    const fuel = await FuelPrice.find();
    res.json({
      page: "fuel-prices",
      count: fuel.length,
      prices: fuel,
    });
  } catch (err) {
    console.error("FUEL ERROR:", err);
    res.status(500).json({ error: "Failed to fetch fuel prices" });
  }
});

/* -------------------- COMPARE (JOIN STATION + FUEL) -------------------- */
router.get("/compare-prices", async (req, res) => {
  try {
    const search = req.query.search?.toLowerCase() || "";

    const stations = await Station.find();
    const prices = await FuelPrice.find();

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
        services: station.services || [], // Prevent crash if undefined
        lat: station.lat,
        lng: station.lng,
        fuels,
      };
    });

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

/* -------------------- QR CODE -------------------- */
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

export default router;

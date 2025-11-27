// routes/prices.js
import express from "express";
import FuelPrice from "../models/FuelPrice.js";
import Station from "../models/Station.js";

const router = express.Router();

/* ----------------------------------------------------
   GET /api/prices  → return stations + their fuel prices
----------------------------------------------------- */
router.get("/", async (req, res) => {
  try {
    // Fetch everything from database
    const stations = await Station.find();
    const prices = await FuelPrice.find();

    // Group fuel prices by stationId
    const priceMap = {};
    prices.forEach((p) => {
      if (!priceMap[p.stationId]) {
        priceMap[p.stationId] = [];
      }
      priceMap[p.stationId].push({
        fuelType: p.fuelType,
        price: p.price,
        lastUpdated: p.lastUpdated,
      });
    });

    // Build final combined response
    const result = stations.map((station) => ({
      stationId: station._id,
      stationName: station.name,
      area: station.address,
      fuels: priceMap[station._id] || [], // empty if none
    }));

    res.json({
      page: "compare-prices",
      count: result.length,
      prices: result,
    });
  } catch (err) {
    console.error("❌ Fuel price API error:", err);
    res.status(500).json({ error: "Failed to load fuel prices." });
  }
});

export default router;

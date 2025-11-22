import { Router } from "express";
import Station from "../models/Station.js";

const router = Router();

// GET all stations (for map list)
router.get("/", async (req, res) => {
  const stations = await Station.find();
  res.json(stations);
});

// GET single station by id (for Z Kingsway screen)
router.get("/:id", async (req, res) => {
  const station = await Station.findById(req.params.id);
  if (!station) return res.status(404).json({ error: "not found" });
  res.json(station);
});

export default router;

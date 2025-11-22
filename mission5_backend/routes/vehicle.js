import { Router } from "express";
import Vehicle from "../models/Vehicle.js";

const router = Router();

// GET vehicles for a user
router.get("/", async (req, res) => {
  const { userId = "demo-user-1" } = req.query;
  const vehicles = await Vehicle.find({ userId });
  res.json(vehicles);
});

// POST create vehicle from "Add vehicle" screen
router.post("/", async (req, res) => {
  const { userId = "demo-user-1", plate, fuelType, paymentMethod, confirmOnArrival } =
    req.body;

  if (!plate || !fuelType) {
    return res.status(400).json({ error: "plate and fuelType are required" });
  }

  const vehicle = await Vehicle.create({
    userId,
    plate,
    fuelType,
    paymentMethod,
    confirmOnArrival,
  });

  res.status(201).json(vehicle);
});

export default router;

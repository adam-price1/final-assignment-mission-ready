import { Router } from "express";
import Sharetank from "../models/Sharetank.js";

const router = Router();

// GET /api/sharetank/demo-tank-1
router.get("/:tankKey", async (req, res) => {
  try {
    const tank = await Sharetank.findOne({ tankKey: req.params.tankKey });
    if (!tank) return res.status(404).json({ error: "Tank not found" });
    res.json(tank);
  } catch (err) {
    console.error("[GET /sharetank/:tankKey] error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/sharetank/demo-tank-1/members   (for your handleAddMember)
router.post("/:tankKey/members", async (req, res) => {
  try {
    const { name, avatarUrl } = req.body;
    const tank = await Sharetank.findOne({ tankKey: req.params.tankKey });
    if (!tank) return res.status(404).json({ error: "Tank not found" });

    tank.members.push({ name, avatarUrl });
    await tank.save();
    res.status(201).json(tank);
  } catch (err) {
    console.error("[POST /sharetank/:tankKey/members] error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;



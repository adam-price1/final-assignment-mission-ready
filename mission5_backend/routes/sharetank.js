import { Router } from "express";
import Sharetank from "../models/Sharetank.js";

const router = Router();

// add a member
router.post("/:id/members", async (req, res) => {
  try {
    const { name, email, avatarUrl } = req.body;

    const tank = await Sharetank.findById(req.params.id);
    if (!tank) return res.status(404).json({ error: "Sharetank not found" });

    if (tank.members.length >= 5) {
      return res.status(400).json({ error: "Max 5 members" });
    }

    tank.members.push({ name, email, avatarUrl });
    await tank.save();

    res.json(tank);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add member" });
  }
});

export default router;

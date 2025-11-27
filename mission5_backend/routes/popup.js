import express from "express";
import PopUp from "../models/PopUp.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const popup = await PopUp.findOne();
    res.json({
      source: "popup-router",
      popup: popup || { message: "No popup data found" },
    });
  } catch (err) {
    res.status(500).json({ error: "Popup route failed" });
  }
});

export default router;

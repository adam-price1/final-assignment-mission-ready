import express from "express";
import Transactions from "../models/Transactions.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const history = await Transactions.find().limit(20).sort({ createdAt: -1 });
    res.json({
      source: "transactions-router",
      count: history.length,
      history,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});

export default router;

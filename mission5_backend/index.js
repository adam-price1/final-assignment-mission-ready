
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// 👉 import any  team routers here
// import itemsRouter from "./routes/items.js";  // example

// 👉 margaret new routers
import stationsRouter from "./routes/stations.js";
import vehiclesRouter from "./routes/vehicles.js";

const app = express();

// ---------- Middleware ----------
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  })
);

app.use(express.json());

// ---------- MongoDB connection ----------
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error("❌ MONGODB_URI is not set in .env");
  process.exit(1);
}

mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ MongoDB connected:", mongoUri))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// ---------- Routes ----------

// 👇  team’s existing routes here
// app.use("/api/items", itemsRouter);   // example

// 👇 margaret Sharetank routes
app.use("/api/stations", stationsRouter);
app.use("/api/vehicles", vehiclesRouter);

// Simple health-check route
app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

// ---------- Start server ----------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});

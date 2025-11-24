import dotenv from "dotenv";
dotenv.config();

import rateLimit from "express-rate-limit";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import helmet from "helmet";

import sharetankRouter from "./routes/sharetank.js"


// import mongoSanitize from "express-mongo-sanitize";

// 👉 Margaret’s routers
import stationsRouter from "./routes/stations.js";
import vehiclesRouter from "./routes/vehicle.js";

// 👉 Jordan’s router
import authRouter from "./routes/auth.js";

// 👉 Adam’s routes
import customRouter from "./routes/custom.js";

import runSeed from "./seed.js";

const app = express();

/* ---------- Security & parsing ---------- */

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later",
});
app.use(limiter);
app.use("/api/sharetank", sharetankRouter);

app.use(helmet());


// sanitize Mongo inputs
// app.use(mongoSanitize());

// CORS


app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  })
);

app.use(express.json());

/* ---------- MongoDB ---------- */

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error("❌ MONGODB_URI is not set in .env");
  process.exit(1);
}

async function start() {
  try {
    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB connected:", mongoUri);

    if (process.env.SEED === "true") {
      console.log("🌱 Running seed script...");
      await runSeed();
      console.log("🌱 Seed complete.");
    }

    /* ---------- ROUTES (Loaded once) ---------- */

    // margaret
    app.use("/api/stations", stationsRouter);
    app.use("/api/vehicles", vehiclesRouter);

    // jordan
    app.use("/api/auth", authRouter);

    // adam
    app.use("/api/custom", customRouter);

    // health check
    app.get("/", (req, res) => {
      res.json({ status: "ok" });
    });

    /* ---------- Start Server ---------- */
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Startup error:", err);
    process.exit(1);
  }
}

start();

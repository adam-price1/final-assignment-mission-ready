import dotenv from "dotenv";
dotenv.config();

import rateLimit from "express-rate-limit";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import helmet from "helmet";
// import mongoSanitize from "express-mongo-sanitize";

// 👉 team routers here (example)
// import itemsRouter from "./routes/items.js";

// 👉 Margaret’s new routers
import stationsRouter from "./routes/stations.js";
import vehiclesRouter from "./routes/vehicle.js";

// Jordan

import authRouter from "./routes/auth.js";
import runSeed from "./seed.js";

const app = express();

/* ---------- Security & parsing ---------- */

// rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes  (camelCase: windowMs)
  max: 100, // limit each IP to 100 requests per window
  message: "Too many requests, please try again later",
});
app.use(limiter);

// security headers
app.use(helmet());
// app.use(mongoSanitize());

// ---------- Middleware ----------
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  })
);

// JSON body parsing
app.use(express.json());

/* ---------- MongoDB connection + seeding + server start ---------- */

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error("❌ MONGODB_URI is not set in .env");
  process.exit(1);
}

async function start() {
  try {
    // connect to Mongo
    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB connected:", mongoUri);

    // optional seeding
    if (process.env.SEED === "true") {
      console.log("🌱 Running seed script...");
      await runSeed();
      console.log("🌱 Seed complete.");
    }

    // ---------- Routes ----------
    // team routes:
    // app.use("/api/items", itemsRouter);

    // Margaret Sharetank routes:
    app.use("/api/stations", stationsRouter);
    app.use("/api/vehicles", vehiclesRouter);

    // health-check
    app.get("/", (req, res) => {
      res.json({ status: "ok" });
    });

    // start server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Startup error:", err);
    process.exit(1);
  }
}

// ---------- Routes ----------

// 👇  team’s existing routes here
// app.use("/api/items", itemsRouter);   // example

// 👇 margaret Sharetank routes
app.use("/api/stations", stationsRouter);
app.use("/api/vehicles", vehiclesRouter);

// Jordan
app.use("/api/auth", authRouter);

// Simple health-check route
app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

// ---------- Start server ----------
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
start();

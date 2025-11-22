
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import stationsRouter from "./routes/stations.js";
import vehiclesRouter from "./routes/vehicles.js";

const app = express();

app.use(cors({ origin: "http://localhost:5173" })); 
app.use(express.json());

// --- Mongo connection ---
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

// --- Routes ---
app.use("/api/stations", stationsRouter);
app.use("/api/vehicles", vehiclesRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));

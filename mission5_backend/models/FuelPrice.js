import mongoose from "mongoose";

const FuelPriceSchema = new mongoose.Schema({
  stationId: String,
  fuelType: String,
  price: Number,
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.FuelPrice ||
  mongoose.model("FuelPrice", FuelPriceSchema);

import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: String,
  stationName: String,
  litres: Number,
  fuelType: String,
  pricePerLitre: Number,
  totalCost: Number,
  status: String, // e.g., "Success", "Declined"
  date: Date,
});

export default mongoose.model("Transaction", transactionSchema);

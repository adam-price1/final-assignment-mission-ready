import mongoose from "mongoose";

const qrSchema = new mongoose.Schema({
  userId: String,
  code: String,
  createdAt: Date,
  expiresAt: Date,
});

export default mongoose.model("QRCode", qrSchema);

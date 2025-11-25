import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatarUrl: { type: String },   // 👈 ADD THIS
  litres: { type: Number, default: 0 },
  userId: { type: String }       // optional
});

const sharetankSchema = new mongoose.Schema({
  tankKey: { type: String, required: true,  },
  ownerUserId: { type: String, required: true },
  litres: { type: Number, default: 0 },
  maxLitres: { type: Number, default: 225 },
  maxMembers: { type: Number, default: 5 },
  members: [memberSchema]        // 👈 ensures avatarUrl is allowed
});

const Sharetank = mongoose.model("Sharetank", sharetankSchema);
export default Sharetank;

import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema(
  {
    name: String,
    avatarUrl: String, // e.g. "/image/icons/sharetank/firstmember.png"
  },
  { _id: false }
);

const SharetankSchema = new mongoose.Schema({
  tankKey: { type: String, required: true, unique: true }, // e.g. "demo-tank-1"
  ownerUserId: String,
  litres: Number,
   maxLitres: Number,
  maxMembers: { type: Number, default: 5 },
  members: [MemberSchema],
});

export default mongoose.model("Sharetank", SharetankSchema);

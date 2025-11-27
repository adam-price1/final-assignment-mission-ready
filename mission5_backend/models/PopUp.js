import mongoose from "mongoose";

const PopUpSchema = new mongoose.Schema({
  title: String,
  message: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// ✔ Prevent OverwriteModelError
export default mongoose.models.PopUp || mongoose.model("PopUp", PopUpSchema);

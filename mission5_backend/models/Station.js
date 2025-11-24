import mongoose from "mongoose";

const HoursSchema = new mongoose.Schema({
  day: String,
  open: String,
});

const StationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  lat: Number,
  lng: Number,
  phone: Number,
  hours: [HoursSchema],
  services: [String],
});

export default mongoose.model("Station", StationSchema);

import mongoose from "mongoose";

const HoursSchema = new mongoose.Schema({
  day: String,
  open: String,
});

const StationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  hours: { type: Array, required: true },
  services: { type: [String], required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true }
});


export default mongoose.model("Station", StationSchema);

import mongoose from "mongoose";

const HoursSchema = new mongoose.Schema({
    day:String,
    open:String,
});

const StationSchema = new mongoose.Schema({
    name:{type:string, required: true},
    address:String,
    lat:Number,
    lng:number,
    phone:Number,
    hours:[HoursSchema],
    services:[String],     
});

export default mongoose.model("Station", StationSchema);
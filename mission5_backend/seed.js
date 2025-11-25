import Station from "./models/Station.js";
import Vehicle from "./models/Vehicle.js";
import Sharetank from "./models/Sharetank.js";

export default async function runSeed() {
  console.log(" Clearing old data...");

  await Station.deleteMany();
  await Vehicle.deleteMany();
  await Sharetank.deleteMany();

  console.log(" Inserting stations...");
  await Station.insertMany([
    {
      name: "Z Kingsway Station",
      address: "26 Clevedon Road, Papakura",
      phone: "09 2988185",
      hours: [
        { day: "Sun", open: "24 Hours" },
        { day: "Mon", open: "24 Hours" }
      ],
      services: ["toilet", "fuel", "coffee", "atm"],
      lat: -37.062,
      lng: 174.952
    },
    {
      name: "Z Manurewa",
      address: "11 Station Rd, Manurewa",
      phone: "09 1234567",
      hours: [
        { day: "Sun", open: "24 Hours" },
        { day: "Mon", open: "24 Hours" }
      ],
      services: ["toilet", "coffee"],
      lat: -36.995,
      lng: 174.875
    }
  ]);

  console.log(" Inserting vehicles...");
  await Vehicle.insertMany([
    {
      userId: "demo-user-1",
      plate: "ABC123",
      fuelType: "Z 91",
      paymentMethod: "visa-1234",
      confirmOnArrival: true
    },
    {
      userId: "demo-user-2",
      plate: "XYZ987",
      fuelType: "Z X 95",
      paymentMethod: "mastercard-9876",
      confirmOnArrival: false
    }
  ]);

  console.log(" Inserting Sharetank...");
  await Sharetank.create({
    tankKey: "demo-tank-1",
    ownerUserId: "demo-user-1",
    litres: 115,
    maxLitres: 225,
    members: [
      {
        name: "Alex",
        avatarUrl: "/image/icons/sharetank2/firstmember.jpg"
      },
      {
        name: "Sarah",
        avatarUrl: "/image/icons/sharetank2/secondmember.jpg"
      },
      {
       name: "cutebunny",
       avatarUrl:"/image/icons/sharetank2/cutebunny.jpg"
      }
      
    ]
  });

  console.log("🌱 Seed complete!");
}

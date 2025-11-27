import Station from "./models/Station.js";
import Vehicle from "./models/Vehicle.js";
import Sharetank from "./models/Sharetank.js";

import FuelPrice from "./models/FuelPrice.js";
import QRCode from "./models/QRCode.js";

export default async function runSeed() {
  console.log(" Clearing old data...");

  await Station.deleteMany();
  await Vehicle.deleteMany();
  await Sharetank.deleteMany();
  await FuelPrice.deleteMany();
  await QRCode.deleteMany();

  console.log(" Inserting stations...");
  const stations = await Station.insertMany([
    {
      name: "Z Kingsway Station",
      address: "26 Clevedon Road, Papakura",
      phone: "09 2988185",
      hours: [
        { day: "Sun", open: "24 Hours" },
        { day: "Mon", open: "24 Hours" },
      ],
      services: ["toilet", "fuel", "coffee", "atm"],
      lat: -37.062,
      lng: 174.952,
    },
    {
      name: "Z Manurewa",
      address: "11 Station Rd, Manurewa",
      phone: "09 1234567",
      hours: [
        { day: "Sun", open: "24 Hours" },
        { day: "Mon", open: "24 Hours" },
      ],
      services: ["toilet", "coffee"],
      lat: -36.995,
      lng: 174.875,
    },
    {
      name: "Z Albany",
      address: "Albany, Auckland",
      phone: "09 4152332",
      services: ["fuel", "toilet", "atm", "carwash"],
      lat: -36.72716,
      lng: 174.70751,
    },
    {
      name: "Z Sylvia Park",
      address: "Mount Wellington, Auckland",
      phone: "09 5735669",
      services: ["fuel", "toilet", "coffee"],
      lat: -36.90721,
      lng: 174.84558,
    },
    {
      name: "Z Westgate",
      address: "Massey, Auckland",
      phone: "09 8322990",
      services: ["fuel", "toilet", "atm"],
      lat: -36.81767,
      lng: 174.60896,
    },
    {
      name: "Z Greenlane",
      address: "Greenlane, Auckland",
      phone: "09 5241464",
      services: ["fuel", "toilet", "coffee"],
      lat: -36.88792,
      lng: 174.78092,
    },
    {
      name: "Z Manukau",
      address: "Manukau, Auckland",
      phone: "09 2620848",
      services: ["fuel", "carwash", "coffee"],
      lat: -36.9923,
      lng: 174.87887,
    },
    {
      name: "Z Henderson Valley",
      address: "Henderson, Auckland",
      phone: "09 8361301",
      services: ["fuel", "toilet"],
      lat: -36.88406,
      lng: 174.62268,
    },
    {
      name: "Z Ponsonby",
      address: "Ponsonby, Auckland",
      phone: "09 3763577",
      services: ["fuel", "coffee", "atm"],
      lat: -36.84533,
      lng: 174.73821,
    },
  ]);

  console.log(" Inserting Fuel Prices for ALL stations...");

  const fuelTypes = ["Z 91", "Z X95", "Z Diesel"];

  const fuelPrices = stations.flatMap((station) =>
    fuelTypes.map((type) => ({
      stationId: station._id,
      fuelType: type,
      price:
        type === "Z 91"
          ? 2.89 + Math.random() * 0.2
          : type === "Z X95"
          ? 3.19 + Math.random() * 0.2
          : 2.49 + Math.random() * 0.2,
      lastUpdated: new Date(),
    }))
  );

  await FuelPrice.insertMany(fuelPrices);
  console.log(" Fuel prices inserted!");

  console.log(" Inserting vehicles...");
  await Vehicle.insertMany([
    {
      userId: "demo-user-1",
      plate: "ABC123",
      fuelType: "Z 91",
      paymentMethod: "visa-1234",
      confirmOnArrival: true,
    },
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
      },
      {
       name: "cutebunny",
       avatarUrl:"/image/icons/sharetank2/chicken.jpg"
      },
      
      
    ]
  });

  console.log(" Inserting QR Code...");
  await QRCode.create({
    code: "ABC123XYZ",
    station: "Z Kingsway Station",
    expires: new Date(Date.now() + 86400000),
  });

  console.log("🌱 Seed complete!");
}

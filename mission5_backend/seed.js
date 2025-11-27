import Station from "./models/Station.js";
import Vehicle from "./models/Vehicle.js";
import Sharetank from "./models/Sharetank.js";
import PopUp from "./models/PopUp.js";

// NEW MODELS (for backend)
import FuelPrice from "./models/FuelPrice.js";
import QRCode from "./models/QRCode.js";
import Transactions from "./models/Transactions.js";

export default async function runSeed() {
  console.log(" Clearing old data...");

  await Station.deleteMany();
  await Vehicle.deleteMany();
  await Sharetank.deleteMany();
  await PopUp.deleteMany();
  await FuelPrice.deleteMany();
  await QRCode.deleteMany();
  await Transactions.deleteMany();

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
      address: "318 Oteha Valley Road, Albany, Auckland",
      phone: "09 4152332",
      services: ["fuel", "toilet", "atm", "carwash"],
      lat: -36.72716,
      lng: 174.70751,
    },
    {
      name: "Z Sylvia Park",
      address: "286 Mount Wellington Hwy, Mt Wellington, Auckland",
      phone: "09 5735669",
      services: ["fuel", "toilet", "coffee"],
      lat: -36.90721,
      lng: 174.84558,
    },
    {
      name: "Z Westgate",
      address: "1 Fernhill Drive, Massey, Auckland",
      phone: "09 8322990",
      services: ["fuel", "toilet", "atm"],
      lat: -36.81767,
      lng: 174.60896,
    },
    {
      name: "Z Greenlane",
      address: "200 Great South Road, Greenlane, Auckland",
      phone: "09 5241464",
      services: ["fuel", "toilet", "coffee"],
      lat: -36.88792,
      lng: 174.78092,
    },
    {
      name: "Z Manukau",
      address: "33 Cavendish Drive, Manukau",
      phone: "09 2620848",
      services: ["fuel", "carwash", "coffee"],
      lat: -36.9923,
      lng: 174.87887,
    },
    {
      name: "Z Henderson Valley",
      address: "124 Henderson Valley Road, Henderson",
      phone: "09 8361301",
      services: ["fuel", "toilet"],
      lat: -36.88406,
      lng: 174.62268,
    },
    {
      name: "Z Ponsonby",
      address: "108 Franklin Road, Freemans Bay, Auckland",
      phone: "09 3763577",
      services: ["fuel", "coffee", "atm"],
      lat: -36.84533,
      lng: 174.73821,
    },
  ]);

  console.log(" Inserting vehicles...");
  await Vehicle.insertMany([
    {
      userId: "demo-user-1",
      plate: "ABC123",
      fuelType: "Z 91",
      paymentMethod: "visa-1234",
      confirmOnArrival: true,
    },
    {
      userId: "demo-user-2",
      plate: "XYZ987",
      fuelType: "Z X 95",
      paymentMethod: "mastercard-9876",
      confirmOnArrival: false,
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
        avatarUrl: "/image/icons/sharetank2/firstmember.jpg",
      },
      {
        name: "Sarah",
        avatarUrl: "/image/icons/sharetank2/secondmember.jpg",
      },
      {
        name: "cutebunny",
        avatarUrl: "/image/icons/sharetank2/cutebunny.jpg",
      },
    ],
  });

  console.log(" Inserting PopUps...");
  await PopUp.insertMany([
    {
      userId: "demo-user-1",
      amount: 20,
      date: new Date(),
    },
    {
      userId: "demo-user-1",
      amount: 40,
      date: new Date(),
    },
  ]);

  console.log(" Inserting Fuel Prices...");
  await FuelPrice.insertMany([
    {
      stationId: stations[0]._id,
      fuelType: "Z 91",
      price: 2.89,
      lastUpdated: new Date(),
    },
    {
      stationId: stations[1]._id,
      fuelType: "Z X95",
      price: 3.19,
      lastUpdated: new Date(),
    },
  ]);

  console.log(" Inserting QR Code...");
  await QRCode.create({
    code: "ABC123XYZ",
    station: "Z Kingsway Station",
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
  });

  console.log(" Inserting Transactions...");
  await Transactions.insertMany([
    {
      fuelType: "Z 91",
      litres: 20,
      pricePerLitre: 2.89,
      totalPaid: 57.8,
      date: new Date(),
    },
    {
      fuelType: "Z X95",
      litres: 15,
      pricePerLitre: 3.19,
      totalPaid: 47.85,
      date: new Date(),
    },
  ]);

  console.log("🌱 Seed complete!");
}

// flightData.js
const flightData = [];

const indianAirlines = [
  "Air India",
  "IndiGo",
  "SpiceJet",
  "Vistara",
  "GoAir",
  "AirAsia India",
  "Alliance Air",
  "TruJet",
  "Star Air",
  "Akasa Air"
];

const indianAirports = [
  "Delhi (DEL)",
  "Mumbai (BOM)",
  "Bangalore (BLR)",
  "Hyderabad (HYD)",
  "Chennai (MAA)",
  "Kolkata (CCU)",
  "Ahmedabad (AMD)",
  "Kochi (COK)",
  "Pune (PNQ)",
  "Goa (GOI)",
  "Jaipur (JAI)",
  "Lucknow (LKO)",
  "Srinagar (SXR)",
  "Guwahati (GAU)",
  "Thiruvananthapuram (TRV)"
];

for (let i = 0; i < 500; i++) {
  const randomAirline = indianAirlines[Math.floor(Math.random() * indianAirlines.length)];
  const randomOrigin = indianAirports[Math.floor(Math.random() * indianAirports.length)];
  let randomDestination = indianAirports[Math.floor(Math.random() * indianAirports.length)];

  // Ensure origin and destination are different
  while (randomOrigin === randomDestination) {
    randomDestination = indianAirports[Math.floor(Math.random() * indianAirports.length)];
  }

  const departureDate = new Date();
  departureDate.setDate(departureDate.getDate() + Math.floor(Math.random() * 30)); // Random departure date within the next month
  const departureTime = departureDate.toISOString().slice(0, 19);

  // Calculate arrival time based on departure time and a random duration (assuming 1-3 hours for domestic flights)
  const arrivalTime = new Date(departureDate.getTime() + (Math.random() * 2 + 1) * 60 * 60 * 1000).toISOString().slice(0, 19);

  // Prices in Indian Rupees (INR), ranging from about 2000 to 15000 INR
  const randomPrice = (Math.random() * 13000 + 2000).toFixed(2);

  flightData.push({
    id: i + 1,
    airlineName: randomAirline,
    origin: randomOrigin,
    destination: randomDestination,
    departureTime,
    arrivalTime,
    price: randomPrice
  });
}

export default flightData;
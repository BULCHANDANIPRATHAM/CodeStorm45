// trainData.js
const trainData = [];

const indianTrains = [
  "Rajdhani Express",
  "Shatabdi Express",
  "Duronto Express",
  "Garib Rath",
  "Jan Shatabdi Express",
  "Sampark Kranti Express",
  "Humsafar Express",
  "Tejas Express",
  "Vande Bharat Express",
  "Antyodaya Express"
];

const indianStations = [
  "Mumbai Central",
  "New Delhi",
  "Howrah Junction",
  "Chennai Central",
  "Bengaluru City",
  "Ahmedabad Junction",
  "Pune Junction",
  "Jaipur Junction",
  "Lucknow Junction",
  "Secunderabad Junction",
  "Bhopal Junction",
  "Patna Junction",
  "Kanpur Central",
  "Surat",
  "Thiruvananthapuram Central"
];

for (let i = 0; i < 500; i++) {
  const randomTrain = indianTrains[Math.floor(Math.random() * indianTrains.length)];
  const randomOrigin = indianStations[Math.floor(Math.random() * indianStations.length)];
  let randomDestination = indianStations[Math.floor(Math.random() * indianStations.length)];

  // Ensure origin and destination are different
  while (randomOrigin === randomDestination) {
    randomDestination = indianStations[Math.floor(Math.random() * indianStations.length)];
  }

  const departureDate = new Date();
  departureDate.setDate(departureDate.getDate() + Math.floor(Math.random() * 30)); // Random departure date within the next month
  const departureTime = departureDate.toISOString().slice(0, 19);

  // Calculate arrival time based on departure time and a random duration (assuming 4-12 hours for train journeys)
  const durationHours = Math.floor(Math.random() * 8) + 4;
  const durationMinutes = Math.floor(Math.random() * 60);
  const arrivalTime = new Date(departureDate.getTime() + (durationHours * 60 + durationMinutes) * 60 * 1000).toISOString().slice(0, 19);

  // Prices in Indian Rupees (INR), ranging from about 500 to 5000 INR
  const randomPrice = (Math.random() * 4500 + 500).toFixed(2);

  trainData.push({
    id: i + 1,
    trainName: randomTrain,
    trainNumber: `${Math.floor(Math.random() * 90000) + 10000}`,
    origin: randomOrigin,
    destination: randomDestination,
    departureTime,
    arrivalTime,
    duration: `${durationHours}h ${durationMinutes}m`,
    price: randomPrice
  });
}

export default trainData;
// hotelData.js
const hotelData = [];

const indianCities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Jaipur",
  "Ahmedabad",
  "Pune",
  "Goa",
  "Kochi",
  "Udaipur",
  "Agra",
  "Varanasi",
  "Amritsar"
];

const hotelChains = [
  "Taj Hotels",
  "Oberoi Hotels",
  "ITC Hotels",
  "Leela Palaces",
  "Marriott International",
  "Hyatt Hotels",
  "Radisson Hotels",
  "AccorHotels",
  "Hilton Hotels",
  "Lemon Tree Hotels"
];

const amenities = [
  "Free Wi-Fi",
  "Swimming Pool",
  "Fitness Center",
  "Restaurant",
  "Bar",
  "Spa",
  "Room Service",
  "Parking",
  "Business Center",
  "Airport Shuttle"
];

for (let i = 0; i < 500; i++) {
  const randomCity = indianCities[Math.floor(Math.random() * indianCities.length)];
  const randomChain = hotelChains[Math.floor(Math.random() * hotelChains.length)];
  const randomRating = Math.floor(Math.random() * 3) + 3; // 3 to 5 stars
  
  // Generate a random subset of amenities
  const randomAmenities = amenities
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * 5) + 3); // 3 to 7 amenities

  // Prices in Indian Rupees (INR), ranging from about 2000 to 20000 INR per night
  const randomPrice = (Math.random() * 18000 + 2000).toFixed(2);

  hotelData.push({
    id: i + 1,
    name: `${randomChain} ${randomCity}`,
    location: randomCity,
    rating: randomRating,
    amenities: randomAmenities,
    pricePerNight: parseFloat(randomPrice)
  });
}

export default hotelData;
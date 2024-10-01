import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AccessibleItinerary.css';
import SpeechReaderWrapper from '../components/SpeechReaderWrapper';

const accessibilityOptions = [
    'Wheelchair accessible',
    'Braille signage',
    'Audio guides',
    'Sign language tours',
    'Sensory-friendly'
];

const fetchAttractions = async (city) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/places`, {
            params: { city }
        });
        return response.data.map(place => ({
            name: place.name,
            address: place.formatted_address,
            accessibility: accessibilityOptions.filter(() => Math.random() > 0.5)
        }));
    } catch (error) {
        console.error('Error fetching attractions:', error);
        throw error;
    }
};

const AccessibleItinerary = () => {
  const [city, setCity] = useState('');
  const [days, setDays] = useState(1);
  const [accessibilityFilter, setAccessibilityFilter] = useState('');
  const [attractions, setAttractions] = useState([]);
  const [itinerary, setItinerary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      setLoading(true);
      setError(null);
      fetchAttractions(city)
        .then(fetchedAttractions => {
          console.log('Fetched attractions:', fetchedAttractions);
          setAttractions(fetchedAttractions);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error in useEffect:', err);
          setError('Failed to fetch attractions. Please try again.');
          setLoading(false);
        });
    }
  }, [city]);

  const generateItinerary = () => {
    console.log('Generating itinerary');
    console.log('Current attractions:', attractions);
    console.log('Current accessibility filter:', accessibilityFilter);

    const filteredAttractions = attractions.filter(attraction => 
      !accessibilityFilter || attraction.accessibility.includes(accessibilityFilter)
    );
    console.log('Filtered attractions:', filteredAttractions);

    const attractionsPerDay = Math.ceil(filteredAttractions.length / days);
    const newItinerary = Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      attractions: filteredAttractions.slice(i * attractionsPerDay, (i + 1) * attractionsPerDay)
    }))                                                          ;

    console.log('Generated itinerary:', newItinerary);
    setItinerary(newItinerary);
  };

  return (
    <SpeechReaderWrapper>
      <div className="container">
        <h1>Accessible Itinerary Planner</h1>

        <form onSubmit={(e) => { e.preventDefault(); generateItinerary(); }}>
          <div>
            <label htmlFor="city-input">City</label>
            <input
              id="city-input"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter a city name"
              aria-label="Enter a city name"
            />
          </div>

          <div>
            <label htmlFor="days-input">Number of days</label>
            <input
              id="days-input"
              type="number"
              min="1"
              max="14"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              aria-label="Number of days for the itinerary"
            />
          </div>

          <div>
            <label htmlFor="accessibility-select">Accessibility option</label>
            <select 
              id="accessibility-select"
              value={accessibilityFilter} 
              onChange={(e) => setAccessibilityFilter(e.target.value)}
              aria-label="Select accessibility option"
            >
              <option value="">Select accessibility option</option>
              {accessibilityOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          <button 
            type="submit"
            disabled={loading || !city}
            aria-busy={loading}
          >
            {loading ? 'Loading...' : 'Generate Itinerary'}
          </button>
        </form>

        {loading && <p className="loading" role="status" aria-live="polite">Loading attractions...</p>}
        {error && <p className="error" role="alert">{error}</p>}

        {itinerary.length > 0 ? (
          <section className="itinerary" aria-label={`Itinerary for ${city}`}>
            <h2>Your Itinerary for {city}</h2>
            {itinerary.map(day => (
              <article key={day.day} className="day">
                <h3>Day {day.day}</h3>
                <ul>
                  {day.attractions.map(attraction => (
                    <li key={attraction.name} className="attraction">
                      <strong>{attraction.name}</strong>
                      <span className="address">{attraction.address}</span>
                      <span className="accessibility">
                        Accessibility: {attraction.accessibility.join(', ')}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        ) : (
          <p>No itinerary generated yet. Please enter a city and click "Generate Itinerary".</p>
        )}
      </div>
    </SpeechReaderWrapper>
  );
};

export default AccessibleItinerary;
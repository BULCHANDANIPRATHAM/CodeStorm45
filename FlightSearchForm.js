import React, { useState } from 'react';
import styled from 'styled-components';
import flightData from '../flightData';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const InputGroup = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const FlightSearchForm = ({ onSearch }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [airline, setAirline] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sort, setSort] = useState('cheapest_first');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating an API call with setTimeout
    setTimeout(() => {
      const filteredFlights = flightData.filter((flight) => {
        return (
          (!fromCity || flight.origin.toLowerCase().includes(fromCity.toLowerCase())) &&
          (!toCity || flight.destination.toLowerCase().includes(toCity.toLowerCase())) &&
          (!departDate || new Date(flight.departureTime).toISOString().split('T')[0] === departDate) &&
          (!airline || flight.airlineName.toLowerCase().includes(airline.toLowerCase())) &&
          (!minPrice || parseFloat(flight.price) >= parseFloat(minPrice)) &&
          (!maxPrice || parseFloat(flight.price) <= parseFloat(maxPrice))
        );
      });

      const sortedFlights = filteredFlights.sort((a, b) => {
        if (sort === 'cheapest_first') return parseFloat(a.price) - parseFloat(b.price);
        if (sort === 'fastest_first') {
          const aDuration = new Date(a.arrivalTime) - new Date(a.departureTime);
          const bDuration = new Date(b.arrivalTime) - new Date(b.departureTime);
          return aDuration - bDuration;
        }
        return 0;
      });

      onSearch(sortedFlights);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          placeholder="From (e.g. Delhi)"
          value={fromCity}
          onChange={(e) => setFromCity(e.target.value)}
        />
        <Input
          type="text"
          placeholder="To (e.g. Mumbai)"
          value={toCity}
          onChange={(e) => setToCity(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Input
          type="date"
          value={departDate}
          onChange={(e) => setDepartDate(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Airline (optional)"
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="cheapest_first">Cheapest First</option>
          <option value="fastest_first">Fastest First</option>
        </Select>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search Flights'}
        </Button>
      </InputGroup>
    </FormContainer>
  );
};

export default FlightSearchForm;
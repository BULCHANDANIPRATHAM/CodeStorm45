import React, { useState } from 'react';
import styled from 'styled-components';
import hotelData from '../hotelData';

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

const HotelSearchForm = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [rating, setRating] = useState('');
  const [sort, setSort] = useState('price_low_to_high');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating an API call with setTimeout
    setTimeout(() => {
      const filteredHotels = hotelData.filter((hotel) => {
        return (
          (!location || hotel.location.toLowerCase().includes(location.toLowerCase())) &&
          (!rating || hotel.rating >= parseInt(rating)) &&
          (!minPrice || hotel.pricePerNight >= parseFloat(minPrice)) &&
          (!maxPrice || hotel.pricePerNight <= parseFloat(maxPrice))
        );
      });

      const sortedHotels = filteredHotels.sort((a, b) => {
        if (sort === 'price_low_to_high') return a.pricePerNight - b.pricePerNight;
        if (sort === 'price_high_to_low') return b.pricePerNight - a.pricePerNight;
        if (sort === 'rating_high_to_low') return b.rating - a.rating;
        return 0;
      });

      onSearch(sortedHotels);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Check-in"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Check-out"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <Input
          type="number"
          placeholder="Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
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
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Any Rating</option>
          <option value="3">3+ Stars</option>
          <option value="4">4+ Stars</option>
          <option value="5">5 Stars</option>
        </Select>
        <Select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="price_low_to_high">Price: Low to High</option>
          <option value="price_high_to_low">Price: High to Low</option>
          <option value="rating_high_to_low">Rating: High to Low</option>
        </Select>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search Hotels'}
        </Button>
      </InputGroup>
    </FormContainer>
  );
};

export default HotelSearchForm;
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const AirlineName = styled.h3`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const FlightInfo = styled.p`
  font-size: 1rem;
  color: #34495e;
  margin-bottom: 5px;
`;

const Price = styled.p`
  font-size: 1.5rem;
  color: #e74c3c;
  font-weight: bold;
`;

const BookButton = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const FlightCard = ({ flight }) => {
  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <Card>
      <LeftSection>
        <AirlineName>{flight.airlineName}</AirlineName>
        <FlightInfo>
          {flight.origin} → {flight.destination}
        </FlightInfo>
        <FlightInfo>Departure: {formatDate(flight.departureTime)}</FlightInfo>
        <FlightInfo>Arrival: {formatDate(flight.arrivalTime)}</FlightInfo>
      </LeftSection>
      <RightSection>
        <Price>₹{parseFloat(flight.price).toFixed(2)}</Price>
      </RightSection>
    </Card>
  );
};

export default FlightCard;
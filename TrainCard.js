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

const TrainName = styled.h3`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const TrainInfo = styled.p`
  font-size: 1rem;
  color: #34495e;
  margin-bottom: 5px;
`;

const Price = styled.p`
  font-size: 1.5rem;
  color: #e74c3c;
  font-weight: bold;
`;

const TrainCard = ({ train }) => {
  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <Card>
      <LeftSection>
        <TrainName>{train.trainName}</TrainName>
        <TrainInfo>
          {train.origin} → {train.destination}
        </TrainInfo>
        <TrainInfo>Departure: {formatDate(train.departureTime)}</TrainInfo>
        <TrainInfo>Arrival: {formatDate(train.arrivalTime)}</TrainInfo>
      </LeftSection>
      <RightSection>
        <Price>₹{parseFloat(train.price).toFixed(2)}</Price>
      </RightSection>
    </Card>
  );
};

export default TrainCard;
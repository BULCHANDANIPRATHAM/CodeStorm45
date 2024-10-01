import React, { useState } from 'react';
import styled from 'styled-components';
import FlightSearchForm from '../components/FlightSearchForm';
import FlightCard from '../components/FlightCard';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
`;

const ResultsContainer = styled.div`
  margin-top: 40px;
`;

const ResultsCount = styled.p`
  font-size: 1.2rem;
  color: #34495e;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 1.2rem;
  text-align: center;
`;

const Flights = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (results) => {
    if (results.length === 0) {
      setSearchResults([]);
      setError('No flights found. Try adjusting your search criteria.');
    } else {
      setSearchResults(results);
      setError(null);
    }
  };

  return (
    <PageContainer>
      <Title>Flight Search</Title>
      <FlightSearchForm onSearch={handleSearch} />
      <ResultsContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {searchResults.length > 0 && (
          <>
            <ResultsCount>{searchResults.length} flights found</ResultsCount>
            {searchResults.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </>
        )}
        {searchResults.length === 0 && !error && (
          <p>Use the search form above to find flights.</p>
        )}
      </ResultsContainer>
    </PageContainer>
  );
};

export default Flights;
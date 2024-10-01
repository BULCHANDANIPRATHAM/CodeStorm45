import React, { useState } from 'react';
import styled from 'styled-components';
import TrainSearchForm from '../components/TrainSearchForm';
import TrainCard from '../components/TrainCard';

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

const Trains = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (results) => {
    if (results.length === 0) {
      setSearchResults([]);
      setError('No trains found. Try adjusting your search criteria.');
    } else {
      setSearchResults(results);
      setError(null);
    }
  };

  return (
    <PageContainer>
      <Title>Train Search</Title>
      <TrainSearchForm onSearch={handleSearch} />
      <ResultsContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {searchResults.length > 0 && (
          <>
            <ResultsCount>{searchResults.length} trains found</ResultsCount>
            {searchResults.map((train) => (
              <TrainCard key={train.id} train={train} />
            ))}
          </>
        )}
        {searchResults.length === 0 && !error && (
          <p>Use the search form above to find trains.</p>
        )}
      </ResultsContainer>
    </PageContainer>
  );
};

export default Trains;
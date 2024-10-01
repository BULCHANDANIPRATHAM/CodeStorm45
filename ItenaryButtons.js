
import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const ButtonContainer3 = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width:100px
`;

const MainButton3 = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 20px 0px 0px 20px;
  padding: 10px 15px 10px 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  width:90px;
  right:5;
  &:hover {
    background-color: #2980b9;
  }

`;

const ItenaryButtons = () => {
  return (
    <ButtonContainer3>
        <MainButton3><Link to={'/itinerary'}>Itinerary</Link></MainButton3>
    </ButtonContainer3>
  )
}

export default ItenaryButtons

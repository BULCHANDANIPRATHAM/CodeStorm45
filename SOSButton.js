import React from 'react';
import styled from 'styled-components';


const ButtonContainer2 = styled.div`
  position: fixed;
  left: 0;
  top: 80%;
  transform: translateY(-50%); 
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width:100px
`;

const MainButton2 = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 0 20px 20px 0;
  padding: 10px 15px 10px 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  width:90px;
  &:hover {
    background-color: #2980b9;
  }
  width: 150px;
  height: 150px;
  border-radius: 50%;
  align-items:center;
  align-text:center;
  justify-text:center;
  justify-content:center;
  font-weight:900;
  font-size:24px;
`;

const SOSButton = () => {
  return (
    <ButtonContainer2>
        <MainButton2>S.O.S</MainButton2>
    </ButtonContainer2>
  )
}

export default SOSButton

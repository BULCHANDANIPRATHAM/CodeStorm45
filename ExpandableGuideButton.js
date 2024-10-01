import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronRight, ChevronLeft, Mic, Volume2, Accessibility } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ButtonContainer = styled.div`
  position: fixed;
  left: 0;
  top: 30%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const MainButton = styled.button`
  background-color: #3498db;
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

  &:hover {
    background-color: #2980b9;
  }
`;

const ExpandedButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s ease;
  max-height: ${props => props.isExpanded ? '200px' : '0'};
  overflow: hidden;
  opacity: ${props => props.isExpanded ? '1' : '0'};
  height:150px;
`;

const FeatureButton = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 0 15px 15px 0;
  padding: 8px 15px 8px 10px;
  font-size: 14px;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s ease;
  white-space: nowrap;
  display:flex;
  gap: 5px;
  width:150px;
  flex-direction:row;
  &:hover {
    background-color: #27ae60;
  }
`;

const ExpandableGuideButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const navigate = useNavigate();
  return (
    <ButtonContainer>
      <MainButton onClick={toggleExpand}>
        {isExpanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />} Guide
      </MainButton>
      <ExpandedButtonsContainer isExpanded={isExpanded}>
        <FeatureButton>
          <Accessibility size={18} /> Sign Language
        </FeatureButton>
        <FeatureButton>
          <Link to={'/textToSpeech'} style={{display:'flex',gap:'5px'}}>
            <Volume2 size={18} /> <p>Text to Speech</p>
          </Link>
        </FeatureButton>
        <FeatureButton>
          <Link to={'/speechToText'} style={{display:'flex',gap:'5px'}}>
            <Mic size={18} /> <p>Speech to Text</p>
          </Link>
        </FeatureButton>
      </ExpandedButtonsContainer>
    </ButtonContainer>
  );
};

export default ExpandableGuideButton;
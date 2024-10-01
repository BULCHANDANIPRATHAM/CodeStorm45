import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const Outer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2C3E50;
  width: 100%;
  height: 80px;
  padding: 0 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  color: #E67E22;
  font-weight: 800;
  font-size: 28px;
  font-family: 'OpenDyslexic', sans-serif;
  text-decoration: none;
  
  &:hover {
    color: #F39C12;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #3498DB;
  }
`;

const SignUpButton = styled(Link)`
  background-color: #E74C3C;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #C0392B;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;

  &:hover {
    color: #3498DB;
  }
`;

const DropdownContent = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
  right: 0;
`;

const DropdownItem = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <Outer>
      <Logo to="/">TourGuide</Logo>
      <NavLinks>
        <NavItem to="/trains">Trains</NavItem>
        <NavItem to="/flights">Flights</NavItem>
        <NavItem to="/hotels">Hotels</NavItem>
        <NavItem to="/language">Language</NavItem>
        <DropdownContainer>
          <DropdownButton onClick={toggleDropdown}>
            Accessibility <ChevronDown size={16} />
          </DropdownButton>
          <DropdownContent isOpen={isOpen}>
            <DropdownItem to="/accessibility/blind">Blind</DropdownItem>
            <DropdownItem to="/accessibility/deaf">Deaf</DropdownItem>
            <DropdownItem to="/accessibility/mute">Mute</DropdownItem>
            <DropdownItem to="/accessibility/others">Others</DropdownItem>
          </DropdownContent>
        </DropdownContainer>
        <SignUpButton to="/signup">Sign Up</SignUpButton>
      </NavLinks>
    </Outer>
  )
}

export default Navbar
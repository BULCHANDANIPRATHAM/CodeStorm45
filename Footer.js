import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  padding: 40px 20px;
  margin-top:500px
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FooterSection = styled.div`
  flex: 1;
  margin-bottom: 20px;
  min-width: 200px;
`;

const FooterHeading = styled.h3`
  margin-bottom: 15px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const Copyright = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 0.9em;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterSection>
          <FooterHeading>About Us</FooterHeading>
          <p>We are a company dedicated to providing high-quality products and services to our customers.</p>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterList>
            <FooterListItem><FooterLink href="/">Home</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/products">Products</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/services">Services</FooterLink></FooterListItem>
            <FooterListItem><FooterLink href="/contact">Contact</FooterLink></FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Contact Us</FooterHeading>
          <FooterList>
            <FooterListItem>123 Business Street</FooterListItem>
            <FooterListItem>City, State 12345</FooterListItem>
            <FooterListItem>Phone: (123) 456-7890</FooterListItem>
            <FooterListItem>Email: info@example.com</FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterHeading>Follow Us</FooterHeading>
          <SocialIcons>
            <FooterLink href="https://facebook.com" aria-label="Facebook"><Facebook /></FooterLink>
            <FooterLink href="https://twitter.com" aria-label="Twitter"><Twitter /></FooterLink>
            <FooterLink href="https://instagram.com" aria-label="Instagram"><Instagram /></FooterLink>
            <FooterLink href="https://linkedin.com" aria-label="LinkedIn"><Linkedin /></FooterLink>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
      <Copyright>&copy; 2024 Your Company Name. All rights reserved.</Copyright>
    </StyledFooter>
  );
};

export default Footer;
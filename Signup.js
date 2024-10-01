import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: 10px;
  color: #34495e;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  font-size: 16px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accessibilityNeeds: '',
    newsletter: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Add your signup logic here
  };

  return (
    <PageContainer>
      <Title>Sign Up for Accessible Travel</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Full Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <Label htmlFor="accessibilityNeeds">Primary Accessibility Need</Label>
        <Select
          id="accessibilityNeeds"
          name="accessibilityNeeds"
          value={formData.accessibilityNeeds}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="wheelchair">Wheelchair Accessibility</option>
          <option value="visual">Visual Impairment Assistance</option>
          <option value="hearing">Hearing Impairment Assistance</option>
          <option value="cognitive">Cognitive Disability Support</option>
          <option value="other">Other</option>
        </Select>

        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          <Label htmlFor="newsletter">Subscribe to our accessible travel newsletter</Label>
        </CheckboxContainer>

        <SubmitButton type="submit"><Link to={'/'}>Sign Up</Link></SubmitButton>
      </Form>
    </PageContainer>
  );
};

export default SignupPage;
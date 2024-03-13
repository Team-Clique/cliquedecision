import React from 'react';
import { render, screen } from '@testing-library/react';
import SecondPage from './SecondPage';

test('renders SecondPage component', () => {
  render(<SecondPage />);
  const headingElement = screen.getByText(/So, What are we eating today?/i);
  expect(headingElement).toBeInTheDocument();
});

// Add more test cases as needed

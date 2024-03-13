import React from 'react';
import { render, screen } from '@testing-library/react'; // Import necessary functions
import ModalPage from './ModalPage';

test('renders ModalPage component', () => {
  render(<ModalPage open={true} />);
  const headerElement = screen.getByText(/We Decided/i);
  expect(headerElement).toBeInTheDocument(); // Ensure to import the toBeInTheDocument function
});

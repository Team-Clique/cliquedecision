import React from 'react';
import { render, screen } from '@testing-library/react'; // Import necessary functions

import '@testing-library/jest-dom' // missing import

import ModalPage from './ModalPage';

describe('renders ModalPage component', () => {
  it("should render ModalPage component correctly", () => {
    render(<ModalPage open={true} />);
    const headerElement = screen.getByText(/We Decided/i);
    expect(headerElement).toBeInTheDocument(); // Ensure to import the toBeInTheDocument function
  })
});

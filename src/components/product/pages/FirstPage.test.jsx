import React from 'react';
import { render, screen } from '@testing-library/react';
import FirstPage from './FirstPage';

describe('renders FirstPage component', () => {
  it("should render Register component correctly", () => {
    render(<FirstPage />);
    const headerElements = screen.getAllByText(/Decide for me/i);
    expect(headerElements.length).toBeGreaterThan(0);
  })
});
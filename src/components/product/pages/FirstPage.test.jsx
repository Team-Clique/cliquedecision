import React from 'react';
import { render, screen } from '@testing-library/react';
import FirstPage from './FirstPage';

test('renders FirstPage component', () => {
  render(<FirstPage />);
  const headerElements = screen.getAllByText(/Decide for me/i);
  expect(headerElements.length).toBeGreaterThan(0);
});
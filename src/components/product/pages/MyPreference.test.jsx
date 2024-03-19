import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyPreference from './MyPreference';
import '@testing-library/jest-dom'

describe('renders MyPreference component', () => {
  it("should render MyPreference component correctly", () => {
    render(<MyPreference />);
    const headingElement = screen.getByText(/Know my preferences/i);
    expect(headingElement).toBeInTheDocument();
  })
});

describe('selects checkboxes in MyPreference component', () => {
  it("should render MyPreference component correctly", () => {
    render(<MyPreference />);
    const mexicanCheckbox = screen.getByLabelText('Mexican');
    const chineseCheckbox = screen.getByLabelText('Chinese');

    userEvent.click(mexicanCheckbox);
    userEvent.click(chineseCheckbox);

    expect(mexicanCheckbox).toBeChecked();
    expect(chineseCheckbox).toBeChecked();
  })
});

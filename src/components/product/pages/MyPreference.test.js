import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import axios from 'axios'; // Mock axios for API call

// Import the component to test
import MyPreference from './MyPreference';

// Mocking the axios get function
jest.mock('axios');

describe('MyPreference component', () => {
    // Test rendering of checkboxes
    it('renders checkboxes for food types', () => {
        const { getByLabelText } = render(<MyPreference />);

        expect(getByLabelText('Mexican')).toBeInTheDocument();
        expect(getByLabelText('Chinese')).toBeInTheDocument();
        // Add similar expectations for other checkboxes
    });

    // Test checkbox selection
    it('updates selectedCheckboxes state when checkboxes are clicked', () => {
        const { getByLabelText } = render(<MyPreference />);
        const mexicanCheckbox = getByLabelText('Mexican');

        fireEvent.click(mexicanCheckbox);

        expect(mexicanCheckbox.checked).toBe(true);
    });

    // Mock API call and test handleOpen function
    it('fetches restaurant data and opens modal when "Decide for me" button is clicked', async () => {
        axios.get.mockResolvedValue({ data: { businesses: [{ id: '1', name: 'Restaurant A' }] } });
        const { getByText, getByLabelText } = render(<MyPreference />);
        const mexicanCheckbox = getByLabelText('Mexican');
        fireEvent.click(mexicanCheckbox);
        const decideButton = getByText('Decide for me');

        fireEvent.click(decideButton);

        expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('searchRestaurant'));
        expect(await getByText('Restaurant A')).toBeInTheDocument();
    });

    // Add more test cases as needed
});

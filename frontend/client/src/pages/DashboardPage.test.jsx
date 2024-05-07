import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DashboardPage from './DashboardPage';

describe('DashboardPage', () => {
    it('should load data without errors', () => {
        // Render the DashboardPage component
        const { getByText } = render(<DashboardPage />);

        // Check if all widgets and data are loaded
        expect(getByText('Logo')).toBeInTheDocument();
        expect(getByText('Marca')).toBeInTheDocument();
        expect(getByText('Fábrica 1')).toBeInTheDocument();
    });

    it('should handle interactions correctly', () => {
        // Render the DashboardPage component
        const { getByText, getByLabelText } = render(<DashboardPage />);

        // Simulate interaction with Sidebar accordion
        fireEvent.click(getByText('Marca'));
        expect(getByText('Pilot')).toBeInTheDocument(); // Example assertion for expanded accordion section

        // Simulate interaction with filters (assuming your filters have specific labels)
        fireEvent.click(getByLabelText('Pilot')); // Example interaction with checkbox
        expect(getByText('Fábrica 1')).toBeInTheDocument(); // Example assertion for filtered products
    });
});
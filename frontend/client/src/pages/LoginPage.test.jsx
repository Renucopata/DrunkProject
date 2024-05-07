// Import dependencies and the component to be tested
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
    it('should register user successfully', () => {
        // Mock onLogin function
        const onLogin = jest.fn();

        // Render the component
        const { getByPlaceholderText, getByText } = render(
            <LoginPage onLogin={onLogin} />
        );

        // Fill in the form with valid data
        fireEvent.change(getByPlaceholderText('Nombre'), { target: { value: 'John' } });
        fireEvent.change(getByPlaceholderText('Apellido'), { target: { value: 'Doe' } });
        fireEvent.change(getByPlaceholderText('Nombre de usuario'), { target: { value: 'johndoe' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });

        // Submit the form
        fireEvent.submit(getByText('Register'));

        // Check if onLogin function was called
        expect(onLogin).toHaveBeenCalled();
    });

    it('should not register user with invalid data', () => {
        // Mock onLogin function
        const onLogin = jest.fn();

        // Render the component
        const { getByPlaceholderText, getByText } = render(
            <LoginPage onLogin={onLogin} />
        );

        // Fill in the form with invalid data (empty fields)
        fireEvent.change(getByPlaceholderText('Nombre'), { target: { value: '' } });
        fireEvent.change(getByPlaceholderText('Apellido'), { target: { value: '' } });
        fireEvent.change(getByPlaceholderText('Nombre de usuario'), { target: { value: '' } });
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: '' } });

        // Submit the form
        fireEvent.submit(getByText('Register'));

        // Check if onLogin function was not called
        expect(onLogin).not.toHaveBeenCalled();
    });
});
// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityChain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityChain/i);
    expect(titleElement).toBeInTheDocument();
});

import React from 'react';
import Header from './Header';
import { render, screen } from "@testing-library/react";

describe('Header', () => {
    it('should render title', () => {
        render(<Header title='Star Wars Starships' />);

        expect(screen.getByText('Star Wars Starships')).toBeInTheDocument();
    })
});
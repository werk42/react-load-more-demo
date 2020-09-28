import React from 'react';
import { render, screen } from "@testing-library/react"
import AppListItem from './ListItem'

describe('ListItem', () => {
    it('should render correctly', () => {
        render(<AppListItem model="UCC" name="Enterprise" />);
    });

    it('should render name', () => {
        render(<AppListItem model="UCC" name="Enterprise" />);

        expect(screen.getByText('Enterprise')).toBeInTheDocument();
    });

    it('should render model', () => {
        render(<AppListItem model="UCC" name="Enterprise" />);

        expect(screen.getByText('UCC')).toBeInTheDocument();
    })
})

import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import AppButton from './Button';

describe('Button', () => {
  it('should render title', () => {
    render(<AppButton title='My button' onClick={jest.fn()} />);
    
    expect(screen.getByText('My button')).toBeInTheDocument();
  });

  it('should call on click prop', () => {
    const click = jest.fn();
    render(<AppButton title='My button' onClick={click} />);

    fireEvent.click(screen.getByText('My button'));

    expect(click).toHaveBeenCalled();
  });
});
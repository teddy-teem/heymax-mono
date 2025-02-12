import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { Chip } from '../chip.web';

describe('Chip Component', () => {
  it('renders the chip with the provided text', () => {
    const testText = 'Test Chip';
    render(<Chip text={testText} />);

    const chipElement = screen.getByText(testText);
    expect(chipElement).toBeInTheDocument();
  });

  it('applies default styles when `applyNeonEffect` is false', () => {
    const testText = 'Test Chip';
    render(<Chip text={testText} />);

    const chipElement = screen.getByText(testText).parentElement;
    expect(chipElement).toHaveStyle({
      backgroundColor: '#331D61',
      borderRadius: '20px',
      padding: '10px',
      color: 'white',
      fontWeight: 'bold',
    });
  });

  it('applies neon effect styles when `applyNeonEffect` is true', () => {
    const testText = 'Test Chip';
    render(<Chip text={testText} applyNeonEffect={true} />);

    const chipElement = screen.getByText(testText).parentElement;
    expect(chipElement).toHaveStyle({
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
      backgroundColor: '#5B36B6',
    });
  });


  it('does not apply neon effect styles when `applyNeonEffect` is false', () => {
    const testText = 'Test Chip';
    render(<Chip text={testText} applyNeonEffect={false} />);

    const chipElement = screen.getByText(testText).parentElement;
    expect(chipElement).not.toHaveStyle({
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
      backgroundColor: '#5B36B6',
    });
  });
});
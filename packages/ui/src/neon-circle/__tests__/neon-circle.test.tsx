import React from 'react';
import { render, screen } from '@testing-library/react';
import { NeonCircle } from '../neon-circle.web';

describe('NeonCircle Component', () => {
  it('renders correctly and displays the given number', () => {
    const testValue = 5;
    render(<NeonCircle value={testValue} />);
    
    const numberElement = screen.getByText(testValue.toString());
    
    expect(numberElement).toBeInTheDocument();
    expect(numberElement).toHaveClass('number');
  });

  it('has the correct class names for styling', () => {
    const { container } = render(<NeonCircle value={10} />);
    
    const circleGlow = container.firstChild as HTMLElement;
    expect(circleGlow).toHaveClass('circle-glow');

    const circle = container.querySelector('.circle');
    expect(circle).toBeInTheDocument();
  });
});

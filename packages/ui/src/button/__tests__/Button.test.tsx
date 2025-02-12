import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '../button.web';

describe('Button component', () => {
  it('renders the button with correct text', () => {
    render(<Button  onPress={()=>null }>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    
  });
});

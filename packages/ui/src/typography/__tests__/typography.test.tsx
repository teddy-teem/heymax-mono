import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from '../typography.web';
import { TypographyProps } from '../typography.type';


describe('Typography Component', () => {
  it('renders with default props', () => {
    render(<Typography>Default Text</Typography>);

    const textElement = screen.getByText('Default Text');
    expect(textElement).toBeInTheDocument();
    expect(textElement.tagName).toBe('P'); // Default variant is 'body'
    expect(textElement).toHaveStyle({
      fontFamily: 'Arial, sans-serif',
      fontSize: '1rem',
      color: 'white',
    });
  });

  it('renders different variants correctly', () => {
    const variants: TypographyProps['variant'][] = ['h1', 'h2', 'h3', 'h4', 'body', 'caption'];
    const expectedTags = { h1: 'H1', h2: 'H2', h3: 'H3', h4: 'H4', body: 'P', caption: 'SPAN' };

    variants.forEach((variant) => {
      render(<Typography variant={variant}>Test {variant}</Typography>);
      const element = screen.getByText(`Test ${variant}`);
      expect(element.tagName).toBe(expectedTags[variant]);
    });
  });

  it('applies custom color correctly', () => {
    render(<Typography color="red">Colored Text</Typography>);
    const coloredElement = screen.getByText('Colored Text');
    expect(coloredElement).toHaveStyle({ color: 'red' });
  });

  it('applies custom styles', () => {
    render(
      <Typography style={{ fontWeight: 'bold', fontSize: '20px' }}>Styled Text</Typography>
    );
    const styledElement = screen.getByText('Styled Text');
    expect(styledElement).toHaveStyle({ fontWeight: 'bold', fontSize: '20px' });
  });

  it('applies className correctly', () => {
    const { container } = render(<Typography className="custom-class">Class Test</Typography>);
    const element = screen.getByText('Class Test');
    expect(element).toHaveClass('custom-class');
  });
});

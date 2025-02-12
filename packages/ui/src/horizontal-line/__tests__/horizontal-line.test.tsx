import React from 'react';
import { render } from '@testing-library/react';
import { HorizontalLine, HorizontalLineProps } from '../horizontal-line.web';


describe('HorizontalLine Component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<HorizontalLine />);
    const div = container.firstChild as HTMLDivElement;

    expect(div).toBeInTheDocument();
    expect(div).toHaveStyle({
      width: '100dvw',
      backgroundColor: '#802EFF',
      height: '1px',
    });
  });

  it('applies custom width and color', () => {
    const customProps: HorizontalLineProps = { width: 200, color: '#FF5733' };
    const { container } = render(<HorizontalLine {...customProps} />);
    const div = container.firstChild as HTMLDivElement;

    expect(div).toHaveStyle({
      width: '200px',
      backgroundColor: '#FF5733',
    });
  });

  it('supports string-based width values', () => {
    const { container } = render(<HorizontalLine width="50%" />);
    const div = container.firstChild as HTMLDivElement;

    expect(div).toHaveStyle({ width: '50%' });
  });
});

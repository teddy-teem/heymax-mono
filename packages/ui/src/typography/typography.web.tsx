import React, { JSX } from 'react';
import { TypographyProps } from './typography.type';

const variantToTag = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  caption: 'span',
};

export const Typography = ({
  variant = 'body',
  children,
  style,
  className,
}: TypographyProps) => {
  const Tag = variantToTag[variant] as keyof JSX.IntrinsicElements;

  return (
    <Tag
      style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: getFontSize(variant),
        ...style,
      }}
      className={className}
    >
      {children}
    </Tag>
  );
};

const getFontSize = (variant: TypographyProps['variant']) => {
  switch (variant) {
    case 'h1':
      return '2.5rem';
    case 'h2':
      return '2rem';
    case 'h3':
      return '1.75rem';
    case 'body':
      return '1rem';
    case 'caption':
      return '0.875rem';
    default:
      return '1rem';
  }
};

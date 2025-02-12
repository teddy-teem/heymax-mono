import React from 'react';
export interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';
    children: React.ReactNode;
    style?: React.CSSProperties | object;
    className?: string;
    color?: string;
  }
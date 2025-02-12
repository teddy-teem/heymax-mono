import React from 'react';

export interface HorizontalLineProps {
  width?: number | string;
  color?: string;
}

export const HorizontalLine = ({
  width = '100dvw',
  color = '#802EFF',
}: HorizontalLineProps) => {
  return (
    <div
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        backgroundColor: color,
        height: '1px',
      }}
    />
  );
};

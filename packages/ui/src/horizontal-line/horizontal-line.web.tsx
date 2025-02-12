import React from 'react';

export interface HorizontalLineProps {
  width?: number | string;
  color?: string;
}

export const HorizontalLine: React.FC<HorizontalLineProps> = ({
  width = '100dvw',
  color = '#802EFF',
}) => {
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

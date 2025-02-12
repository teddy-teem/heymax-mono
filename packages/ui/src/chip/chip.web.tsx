import React from 'react';
import { Typography } from '../typography';
export interface ChipProps {
  text: string;
  applyNeonEffect?: boolean;
}

export const Chip = ({ text, applyNeonEffect }: ChipProps) => {
  const chipStyle = {
    backgroundColor: '#331D61',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    color: 'white',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    ...(applyNeonEffect && {
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
      backgroundColor: '#5B36B6',
    }),
  };

  return (
    <div style={chipStyle}>
      <Typography>{text}</Typography>
    </div>
  );
}

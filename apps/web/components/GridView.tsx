import { SHOPPING_BRANDS } from '@heymax/constants';
import Image from 'next/image';
import React from 'react';

export default function GridView(): React.ReactNode {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    marginTop: 20,
    width: '100%',
    flexWrap: 'wrap',
    gap: '10px',
    flexGrow: 1,
    paddingRight: '140px',
    paddingLeft: '100px',
    justifyContent: 'center',
  };
  return (
    <div style={containerStyle}>
      {SHOPPING_BRANDS.map((img, index) => (
        <Image
          key={index}
          src={img?.url}
          alt={`Image ${index}`}
          height={img?.height}
          width={img?.width}
          style={{
            borderRadius: '15px',
            flexGrow: 1,
            objectFit: 'cover',
            ...(index === 2 || index === 3 ? { marginTop: '-18px' } : {}),
          }}
        />
      ))}
    </div>
  );
}

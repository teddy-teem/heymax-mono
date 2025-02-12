import { SHOPPING_BRANDS } from '@heymax/constants';
import Image from 'next/image';
import React from 'react';

export default function GridView(): React.ReactNode {
  return (
    <div className="flex w-4/5 flex-wrap gap-2.5 mt-4 justify-center">
      {SHOPPING_BRANDS.map((img, index) => (
        <Image
          key={index}
          src={img?.url}
          alt={`Image ${index}`}
          height={img?.height - 10}
          width={img?.width - 10}
          style={{
            borderRadius: '15px',
          }}
        />
      ))}
    </div>
  );
}

'use client';
import { COLORS, Typography } from '@heymax/ui';
import Image from 'next/image';
import React from 'react';

export default function BrandIntro() {
  return (
    <div className="h-full gap-20 flex flex-col justify-center items-center">
      <Image
        src={'./brand-logo.svg'}
        alt={'brand logo'}
        height={200}
        width={200}
      />
      <Image
        src={'./universe.svg'}
        alt={'brand logo'}
        height={200}
        width={200}
        layout="intrinsic"
        objectFit="contain"
      />
      <div className="flex flex-col justify-center items-center">
        <Typography variant="h2">Shop your way to a</Typography>
        <Typography variant="h2"  color={COLORS.default.primary}>
          Dream Vacation
        </Typography>
        <Typography
          variant="body"
          style={{
            paddingLeft: 110,
            paddingRight: 110,
            textAlign: 'center',
          }}
        >
          Turn your expenses into dream vacations by earning miles every time
          you shop
        </Typography>
      </div>
    </div>
  );
}

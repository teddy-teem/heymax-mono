'use client';
import { REDEEMS } from '@heymax/constants';
import { HorizontalLine, NeonCircle, Typography } from '@heymax/ui';
import React from 'react';
import RedeemCard from '../components/RedeemCard';

export default function Redeem() {
  return (
    <div className="h-full flex flex-col items-center mr-10 mt-12 pb-5 gap-5">
      <div className="w-full flex flex-row justify-start items-center">
        <HorizontalLine />
        <NeonCircle value={2} />
      </div>
      <Typography
        variant="h2"
        style={{
          marginRight: 40,
          textAlign: 'right',
          width: '100%',
        }}
      >
        Redeem your trip
      </Typography>
      <div className="flex flex-col items-center gap-5 w-10/12">
        {REDEEMS.map((i) => (
          <RedeemCard
            key={i.id}
            icon={i.icon}
            title={i.title}
            body={i.body}
            instruction={i.instruction}
          />
        ))}
      </div>
    </div>
  );
}

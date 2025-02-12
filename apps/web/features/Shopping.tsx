'use client';
import { QUICK_ACTIONS } from '@heymax/constants';
import { Chip, HorizontalLine, NeonCircle, Typography } from '@heymax/ui';
import React, { useState } from 'react';
import GridView from '../components/GridView';

export default function Shopping() {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="h-full gap-4 flex flex-col mt-10 ml-10">
      <div className="w-full flex items-center justify-end">
        <NeonCircle value={1} />
        <HorizontalLine />
      </div>
      <Typography variant="h1" style={{lineHeight: 1}}>
        Shop your favorite brands, earn miles
      </Typography>
      <div className="ml-10 flex-col">
        <div className="flex gap-3 overflow-x-auto whitespace-nowrap max-w-full">
          {QUICK_ACTIONS.map((text, ind) => (
            <button
              key={ind}
              className="bg-none"
              onClick={() => {
                setSelectedTab(ind);
              }}
            >
              <Chip text={text} applyNeonEffect={selectedTab === ind} />
            </button>
          ))}
        </div>

        <GridView />
      </div>
    </div>
  );
}

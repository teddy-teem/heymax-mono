'use client';
import { REDEEMS } from '@heymax/constants';
import { HorizontalLine, NeonCircle, Typography } from '@heymax/ui';
import React from 'react';
import RedeemCard from '../components/RedeemCard';

export default function Redeem() {
  return (
    <div style={styles.container}>
      <div style={styles.line}>
        <HorizontalLine />
        <NeonCircle value={2} />
      </div>
      <Typography
        variant="h1"
        style={{
          color: 'white',
          marginRight: 40,
          textAlign: 'right',
          width: '100%',
        }}
      >
        Redeem your trip
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
          marginRight: -80,
        }}
      >
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

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90dvh',
    marginRight: 80,
    marginTop: 50,
    paddingBottom: 20,
    gap: 20,
  },
  line: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerStyle: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    marginLeft: -40,
    scrollBehavior: 'smooth',
    display: 'flex',
    paddingTop: '10px',
    paddingBottom: '10px',
    gap: '12px',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
  },
};

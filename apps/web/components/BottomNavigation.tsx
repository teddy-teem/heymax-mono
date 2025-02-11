'use client';
import { LAST_SCREEN_REDIRECT_URL, ROUTES } from '@heymax/constants';
import { Button, HorizontalLine, Typography } from '@heymax/ui';
import { useRouter } from 'next/navigation';
import React from 'react';

import RightArrowIcon from '../public/icons/right-arrow';

interface BottomNavigationProps {
  currentIndex: number;
  buttonLabel: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  currentIndex,
  buttonLabel,
}) => {

  const router = useRouter();

  const handleButtonClick = () => {
    switch (currentIndex) {
      case 0:
        router.push(String(ROUTES[1]?.route));
        break;
      case 1:
        router.push(String(ROUTES[2]?.route));
        break;
      case 2:
        window.open(LAST_SCREEN_REDIRECT_URL, '_blank', 'noopener,noreferrer');
        break;
      default:
        router.push(String(ROUTES[0]?.route));
    }
  };

  return (
    <div style={styles.container}>
      <HorizontalLine />
      <div style={styles.contentContainer}>
        <div style={styles.dotContainer}>
          {[1, 2, 3].map((_, index) => {
            const width = index === currentIndex ? 25 : 8;
            return (
              <span
                key={index}
                style={{
                  ...styles.dot,
                  width,
                  backgroundColor: index === currentIndex ? 'white' : 'gray',
                  transition: 'width 0.3s ease-in-out',
                }}
              />
            );
          })}
        </div>
        <Button onPress={handleButtonClick}>
          <div style={styles.buttonChildren}>
            <Typography style={{ color: 'white' }}>{buttonLabel}</Typography>
            <RightArrowIcon />
          </div>
        </Button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '10dvh',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  dotContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 8,
    borderRadius: 10,
    margin: '0 2px',
    display: 'inline-block',
  },
  buttonChildren: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
  },
};

export default BottomNavigation;

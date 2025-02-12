'use client';
import { LAST_SCREEN_REDIRECT_URL, ROUTES } from '@heymax/constants';
import { Button, Typography } from '@heymax/ui';
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
    <div className="w-full flex flex-col max-h-[100px] items-center border-t-[1px] border-t-primary">
      <div className="flex w-full justify-between p-5">
        <div className="flex justify-center items-center">
          {[1, 2, 3].map((_, index) => {
            const width = index === currentIndex ? 25 : 8;
            return (
              <span
                key={index}
                className="h-[8] rounded-full mx-[2px]"
                style={{
                  width,
                  backgroundColor: index === currentIndex ? 'white' : 'gray',
                  transition: 'width 0.3s ease-in-out',
                }}
              />
            );
          })}
        </div>
        <Button onPress={handleButtonClick}>
          <div className="flex justify-around items-center gap-2">
            <Typography style={{ color: 'white' }}>{buttonLabel}</Typography>
            <RightArrowIcon />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default BottomNavigation;

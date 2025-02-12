import { ROUTES } from '@heymax/constants';
import BottomNavigation from '../components/BottomNavigation';
import BrandIntro from '../features/BrandIntroduction';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-end items-center">
      <div className="h-full">
        <BrandIntro />
      </div>
      <div className="w-full">
        <BottomNavigation
          currentIndex={ROUTES[0]?.id || 0}
          buttonLabel={ROUTES[0]?.instruction || ''}
        />
      </div>
    </div>
  );
}

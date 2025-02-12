import { ROUTES } from '@heymax/constants';
import BottomNavigation from '../../components/BottomNavigation';
import Shopping from '../../features/Shopping';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-end items-center">
      <div className="h-full w-full">
        <Shopping />
      </div>
      <div className="w-full">
        <BottomNavigation
          currentIndex={ROUTES[1]?.id || 1}
          buttonLabel={ROUTES[1]?.instruction || ''}
        />
      </div>
    </div>
  );
}

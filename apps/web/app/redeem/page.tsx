import { ROUTES } from '@heymax/constants';
import BottomNavigation from '../../components/BottomNavigation';
import Redeem from '../../features/Redeem';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <div className="h-11/12 w-full">
        <Redeem />
      </div>
      <div className="h-1/12 w-full flex flex-col flex-end">
        <BottomNavigation
          currentIndex={ROUTES[2]?.id || 2}
          buttonLabel={ROUTES[2]?.instruction || ''}
        />
      </div>
    </div>
  );
}

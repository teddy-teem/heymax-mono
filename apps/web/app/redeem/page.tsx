import { ROUTES } from '@heymax/constants';
import BottomNavigation from '../../components/BottomNavigation';
import Redeem from '../../features/Redeem';

export default function Home() {
  return (
    <div
      style={{
        width: '100%',
        height: '100dvh',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <Redeem />
      <BottomNavigation
        currentIndex={ROUTES[2]?.id || 2}
        buttonLabel={ROUTES[2]?.instruction || ''}
      />
    </div>
  );
}

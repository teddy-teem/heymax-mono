import { ROUTES } from '@heymax/constants';
import BottomNavigation from '../../components/BottomNavigation';
import Shopping from '../../features/Shopping';

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
      <Shopping />
      <BottomNavigation
        currentIndex={ROUTES[1]?.id || 1}
        buttonLabel={ROUTES[1]?.instruction || ''}
      />
    </div>
  );
}

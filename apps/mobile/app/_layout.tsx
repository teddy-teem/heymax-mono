import { LAST_SCREEN_REDIRECT_URL, ROUTES } from '@heymax/constants';
import { RelativePathString, Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import BottomNavigation from '@/components/BottomNavigation';
import 'react-native-reanimated';
import '../global.css';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const router = useRouter();
  const [currentRouteDetails, setCurrentRouteDetails] = useState(ROUTES[0]);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        // eslint-disable-next-line
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  const handleNext = () => {
    switch (currentRouteDetails.route) {
      case ROUTES[0].route:
        router.push(ROUTES[1].route as RelativePathString);
        setCurrentRouteDetails(ROUTES[1]);
        break;
      case ROUTES[1].route:
        router.push(ROUTES[2].route as RelativePathString);
        setCurrentRouteDetails(ROUTES[2]);
        break;
      case ROUTES[2].route:
        WebBrowser.openBrowserAsync(LAST_SCREEN_REDIRECT_URL);
        break;
      default:
        router.push(ROUTES[0].route as RelativePathString);
        setCurrentRouteDetails(ROUTES[0]);
    }
  };

  return (
    <View className="flex-1 bg-primary">
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={ROUTES[0].route} />
        <Stack.Screen name={ROUTES[1].route} />
        <Stack.Screen name={ROUTES[2].route} />
        <Stack.Screen name="+not-found" />
      </Stack>

      <View className="absolute bottom-0 left-0 right-0">
        <BottomNavigation
          paginationIndex={currentRouteDetails?.id || 0}
          label={currentRouteDetails?.instruction || ''}
          onNext={handleNext}
        />
      </View>

      <StatusBar style="light" />
    </View>
  );
};


export default RootLayout;

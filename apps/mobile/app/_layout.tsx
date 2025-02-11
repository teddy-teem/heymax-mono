import { LAST_SCREEN_REDIRECT_URL, ROUTES } from '@heymax/constants';
import { COLORS } from '@heymax/ui';
import { RelativePathString, Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNavigation from '@/components/BottomNavigation';
import 'react-native-reanimated';
import '../global.css';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const router = useRouter();
  const [currentRouteDetails, setCurrentRouteDetails] = useState(ROUTES[0]);

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
    <View style={styles.container}>
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

      <View style={styles.bottomNavigationContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.default.background,
  },
  bottomNavigationContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
  },
});

export default RootLayout;

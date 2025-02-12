import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { RelativePathString, Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as WebBrowser from "expo-web-browser";
import { COLORS } from "@heymax/ui";
import { View, StyleSheet } from "react-native";
import "react-native-reanimated";
import "../global.css";
import BottomNavigation from "@/components/BottomNavigation";
import { LAST_SCREEN_REDIRECT_URL, ROUTES } from "@heymax/constants";

SplashScreen.preventAutoHideAsync();

const openInAppBrowser = async () => {
  try {
    await WebBrowser.openBrowserAsync(LAST_SCREEN_REDIRECT_URL);
  } catch (error) {
    console.error("Error opening in-app browser:", error);
  }
};

export default function RootLayout() {
  const router = useRouter();
  const [currentRouteDetails, setCurrentRouteDetails] = useState(ROUTES[0]);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const handleNext = () => {
    console.log(currentRouteDetails?.id);
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
        openInAppBrowser();
        break;
      default:
        router.push("/");
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
          label={currentRouteDetails?.instruction || ""}
          onNext={handleNext}
        />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.default.background,
  },
  bottomNavigationContainer: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
  },
});

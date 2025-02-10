import * as React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";

import BottomNavigation from "@/components/BottomNavigation";
import BrandDetails from "@/features/onboard/BrandDetails";
import ShoppingBrands from "@/features/onboard/ShoppingBrands";
import RedeemPage from "@/features/onboard/RedeemPage";
import * as WebBrowser from "expo-web-browser";

const width: number = Dimensions.get("window").width;

const URL = "https://heymax.ai";
const openInAppBrowser = async () => {
  try {
    await WebBrowser.openBrowserAsync(URL);
  } catch (error) {
    console.error("Error opening in-app browser:", error);
  }
};

export interface CarouselItem {
  id: number;
  component: React.ReactNode;
  instruction: string;
  showArrow: boolean;
}
const carouselData: CarouselItem[] = [
  {
    id: 1,
    component: <BrandDetails />,
    instruction: "See How It Works",
    showArrow: true,
  },
  { id: 2, component: <ShoppingBrands />, instruction: "", showArrow: true },
  {
    id: 3,
    component: <RedeemPage />,
    instruction: "Get Started",
    showArrow: false,
  },
];
interface CarouselProps {}

const Index: React.FC<CarouselProps> = () => {
  const carouselRef = React.useRef<any>(null);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const totalItems: number = carouselData.length;

  const handleNext = (): void => {
    if (carouselRef.current && currentIndex < totalItems - 1) {
      const nextIndex: number = currentIndex + 1;
      carouselRef.current.scrollTo({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }
  };

  const renderItem = ({ item }: { item: CarouselItem }) => (
    <>{item.component}</>
  );

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Carousel
          ref={carouselRef}
          pagingEnabled={true}
          loop={false}
          width={width}
          data={carouselData}
          scrollAnimationDuration={1000}
          onSnapToItem={(index: number): void => {
            setCurrentIndex(index);
          }}
          renderItem={renderItem}
        />
      </View>
      <BottomNavigation
        paginationIndex={currentIndex}
        items={carouselData}
        onNext={() => {
          currentIndex === 2 ? openInAppBrowser() : handleNext();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.98,
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
  },
  carouselContainer: {
    flex: 1,
    flexDirection: "row",
    height: "80%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  slide: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
  },
});

export default Index;

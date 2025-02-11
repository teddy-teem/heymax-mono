
import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";

export interface PaginationProps<T> {
  paginationIndex: number;
  items: T[];
}

export function Pagination<T>({ paginationIndex, items }: PaginationProps<T>) {
  const animatedIndex = useSharedValue(paginationIndex);

  useEffect(() => {
    animatedIndex.value = withTiming(paginationIndex, { duration: 300 });
  }, [paginationIndex]);

  return (
    <View style={styles.container}>
      {items.map((_, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          return {
            width: interpolate(
              animatedIndex.value,
              [index - 1, index, index + 1],
              [8, 25, 8],
              Extrapolation.CLAMP
            ),
          };
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              animatedStyle,
              { backgroundColor: index === paginationIndex ? "white" : "gray" },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 8,
    borderRadius: 10,
    marginHorizontal: 2,
  },
});

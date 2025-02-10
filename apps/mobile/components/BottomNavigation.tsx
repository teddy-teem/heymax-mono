import { View, StyleSheet, Alert } from "react-native";
import React from "react";
import { COLORS, Button, Typography, Pagination } from "@repo/ui";
import { CarouselItem } from "@/app/(onboard)";
import RightArrowIcon from "@/assets/icons/right-arrow";
import { scale } from "react-native-size-matters";

interface IProps {
  paginationIndex: number;
  items: CarouselItem[];
  onNext: () => void;
}


export default function BottomNavigation({
  paginationIndex,
  items,
  onNext,
}: IProps) {


  return (
    <View style={[styles.container]}>
      <Pagination paginationIndex={paginationIndex} items={items} />
      <Button onPress={onNext}>
        <View style={[styles.buttonChild]}>
          <Typography variant="h3" style={styles.buttonText}>
            {items[paginationIndex].instruction}
          </Typography>
          {items[paginationIndex].showArrow && (
            <RightArrowIcon
              {...(!items[paginationIndex].instruction && {
                height: scale(20),
                width: scale(20),
              })}
            />
          )}
        </View>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.default.background,
    width: "100%",
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#231746",
  },
  buttonChild: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: scale(10),
  },
  buttonText: {
    color: "white",
  },
});

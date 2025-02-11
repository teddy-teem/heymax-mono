import { View, StyleSheet } from "react-native";
import React from "react";
import { Button, Typography } from "@heymax/ui";
import RightArrowIcon from "@/assets/icons/right-arrow";
import { scale } from "react-native-size-matters";
import { Pagination } from "./Pagination";
import type { BottomNavigationProps } from "@/utils/models/BottomNavigation";

const BottomNavigation = ({
  paginationIndex,
  onNext,
  label,
}: BottomNavigationProps): React.ReactNode => {
  return (
    <View className="bg-background flex-row justify-between px-10 border-t-2 border-t-[#2B204D] py-4">
      <Pagination paginationIndex={paginationIndex} />
      <Button onPress={onNext}>
        <View className="flex-row items-center gap-2 justify-center">
          <Typography variant="h3" style={styles.buttonText}>
            {label}
          </Typography>
          <RightArrowIcon
            {...(!label && {
              height: scale(20),
              width: scale(20),
            })}
          />
        </View>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
  },
});

export default BottomNavigation;

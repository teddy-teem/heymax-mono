import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { NeonCircle, HorizontalLine, Typography, Chip } from "@heymax/ui";
import ImageGrid from "../../components/GridView";
import { scale } from "react-native-size-matters";
import QuickActions from "@/components/quick-actions";

const { width } = Dimensions.get("screen");

const ShoppingBrands = (): React.ReactNode => {
  return (
    <View style={[styles.container]}>
      <View style={styles.neonLine}>
        <NeonCircle value={1} />
        <HorizontalLine width={width - scale(45)} />
      </View>
      <Typography
        variant="h1"
        style={{ color: "white", marginLeft: scale(5), marginTop: scale(20) }}
      >
        Shop your favorite brands, earn miles
      </Typography>
      <View style={{}}>
        <QuickActions />
        <ImageGrid />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: scale(41),
    marginLeft: scale(10),
  },
  neonLine: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default ShoppingBrands;

import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import React from "react";
import { NeonCircle, HorizontalLine, Typography, Chip } from "@heymax/ui";
import ImageGrid from "../components/GridView";
import { scale } from "react-native-size-matters";
import QuickActions from "@/components/QuickActions";

const { width } = Dimensions.get("screen");

const ShoppingBrands = (): React.ReactNode => {
  return (
    <ScrollView style={{paddingTop: scale(80), paddingLeft: scale(30)}}>
      <View style={styles.neonLine}>
        <NeonCircle value={1} />
        <HorizontalLine width={width - scale(60)} />
      </View>
      <Typography
        variant="h1"
        style={{ color: "white", marginLeft: scale(5), marginTop: scale(20) }}
      >
        Shop your favorite brands, earn miles
      </Typography>
      <View>
        <QuickActions />
        <ImageGrid />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  neonLine: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default ShoppingBrands;

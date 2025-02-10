import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BrandLogo from "@/assets/images/brand-logo";
import UniverseImage from "@/assets/images/universe";
import { COLORS, Typography } from "@repo/ui";
import { scale } from "react-native-size-matters";

const BrandDetails = (): React.ReactNode => {
  return (
    <View style={[styles.container]}>
      <BrandLogo />
      <UniverseImage />
      <View style={styles.content}>
        <Typography style={styles.contentHeading1} variant="h1">
          Shop your way to a
        </Typography>
        <Typography style={styles.contentHeading2} variant="h1">
          Dream Vacation
        </Typography>
        <Typography style={styles.contentBody} variant="body">
          Turn your expenses into dream vacations by earning miles every time
          you shop
        </Typography>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    gap: scale(32),
    marginTop: scale(100),
  },
  content: { justifyContent: "center", alignItems: "center" },
  contentHeading1: { color: COLORS.default.secondary },
  contentHeading2: { color: COLORS.default.primary },
  contentBody: {
    color: COLORS.default.secondary,
    textAlign: "center",
    paddingLeft: scale(50),
    paddingRight: scale(50),
    marginTop: scale(10),
    lineHeight: scale(20),
  },
});

export default BrandDetails;

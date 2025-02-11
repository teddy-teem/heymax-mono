import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
} from "react-native";
import React from "react";
import { COLORS, Typography } from "@heymax/ui";
import {scale} from "react-native-size-matters"

export interface RedeemCardProp {
  icon: ImageSourcePropType;
  title: string;
  body: string;
  instruction: string;
}

export default function RedeemCard({
  icon,
  title,
  body,
  instruction,
}: RedeemCardProp) {
  return (
    <View style={[styles.container]}>
      <Image source={icon} style={{ height: scale(60), width: scale(60) }} />
      <View style={styles.content}>
        <Typography variant="h3" style={{ color: "white" }}>
          {title}
        </Typography>
        <Typography style={{ color: "gray", flexWrap: "wrap", }}>
          {body}
        </Typography>
        <Typography style={{ color: COLORS.default.primary }}>{instruction}</Typography>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: scale(20),
    borderRadius: scale(16),
    backgroundColor: "#1C0E4B",
    flexDirection: "row",
    alignItems: "center",
    gap: scale(5),
  },
  content: {
    flexDirection: "column",
    width: "80%",
    gap: scale(8)
  },
});

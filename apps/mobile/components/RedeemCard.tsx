import { View, Image, ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";
import { COLORS, Typography } from "@heymax/ui";
import { scale } from "react-native-size-matters";

export interface RedeemCardProp {
  icon: ImageSourcePropType;
  title: string;
  body: string;
  instruction: string;
}

const RedeemCard = ({ icon, title, body, instruction }: RedeemCardProp) => {
  
  return (
    <View className="flex-row items-center rounded-xl p-6 gap-2 bg-[#1C0E4B]">
      <Image source={icon} style={{ height: scale(60), width: scale(60) }} />
      <View className="flex-col w-9/12 gap-3">
        <Typography variant="h3" style={{ color: "white" }}>
          {title}
        </Typography>
        <Typography style={{ color: "gray", flexWrap: "wrap" }}>
          {body}
        </Typography>
        <Typography style={{ color: COLORS.default.primary }}>
          {instruction}
        </Typography>
      </View>
    </View>
  );
};

export default RedeemCard;

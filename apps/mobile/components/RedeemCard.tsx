import { COLORS, Typography } from '@heymax/ui';
import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { scale } from 'react-native-size-matters';

export interface RedeemCardProp {
  icon: ImageSourcePropType;
  title: string;
  body: string;
  instruction: string;
}

const RedeemCard = ({ icon, title, body, instruction }: RedeemCardProp) => {
  
  return (
    <View className="flex-row items-center rounded-xl px-4 py-3 gap-2 bg-[#1C0E4B]">
      <Image source={icon} style={{ height: scale(60), width: scale(60) }} />
      <View className="flex-col w-9/12 gap-3">
        <Typography variant="h3" style={{ color: 'white' }}>
          {title}
        </Typography>
        <Typography style={{ color: 'gray', flexWrap: 'wrap' }}>
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

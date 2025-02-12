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
    <View className="flex flex-row items-center rounded-[20px] py-3 mb-3 gap-2 bg-[#1C0E4B]">
      <Image source={icon} style={{ height: scale(60), width: scale(60) }} />
      <View className="flex-col gap-3">
        <Typography variant="h3">
          {title}
        </Typography>
        <View className='w-10/12'>
        <Typography color='gray'>
          {body}
        </Typography>
        </View>
        <Typography color='#802DFF'>
          {instruction}
        </Typography>
      </View>
    </View>
  );
};

export default RedeemCard;

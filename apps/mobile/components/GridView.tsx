import { SHOPPING_BRANDS } from '@heymax/constants';
import React from 'react';
import { View, Image } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function GridView() {
  return (
    <View className="flex-row justify-start mt-[-10px] flex-wrap gap-2 mr-10">
      {SHOPPING_BRANDS.map((i, index) => (
        <Image
          key={index}
          source={i.url}
          style={{
            flexGrow: 1,
            height: i.height,
            width: i.width,
            borderRadius: 15,
            ...((index === 2 || index === 3) && { marginTop: scale(-18) }),
            ...(index === 4 && { marginRight: scale(1) }),
          }}
          resizeMode="cover"
        />
      ))}
    </View>
  );
}

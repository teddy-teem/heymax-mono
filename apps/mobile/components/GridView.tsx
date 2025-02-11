import { SHOPPING_BRANDS } from '@heymax/constants';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function GridView() {
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: scale(10),
    marginRight: scale(30),
  },
});

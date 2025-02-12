import { COLORS, Typography } from '@heymax/ui';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import BrandLogo from '@/assets/images/brand-logo';
import UniverseImage from '@/assets/images/universe';

const BrandDetails = (): React.ReactNode => {

  return (
    <View className="flex-1 items-center gap-12 mt-32">
      <BrandLogo />
      <UniverseImage />
      <View className="flex-1 items-center mt-[-10px]">
        <Typography style={styles.contentHeading1} variant="h1">
          Shop your way to a
        </Typography>
        <Typography color={COLORS.default.primary} style={styles.contentHeading2} variant="h1">
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
  contentHeading1: { color: COLORS.default.secondary },
  contentHeading2: { color: COLORS.default.primary },
  contentBody: {
    color: COLORS.default.secondary,
    textAlign: 'center',
    paddingLeft: scale(50),
    paddingRight: scale(50),
    marginTop: scale(10),
    lineHeight: scale(20),
  },
});

export default BrandDetails;

import { Button, HorizontalLine, Typography } from '@heymax/ui';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Pagination } from './Pagination';
import RightArrowIcon from '@/assets/icons/right-arrow';
import type { BottomNavigationProps } from '@/utils/models/BottomNavigation';

const BottomNavigation = ({
  paginationIndex,
  onNext,
  label,
}: BottomNavigationProps): React.ReactNode => {
  return (
    <View className="flex flex-col gap-8">
      <HorizontalLine  color="gray"/>
      <View className={`flex flex-row justify-between px-10`}>
        <Pagination paginationIndex={paginationIndex} />
        <Button onPress={onNext}>
          <View className="flex-row items-center gap-2 justify-center">
            <Typography variant="h4" style={styles.buttonText}>
              {label}
            </Typography>
            <RightArrowIcon
              {...(!label && {
                height: scale(20),
                width: scale(20),
              })}
            />
          </View>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
  },
});

export default BottomNavigation;

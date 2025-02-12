import * as React from 'react';
import { View } from 'react-native';
import BrandDetails from '@/screens/BrandDetails';

const Index = () => {
  return (
    <View
      className={`flex-1 items-center justify-center items-center bg-background`}
    >
      <BrandDetails />
    </View>
  );
};


export default Index;

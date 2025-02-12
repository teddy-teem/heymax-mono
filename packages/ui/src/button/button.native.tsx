import React, { ReactNode } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
}

export const Button = function ({ children, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light.button,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
});
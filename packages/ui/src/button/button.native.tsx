import React, { JSX } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export interface ButtonProps {
  children: JSX.Element | string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = function ({ children, onPress }) {
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
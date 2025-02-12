'use client';
import React, { JSX } from 'react';
import { COLORS } from '../constants/colors';

export interface ButtonProps {
  children: JSX.Element | string;
  onPress: () => void;
}

export const Button = function ({ children, onPress }:ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: COLORS.light.button,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 30,
        border: 'none', 
        cursor: 'pointer'
      }}
      onClick={onPress}
    >
      {children}
    </button>
  );
};

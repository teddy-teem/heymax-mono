'use client';
import React, { JSX } from "react";
import { COLORS } from "../constants/colors";

export interface ButtonProps {
  children: JSX.Element | string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = function ({ children, onPress }) {
  return (
    <button
      style={{
        backgroundColor: COLORS.light.button,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 30,
      }}
      onClick={onPress}
    >
      {children}
    </button>
  );
};

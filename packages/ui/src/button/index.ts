'use client';

import { Platform } from "react-native";
import { Button as WebButton, ButtonProps as WebButtonProps } from "./button.web";
import { Button as NativeButton, ButtonProps as NativeButtonProps } from "./button.native";

export type ButtonProps = Platform["OS"] extends "web" ? WebButtonProps : NativeButtonProps;

export const Button = Platform.OS === "web" ? WebButton : NativeButton;
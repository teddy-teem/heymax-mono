"use client";

import { Platform } from "react-native";

import {
  NeonCircle as NativeNeonCircle,
  NeonCircleProps as NativeNeonCircleProps,
} from "./neon-circle.native";
import {
  NeonCircle as WebNeonCircle,
  NeonCircleProps as WebNeonCircleProps,
} from "./neon-circle.native";

export type NeonCircleProps = Platform["OS"] extends "web"
  ? WebNeonCircleProps
  : NativeNeonCircleProps;

export const NeonCircle =
  Platform.OS === "web" ? WebNeonCircle : NativeNeonCircle;

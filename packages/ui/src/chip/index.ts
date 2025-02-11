'use client';

import { Platform } from 'react-native';

import {
  Chip as NativeChip,
  ChipProps as NativeChipProps,
} from './chip.native';

import { Chip as WebChip, ChipProps as WebChipProps } from './chip.web';

export type ChipProps = Platform['OS'] extends 'web'
  ? WebChipProps
  : NativeChipProps;

export const Chip = Platform.OS === 'web' ? WebChip : NativeChip;

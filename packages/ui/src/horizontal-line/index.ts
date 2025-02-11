'use client';

import { Platform } from 'react-native';

import {
  HorizontalLine as NativeHorizontalLine,
  HorizontalLineProps as NativeHorizontalLineProps,
} from './horizontal-line.native';
import {
  HorizontalLine as WebHorizontalLine,
  HorizontalLineProps as WebHorizontalLineProps,
} from './horizontal-line.web';

export type HorizontalLineProps = Platform['OS'] extends 'web'
  ? WebHorizontalLineProps
  : NativeHorizontalLineProps;

export const HorizontalLine =
  Platform.OS === 'web' ? WebHorizontalLine : NativeHorizontalLine;

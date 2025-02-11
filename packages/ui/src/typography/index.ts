import { Platform } from 'react-native';
import { Typography as NativeTypography } from './typography.native';
import { Typography as WebTypography } from './typography.web';

export const Typography =
  Platform.OS === 'web' ? WebTypography : NativeTypography;
export type { TypographyProps } from './typography.type';

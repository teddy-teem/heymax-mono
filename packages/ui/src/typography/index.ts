import { Platform } from "react-native";
import { Typography as WebTypography } from "./typography.web";
import { Typography as NativeTypography } from "./typography.native";

export const Typography =
  Platform.OS === "web" ? WebTypography : NativeTypography;
export type { TypographyProps } from "./typography.type";

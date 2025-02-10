import { View, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("screen");
export interface HorizontalLineProps {
  width?: number;
  color?: string;
}

export const HorizontalLine = ({
  width = screenWidth,
  color = "#802EFF",
}: HorizontalLineProps) => {
  return <View style={[{ width, backgroundColor: color, height: 1 }]} />;
};

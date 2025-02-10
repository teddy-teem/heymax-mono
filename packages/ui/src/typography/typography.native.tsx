import { Text, StyleSheet } from "react-native";
import { TypographyProps } from "./typography.type";

export const Typography = ({
  variant = "body",
  children,
  style,
}: TypographyProps) => {
  return (
    <Text style={[styles[variant], style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: "Inter",
    fontSize: 40,
    fontWeight: "bold",
  },
  h2: {
    fontFamily: "Inter",
    fontSize: 32,
    fontWeight: "bold",
  },
  h3: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Inter",
  },
  body: {
    fontFamily: "Inter",
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
    fontFamily: "Inter",
    color: "#666",
  },
});
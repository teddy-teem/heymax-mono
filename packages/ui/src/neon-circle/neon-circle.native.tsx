import { View, Text, StyleSheet, Platform, ViewStyle } from "react-native";

export interface NeonCircleProps {
  value: number;
}
export const NeonCircle = function ({ value }: NeonCircleProps) {
  return (
    <View style={styles.circleGlow}>
      <View style={styles.circle}>
        <Text style={styles.number}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circleGlow: {
    width: 40,
    height: 40,
    borderRadius: 25,
    shadowColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },

  circle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#802EFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#802dFd",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,

  },
  number: {
    color: "white",
    fontSize: 20,
    fontWeight: '900'
  },
});





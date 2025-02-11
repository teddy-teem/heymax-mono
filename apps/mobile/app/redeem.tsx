import * as React from "react";
import { View, StyleSheet } from "react-native";
import RedeemPage from "@/screens/RedeemPage";
import { COLORS } from "@heymax/ui";

const Index= () => {
 
  return (
    <View style={styles.container}>
      <RedeemPage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.98,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: COLORS.default.background
  
  },
});

export default Index;

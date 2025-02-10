import { View, StyleSheet, Dimensions, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { NeonCircle, HorizontalLine, Typography } from "@repo/ui";
import { FlashList } from "@shopify/flash-list";
import { scale } from "react-native-size-matters";
import RedeemCard from "@/components/redeem-card";

const { width } = Dimensions.get("screen");

const redeems = [
  {
    id: 1,
    title: "Transfer miles",
    body: "25 Airline and Hotel Partners, No Fees, 1:1 Transfer Ratio",
    icon: require("../../assets/icons/transfer-miles.png"),
    instruction: "Best for Business & First Class",
  },
  {
    id: 2,
    title: "Fly and Claim",
    body: "Upload your flight ticket, and get reimbursed within 5 days.",
    icon: require("../../assets/icons/fly-claim.png"),
    instruction: "Best for Economy",
  },
  {
    id: 3,
    title: "Not flying soon",
    body: "You can always redeem Gift Cards with your Max Miles.",
    icon: require("../../assets/icons/no-flight-soon.png"),
    instruction: "Best for Starters",
  },
];

const RedeemPage = (): React.ReactNode => {

  return (
    <View style={[styles.container]}>
      <View style={styles.neonLine}>
        <HorizontalLine width={width - scale(60)} />
        <NeonCircle value={2} />
      </View>
      <Typography variant="h2" style={styles.title}>
        Redeem your trip
      </Typography>
      <FlashList
        data={redeems}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <RedeemCard
              icon={item.icon}
              title={item.title}
              body={item.body}
              instruction={item.instruction}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ padding: scale(30) }}
        ItemSeparatorComponent={() => <View style={{ height: scale(16) }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: scale(80),
  },
  neonLine: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content: {
    paddingHorizontal: scale(50),
  },
  title: {
    color: "white",
    paddingRight: scale(30),
    marginTop: scale(20),
    textAlign: "right",
  },
});

export default RedeemPage;

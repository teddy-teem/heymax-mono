import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { NeonCircle, HorizontalLine, Typography } from "@heymax/ui";
import { FlashList } from "@shopify/flash-list";
import { scale } from "react-native-size-matters";
import RedeemCard from "@/components/RedeemCard";
import { REDEEMS } from "@heymax/constants";

const { width } = Dimensions.get("screen");

const RedeemPage = (): React.ReactNode => {

  return (
    <View className="flex-1 mt-32">
      <View className="flex-row justify-start items-center mr-4">
        <HorizontalLine width={width - scale(50)} />
        <NeonCircle value={2} />
      </View>
      <Typography variant="h2" style={styles.title}>
        Redeem your trip
      </Typography>
      <FlashList
        data={REDEEMS}
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
        ItemSeparatorComponent={() => <View className="h-6" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    paddingRight: scale(30),
    marginTop: scale(20),
    textAlign: "right",
  },
});

export default RedeemPage;

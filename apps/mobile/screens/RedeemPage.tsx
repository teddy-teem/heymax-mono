import { REDEEMS } from "@heymax/constants";
import { NeonCircle, HorizontalLine, Typography } from "@heymax/ui";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { scale } from "react-native-size-matters";
import RedeemCard from "@/components/RedeemCard";

const { width } = Dimensions.get("screen");

const RedeemPage = (): React.ReactNode => {
  return (
    <ScrollView className="flex flex-col h-screen mt-28">
      <View className="flex-row justify-start items-center pr-10">
        <HorizontalLine width={width - scale(65)} />
        <NeonCircle value={2} />
      </View>
      <Typography variant="h2" style={styles.title}>
        Redeem your trip
      </Typography>
      <FlashList
        data={REDEEMS}
        renderItem={({ item }) => (
          <RedeemCard
            icon={item.icon}
            title={item.title}
            body={item.body}
            instruction={item.instruction}
          />
        )}
        contentContainerStyle={{ padding: scale(30) }}
        ItemSeparatorComponent={() => <View className="h-2" />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingRight: scale(30),
    marginTop: scale(20),
    textAlign: "right",
  },
});

export default RedeemPage;

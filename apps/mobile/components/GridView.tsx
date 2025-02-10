import { View, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { scale } from "react-native-size-matters";

const images = [
  { url: require("../assets/images/Shopee-h.png"), height: 104, width: 197 },
  { url: require("../assets/images/Lazada-h.png"), height: 126, width: 110 },
  { url: require("../assets/images/HnM-h.png"), height: 92, width: 92 },
  { url: require("../assets/images/fave-h.png"), height: 92, width: 92 },
  { url: require("../assets/images/merchant-h.png"), height: 65, width: 110 },
  { url: require("../assets/images/amazon.sg-h.png"), height: 104, width: 157 },
  {
    url: require("../assets/images/fair-price-h.png"),
    height: 104,
    width: 157,
  },
];

export default function GridView() {
  return (
    <View style={styles.container}>
      {images.map((i, index) => (
        <Image
          source={i.url}
          style={{
            flexGrow: 1,
            height: i.height,
            width: i.width,
            borderRadius: 15,
            ...((index === 2 || index === 3) && { marginTop: scale(-18) }),
            ...((index === 4) && { marginRight: scale(1) }),
          }}
          resizeMode="cover"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: scale(10),
    flexGrow: 1,
    marginLeft: scale(8),
    marginRight: scale(20),
  },
});

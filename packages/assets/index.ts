import { Platform } from "react-native";

const isWeb = Platform.OS === "web";

export const icons = {
  FlyClaimIcon: isWeb
    ? "/icons/fly-claim.png"
    : require("./icons/fly-claim.png"),
  NoFlightSoonIcon: isWeb
    ? "/icons/no-flight-soon.png"
    : require("./icons/no-flight-soon.png"),
  TransferMilesIcon: isWeb
    ? "/icons/transfer-miles.png"
    : require("./icons/transfer-miles.png"),
  RightArrowIcon: isWeb
    ? "/icons/transfer-miles.png"
    : require("./icons/transfer-miles.png"),
};

export const images = {
  AmazonSGImage: require("./images/amazon.sg.png"),
  FairPriceImage: require("./images/fair-price.png"),
  FaveImage: require("./images/fave.png"),
  HnMImage: require("./images/HnM.png"),
  LazadaImage: require("./images/Lazada.png"),
  MerchantImage: require("./images/merchant.png"),
  ShopeeImage: require("./images/Shopee.png"),
};

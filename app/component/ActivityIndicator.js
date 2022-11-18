import React from "react";
import LottieView from "lottie-react-native";
import Colors from "../config/Colors";
import { Text, View } from "react-native";

const ActivityIndicator = ({ visible, source }) => {
  if (!visible) return;
  return <LottieView source={source} autoPlay loop />;
};

export default ActivityIndicator;

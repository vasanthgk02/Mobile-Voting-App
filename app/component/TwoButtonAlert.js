import React from "react";
import { Alert } from "react-native";

const TwoButtonAlert = () => {
  return Alert.alert("Voting says", "Authenticated successfully", [
    {
      text: "OK",
    },
  ]);
};

export default TwoButtonAlert;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screen/HomeScreen";
import VoterDetailsScreen from "../screen/VoterDetailsScreen";
import VotingScreen from "../screen/VotingScreen";
import Colors from "../config/Colors";

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: Colors.primary } }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="VoterDetailsScreen"
        component={VoterDetailsScreen}
        options={{ title: "Voter Details" }}
      />
      <Stack.Screen
        name="VotingScreen"
        component={VotingScreen}
        options={{ title: "Party Details" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;

import { View, Text } from "react-native";
import React from "react";
import CustomerLogin from "./CustomerLogin";
import Wallet from "./Wallet";
import About from "./About";
import Terms from "./Terms";
import Language from "./Language";
import Update from "./Update";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProfileNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={CustomerLogin}
        options={{
          headerStyle: { backgroundColor: "#00488d" },
          headerTintColor: "#FFF",
        }}
      />
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerStyle: { backgroundColor: "#00488d" },
          headerTintColor: "#FFF",
        }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerStyle: { backgroundColor: "#00488d" },
          headerTintColor: "#FFF",
        }}
      />
      <Stack.Screen
        name="Terms"
        component={Terms}
        options={{
          headerStyle: { backgroundColor: "#00488d" },
          headerTintColor: "#FFF",
        }}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{
          headerStyle: { backgroundColor: "#00488d" },
          headerTintColor: "#FFF",
        }}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={Update}
        options={{
          headerStyle: { backgroundColor: "#00488d" },
          headerTintColor: "#FFF",
          headerTitle: "Update",
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;

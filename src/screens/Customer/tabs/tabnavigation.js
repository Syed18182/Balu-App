import { View, Text } from "react-native";
import React from "react";
import Ongoing from "../Footer/Components/Ongoing";
import Completed from "../Footer/Components/Completed";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const Tabnavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Ongoing">
      <Tab.Screen name="Ongoing" component={Ongoing} />
      <Tab.Screen name="Completed" component={Completed} />
    </Tab.Navigator>
  );
};

export default Tabnavigation;

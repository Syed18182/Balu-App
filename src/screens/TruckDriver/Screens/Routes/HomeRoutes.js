//import { View, Text } from "react-native";
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import AddLoad from "../Components/AddLoad";
import Home from '../Components/Home';
//import CurrentLoad from "../Components/CurrentLoad";
//import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const HomeRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />

      {/* <Stack.Screen name="CurrentLoad" component={CurrentLoad} /> */}
    </Stack.Navigator>
  );
};

export default HomeRoutes;

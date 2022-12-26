import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import Entypo from 'react-native-vector-icons/Entypo';
import HomeRoutes from './Screens/Routes/HomeRoutes';
import YourOrders from './Screens/Components/YourOrders';
import History from './Screens/Components/History';
import CurrentLoad from './Screens/Components/CurrentLoad';
//import AddLoad from './Screens/Components/AddLoad';
import CustomerUi from '../../components/CustomerUi';
//import SearchBar from '../tabs/Utils/SearchBar/SearchBar';
//import {StackActions} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <>
      <CustomerUi name="Puneet" />

      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'YourOrders') {
              iconName = 'cart';
            } else if (route.name === 'History') {
              iconName = 'history';
            } else if (route.name === 'CurrentLoad') {
              iconName = 'dump-truck';
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: '#00cce5',
          tabBarInactiveTintColor: '#434d59',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeRoutes} />
        <Tab.Screen name="CurrentLoad" component={CurrentLoad} />

        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="YourOrders" component={YourOrders} />
      </Tab.Navigator>
    </>
  );
};

export default Footer;

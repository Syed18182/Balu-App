import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Market from './Market';
import YourOrders from './YourOrders';
import Message from './Message';
import RequestList from './RequestList';
import CallUs from './CallUs';
import Entypo from 'react-native-vector-icons/Entypo';
//import {NavigationContainer} from '@react-navigation/native';
import CustomerUi from '../../../components/CustomerUi';

const Tab = createBottomTabNavigator();

//const market=require('./assets/Login/Footer/market.png')
const nigga = require('../assets/Customer/lenin.png');
const CusFooter = () => {
  return (
    <>
      <CustomerUi profile={nigga} name="puneet" />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Market') {
              iconName = 'shop';
            } else if (route.name === 'My Orders') {
              iconName = 'shopping-cart';
            } else if (route.name === 'Message') {
              iconName = 'message';
            } else if (route.name === 'RequestList') {
              iconName = 'list';
            } else if (route.name === 'CallUs') {
              iconName = 'phone';
            }

            // You can return any component that you like here!
            return <Entypo name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00cce5',
          tabBarInactiveTintColor: '#434d59',
          headerShown: false,
        })}>
        <Tab.Screen name="Market" component={Market} />
        <Tab.Screen name="My Orders" component={YourOrders} />
        <Tab.Screen name="Message" component={Message} />
        <Tab.Screen name="RequestList" component={RequestList} />
        <Tab.Screen name="CallUs" component={CallUs} />
      </Tab.Navigator>
    </>
  );
};

export default CusFooter;

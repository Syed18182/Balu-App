import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import CurrentLoad from './Screen/CurrentLoad';
import History from './Screen/History';
import YourOrders from './Screen/YourOrders';
import CustomerUi from '../../components/CustomerUi';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TruckOwnerRoutes = () => {
  return (
    <>
      <CustomerUi name="sumit sir" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          showIcon: true,
          tabBarActiveTintColor: '#00cce5',
          tabBarInactiveTintColor: '#434d59',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="home"
                size={24}
                color={focused ? '#00cce5' : '#434d59'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CurrentLoad"
          component={CurrentLoad}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="cart"
                size={24}
                color={focused ? '#00cce5' : '#434d59'}
              />
            ),
          }}
        />

        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="history"
                size={24}
                color={focused ? '#00cce5' : '#434d59'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="YourOrders"
          component={YourOrders}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons
                name="dump-truck"
                size={24}
                color={focused ? '#00cce5' : '#434d59'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TruckOwnerRoutes;

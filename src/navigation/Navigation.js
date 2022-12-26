import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginRoutes from './Login/LoginRoutes';
import UsersRoutes from './Users/UsersRoutes';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const isAuth = 'Login';
  return (
    <Stack.Navigator
      initialRouteName={isAuth}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginRoutes" component={LoginRoutes} />
      <Stack.Screen name="UsersRoutes" component={UsersRoutes} />
    </Stack.Navigator>
  );
};

export default Navigation;

import {View, Text} from 'react-native';
import React from 'react';
import SelectLang from '../../screens/Login/Screen/SelectLang';
import UserSelection from '../../screens/Login/Screen/UserSelection';
import Login from '../../screens/Login/Screen/Login';
import Otp from '../../screens/Login/Screen/Otp';
import Register from '../../screens/Login/Screen/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const LoginRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SelectLang" component={SelectLang} />
      <Stack.Screen name="UserSelection" component={UserSelection} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OTP" component={Otp} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default LoginRoutes;

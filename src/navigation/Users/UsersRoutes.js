import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CusFooter from '../../screens/Customer/Footer/CusFooter';
import LoadDetails from '../../screens/Customer/tabs/LoadDetails';
import ProfileNavigation from '../../screens/ProfileNavigator/ProfileNavigation';
import MessageScreen from '../../components/Messages/MessageScreen';

import Footer from '../../screens/TruckDriver/Footer';
import Tabnavigation from '../../screens/Customer/tabs/tabnavigation';
import CustomerDealCard from '../../screens/Customer/tabs/CustomerDealCard';
import AddLoad from '../../components/AddLoad/AddLoad';
import RequestLoad from '../../screens/Customer/tabs/RequestLoad';
import YourOrderDetails from '../../components/YourOrdersCard/YourOrderDetails';
import OtpPage from '../../components/AllMines/OtpPage';
import BookMine from '../../components/AllMines/BookMine';

import TruckOwnerRoutes from '../../screens/TruckOwner/Footer';
import AllLoad from '../../screens/TruckOwner/Screen/HomeRoutes/AllLoad';
import Trucks from '../../screens/TruckOwner/Screen/HomeRoutes/Trucks';
import TrucksForLoad from '../../screens/TruckOwner/Screen/HomeRoutes/TrucksForLoad';
import Driver from '../../screens/TruckOwner/Screen/HomeRoutes/Driver';
import ShopBalance from '../../screens/TruckOwner/Screen/HomeRoutes/ShopBalance';
import AddTruck from '../../screens/TruckOwner/Screen/HomeRoutes/AddTruck';
import AllMines from '../../screens/TruckOwner/Screen/HomeRoutes/Utils/AllMines/AllMines';

// import MineOwnerRoutes from '../../screens/MineOwner/Routes/MineOwnerRoutes';

// import PartnerHomeRoutes from '../../screens/BaluPartner/Routes/PartnerHomeRoutes';
// import BaluPartnerRoutes from '../../screens/BaluPartner/Routes/BaluPartnerRoutes';

const Stack = createNativeStackNavigator();
const UsersRoutes = ({route}) => {
  return (
    <>
      {route.params === 'Customer' ? (
        <Stack.Navigator
          initialRouteName="CusFooter"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="CusFooter" component={CusFooter} />
          <Stack.Screen
            name="Load Details"
            component={LoadDetails}
            options={{
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="ProfileNavigation"
            component={ProfileNavigation}
          />
          <Stack.Screen name="MessageScreen" component={MessageScreen} />
        </Stack.Navigator>
      ) : null}
      {route.params === 'Tdriver' ? (
        <Stack.Navigator
          initialRouteName="Footer"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Footer"
            component={Footer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TopTab"
            component={Tabnavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CustomerDealCard"
            component={CustomerDealCard}
            options={{headerShown: false}}
          />

          <Stack.Screen name="Request Load" component={RequestLoad} />
          <Stack.Screen
            name="ProfileNavigation"
            component={ProfileNavigation}
          />
          <Stack.Screen
            name="AddLoad"
            component={AddLoad}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
            }}
          />
          <Stack.Screen
            name="YourOrderDetails"
            component={YourOrderDetails}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
              headerTitle: 'Details',
            }}
          />
          <Stack.Screen
            name="BookMine"
            component={BookMine}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
              headerTitle: 'Book Mine',
            }}
          />
          <Stack.Screen
            name="OtpPage"
            component={OtpPage}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
              headerTitle: 'OTP',
            }}
          />
        </Stack.Navigator>
      ) : null}
      {route.params === 'Towner' ? (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="TruckOwnerRoutes">
          <Stack.Screen name="TruckOwnerRoutes" component={TruckOwnerRoutes} />
          <Stack.Screen
            name="ProfileNavigation"
            component={ProfileNavigation}
          />
          <Stack.Screen
            name="AddLoad"
            component={AddLoad}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
            }}
          />
          <Stack.Screen
            name="All Load"
            component={AllLoad}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
            }}
          />
          <Stack.Screen
            name="Trucks"
            component={Trucks}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
            }}
          />
          <Stack.Screen
            name="Trucks For Load"
            component={TrucksForLoad}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
            }}
          />
          <Stack.Screen
            name="Driver"
            component={Driver}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
            }}
          />
          <Stack.Screen
            name="Shop Balance"
            component={ShopBalance}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
            }}
          />
          <Stack.Screen
            name="AddTruck"
            component={AddTruck}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
              headerTitle: 'Add Truck',
            }}
          />
          <Stack.Screen
            name="YourOrderDetails"
            component={YourOrderDetails}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
              headerTitle: 'Details',
            }}
          />
          <Stack.Screen
            name="AllMines"
            component={AllMines}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
              headerTitle: 'All Mines',
            }}
          />
          <Stack.Screen
            name="BookMine"
            component={BookMine}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
              headerTitle: 'Book Mine',
            }}
          />
          <Stack.Screen
            name="OtpPage"
            component={OtpPage}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: '#00488d'},
              headerTintColor: '#FFF',
              headerTitle: 'OTP',
            }}
          />
        </Stack.Navigator>
      ) : null}
      {/*{route.params === 'Mowner' ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="MineOwnerRoutes"
            component={MineOwnerRoutes}
            options={{
              headerStyle: {backgroundColor: '#fff'},
              headerTintColor: '#00488d',
              headerShown: false,
              headerTitle: 'Mine Owner',
              headerLeft: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#00cc00"
                />
              ),
            }}
          />
          <Stack.Screen
            name="ProfileNavigation"
            component={ProfileNavigation}
          />
        </Stack.Navigator>
      ) : null}
      {/*{route.params === "Bpartner" ? (
        <Stack.Navigator
          initialRouteName="PartnerHomeRoutes"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="ProfileNavigation"
            component={ProfileNavigation}
          />
          <Stack.Screen
            name="PartnerHomeRoutes"
            component={PartnerHomeRoutes}
          />
          <Stack.Screen
            name="BaluPartnerRoutes"
            component={BaluPartnerRoutes}
          />
        </Stack.Navigator>
      ) : null} */}
    </>
  );
};

export default UsersRoutes;

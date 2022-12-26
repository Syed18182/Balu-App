import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import AllLoad from "./HomeRoutes/AllLoad";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Scomp from '../Utils/Scomp';

const photo = [
  require('../assets/Slider/dumper.png'),
  require('../assets/Slider/dumper1.png'),
  require('../assets/Slider/dumper2.png'),
  require('../assets/Slider/dumper3.png'),
];
const data = [
  {name: 'All Load', icon: 'truck'},
  {name: 'Trucks', icon: 'dump-truck'},
  {name: 'Trucks For Load', icon: 'truck-flatbed'},
];
const data1 = [
  {name: 'Driver', icon: 'person'},
  {name: 'Shop Balance', icon: 'shopping-bag-1'},
];

const Stack = createNativeStackNavigator();
const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView>
        <TouchableOpacity style={styles.Container}>
          <View style={styles.Container2}>
            <Ionicons name="md-wallet-sharp" color="#00488d" size={24} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>BALU Account</Text>
              <Text style={styles.text}>
                Balance <Text style={styles.text1}>400</Text>
              </Text>
            </View>
          </View>
          <View style={styles.icon}>
            <MaterialIcons name="arrow-forward-ios" size={20} color="#00488d" />
          </View>
        </TouchableOpacity>
        <Scomp object={data} object1={data1} />
        <View style={styles.Container3}>
          <View style={styles.subContainer3}>
            <Text style={styles.kindText}>
              Kindly register your Truck and add your load
            </Text>
            <TouchableOpacity
              style={styles.Btn}
              onPress={() => {
                navigation.navigate('AddLoad');
              }}>
              <Text style={styles.Addicon}>+</Text>
              <Text style={styles.Addtext}>Add Load</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ImageCon}>
            <Image source={require('../assets/truckOwner.png')} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Container2: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 20,
  },
  text: {
    color: '#434d59',
  },
  text1: {
    color: '#000',
  },
  Container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  subContainer3: {
    width: '48%',

    alignItems: 'center',
  },
  Btn: {
    flexDirection: 'row',
    backgroundColor: '#00488d',
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  kindText: {
    textAlign: 'center',
  },
  ImageCon: {
    // backgroundColor: "red",
    width: '48%',
    marginRight: 10,
  },
  Addicon: {
    color: '#00488d',
    backgroundColor: '#FFF',
    height: 22,
    width: 22,
    textAlign: 'center',
    borderRadius: 11,
    fontSize: 15,
    marginRight: 8,
  },
  Addtext: {
    color: '#fff',
    fontSize: 15,
  },
});

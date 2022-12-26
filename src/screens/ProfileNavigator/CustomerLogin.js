import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import DashboardTouch from './ReusableTest/DashboardTouch';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  bkimg: {
    position: 'absolute',
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: '#FFF',
    marginTop: 40,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Phonecolor: {
    color: '#fff',
  },
  icons: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  touchContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingTop: 20,
    marginTop: 25,
  },
  touch: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: '#434d59',
  },
});

const bkImg = require('./assets/profile/bkImg.png');
const user = require('./assets/profile/user.png');
const wallet = require('./assets/profile/wallet.png');
const about = require('./assets/profile/aboutus.png');
const terms = require('./assets/profile/terms.png');
const lang = require('./assets/profile/language.png');
const logout = require('./assets/profile/logout.png');
const arrow = require('./assets/profile/arrow.png');
const profile = require('./assets/profile/lenin.png');

const CustomerLogin = props => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        <Image source={bkImg} style={styles.bkimg} />
        <View
          style={{
            alignItems: 'center',
            //marginTop: "5%",
            //position: "relative",
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate('UpdateProfile', profile);
            }}>
            <View>
              <Image source={profile} style={styles.profileImage} />
            </View>
            <Text style={styles.name}>Balu Customer</Text>
            <Text style={styles.Phonecolor}>9598633162</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.touchContainer}>
          <DashboardTouch image={user} text="User ID" />

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Wallet');
            }}>
            <DashboardTouch image={wallet} arrow={arrow} text="Wallet" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('About');
            }}>
            <DashboardTouch image={about} arrow={arrow} text="About Us" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Terms');
            }}>
            <DashboardTouch image={terms} arrow={arrow} text="Terms of Use" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Language');
            }}>
            <DashboardTouch
              image={lang}
              arrow={arrow}
              text="Choose Your Language"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Alert.alert('Logging out');
            }}>
            <DashboardTouch image={logout} arrow={arrow} text="Logout" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomerLogin;

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  Container: {
    //backgroundColor:"red",
    width: Dimensions.get('window').width,
    // height:Dimensions.get("window").height,
    // padding:20
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'capitalize',
    marginLeft: 15,
  },
  headerLogo: {
    height: 30,
    width: 30,
    marginHorizontal: 5,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
});

const avatar = {
  uri: 'https://imgs.search.brave.com/KXjGqq3OqGj75WlZQYnr8ZBRh1D5eLHlJKB_OE2_KnM/rs:fit:570:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/OGp3WG1aYjBQTjRu/OHI0cGpaTDlnSGFH/SyZwaWQ9QXBp',
};
const helpline = require('./assets/CustomerUI/helpline.png');
const ques = require('./assets/CustomerUI/question.png');
const share = require('./assets/CustomerUI/share.png');
const CustomerUi = props => {
  const navigation = useNavigation();
  {
    console.log(props.user);
  }
  return (
    <View style={styles.Container}>
      <View
        style={{
          padding: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#00488d',
          width: Dimensions.get('window').width,
        }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileNavigation', props.user);
            }}>
            <Image style={styles.profile} source={props.profile} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{props.name}</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image source={helpline} style={styles.headerLogo} />
          <Ionicons name="ios-help-circle-outline" size={37} color="#fff" />
          <Image source={share} style={styles.headerLogo} />
        </View>
      </View>
      {/* <ScrollView></ScrollView>
      <View style={{ position: "absolute", backgroundColor: "#FFF" }}></View> */}
    </View>
  );
};

export default CustomerUi;

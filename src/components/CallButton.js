import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import Colors from '../helper/config/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CallButton = props => {
  const handlePress = () => {
    console.log('Pressed');
  };
  return (
    <View>
      {props.name === 'chat' ? (
        <View style={styles.Btn} onPress={handlePress}>
          <Entypo name="chat" size={21} color="white" />
          <Text style={styles.textBtn}>Chat Now</Text>
        </View>
      ) : null}
      {props.name === 'call' ? (
        <View style={styles.Btn}>
          <FontAwesome name="phone" size={24} color="white" />
          <Text style={styles.textBtn}>Call Now</Text>
        </View>
      ) : null}
      {props.name === 'book' ? (
        <View style={styles.Btn}>
          <Entypo name="list" size={24} color="white" />
          <Text style={styles.textBtn}>Book Now</Text>
        </View>
      ) : null}
      {props.name === 'route' ? (
        <View style={styles.Btn}>
          <FontAwesome5 name="route" size={18} color="white" />
          <Text style={styles.textBtn}>Route Map</Text>
        </View>
      ) : null}
      {props.name === 'makeDeal' ? (
        <View style={styles.Btn}>
          <FontAwesome5 name="hands-helping" size={18} color="white" />
          <Text style={styles.textBtn}>Make Deal</Text>
        </View>
      ) : null}
      {props.name === 'doneDeal' ? (
        <View style={styles.Btn}>
          <FontAwesome5 name="hands-helping" size={18} color="white" />
          <Text style={styles.textBtn}>Confirm Deal</Text>
        </View>
      ) : null}
    </View>
  );
};

export default CallButton;

const styles = StyleSheet.create({
  Btn: {
    backgroundColor: '#00488d',
    borderRadius: 8,
    paddingVertical: 5,
    flexDirection: 'row',
    paddingHorizontal: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: '#fff',
    textTransform: 'capitalize',
    margin: 5,
  },
});

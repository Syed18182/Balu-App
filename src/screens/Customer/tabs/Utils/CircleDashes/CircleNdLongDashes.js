import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Dash from './Dash';

const CircleNdLongDashes = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 205,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          width: 25,
          justifyContent: 'center',
          alignItems: 'center',
          //margin: 15,
        }}>
        <Feather name="circle" size={24} color="green" />
        <Dash bottom={5} />
        <Dash bottom={5} />
        <Dash bottom={5} />
        <Dash bottom={5} />
        <Dash bottom={6} />
        <Dash bottom={6} />
        <Dash bottom={6} />
        <Dash />
        <Feather name="circle" size={24} color="red" />
      </View>
      <View
        style={{
          //background,
          height: '100%',
          marginHorizontal: 7,
          justifyContent: 'space-between',
        }}>
        <View style={styles.loadTime}>
          <View>
            <Text style={styles.text}>Loading Point</Text>
            <Text style={styles.textMain}>{props.start}</Text>
            <Text style={styles.text}>Address will be shared on call</Text>
          </View>
          <Text style={{color: 'green', fontSize: 15, fontWeight: '600'}}>
            Today 10:00
          </Text>
        </View>
        <View style={styles.loadTime}>
          <View>
            <Text style={styles.text}>Unloading Point</Text>
            <Text style={styles.textMain}>{props.end}</Text>
            <Text style={styles.text}>Address will be shared on call</Text>
          </View>
          <Text style={{color: 'red', fontSize: 15, fontWeight: '600'}}>
            Tomorrow 10:00
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CircleNdLongDashes;

const styles = StyleSheet.create({
  textMain: {
    //marginHorizontal: 7,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#434d59',
    textTransform: 'capitalize',
  },
  text: {
    color: '#434d59',
  },
  loadTime: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
});

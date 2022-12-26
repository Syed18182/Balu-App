import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CircleDashes from '../../tabs/Utils/CircleDashes/CircleDashes';
import CallButton from '../../../../components/CallButton';
//import Colors from '../../utils/config/Colors';
import {useNavigation} from '@react-navigation/native';

const mine = require('../../assets/Customer/mine.png');

const MyOrderComponent = props => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.Container}>
        <View style={styles.Order}>
          {props.date ? (
            <>
              <View style={styles.timedateContainer}>
                <Text style={styles.timedateText}>
                  <Text style={styles.textHigh}>On Date-: </Text>
                  {props.date}
                </Text>
                <Text style={styles.timedateText}>
                  <Text style={styles.textHigh}>At Time-: </Text>
                  {props.time}
                </Text>
              </View>
              <View style={styles.Line} />
            </>
          ) : null}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.ImageNdRate}>
              <Image source={props.photo} style={styles.Image} />
              <Text style={styles.Name}>{props.name}</Text>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <AntDesign name="star" size={15} color="yellow" />
                <AntDesign name="star" size={15} color="yellow" />
                <AntDesign name="star" size={15} color="yellow" />
                <AntDesign name="star" size={15} color="yellow" />
                <AntDesign name="star" size={15} color="yellow" />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="dump-truck"
                size={30}
                color="#00488d"
              />
              <Text style={styles.truckNo}>{props.truckno}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={mine} style={styles.MineCart} />
              <Text style={styles.productText}>{props.product}</Text>
            </View>
          </View>
          <CircleDashes start={props.start} end={props.end} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {props.confirmation ? (
              <TouchableOpacity>
                <Text style={{color: '#00488d', textTransform: 'capitalize'}}>
                  {null}
                </Text>
              </TouchableOpacity>
            ) : (
              <>
                <View>
                  <CallButton />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('MessageScreen');
                  }}>
                  <CallButton name="chat" />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    paddingVertical: 10,
  },
  Text: {
    color: '#434d59',
  },
  Order: {
    backgroundColor: 'white',
    padding: 10,
    //width:Dimensions.get("window").width,
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  ImageNdRate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Name: {
    color: '#434d59',
    textTransform: 'capitalize',
    fontSize: 16,
  },
  truckNo: {
    textTransform: 'uppercase',
    color: '#434d59',
  },
  productText: {
    textTransform: 'capitalize',
    color: '#434d59',
  },
  Btn1: {
    backgroundColor: '#00488d',
    padding: 8,
    borderRadius: 10,
  },
  Btn1Text: {
    color: '#FFF',
  },
  MineCart: {
    height: 25,
    width: 30,
  },
  timedateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  Line: {
    borderBottomWidth: 1,
    borderColor: '#434d59',
    marginBottom: 5,
  },
  timedateText: {
    color: '#434d59',
  },
  textHigh: {
    fontWeight: '700',
  },
});

export default MyOrderComponent;

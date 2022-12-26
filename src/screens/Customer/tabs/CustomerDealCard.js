import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

import {useNavigation} from '@react-navigation/native';

import CircleDashes from './Utils/CircleDashes/CircleDashes';
import CallButton from '../../../components/CallButton';

const truck = require('../assets/Customer/truck.png');
const driver = require('../assets/Customer/bajjan.png');

const maxrating = 4;
const CustomerDealCard = props => {
  const navigation = useNavigation();
  const Cnum = props.Cphone;
  const Dnum = props.dnum;
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Load Details', props);
          console.log(props);
        }}>
        <CircleDashes start={props.start} end={props.end} />
        {props.ton ? (
          <View style={styles.TruckInfoContainer}>
            <Text style={styles.TextColor}>Truck Type</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <View>
                <Image source={truck} style={styles.TruckIcon} />
                <Text style={styles.TextColoBold}>
                  <Text style={{fontWeight: '400'}}>Open Half</Text>
                </Text>
              </View>
              <View>
                <FontAwesome5 name="weight" size={20} color="black" />
                <Text style={styles.TextColoBold}>
                  18 <Text style={{fontWeight: '400'}}>TON</Text>
                </Text>
              </View>
              <View>
                <Entypo name="flickr-with-circle" size={20} color="black" />
                <Text style={styles.TextColoBold}>
                  10 <Text style={{fontWeight: '400'}}>Tyres</Text>
                </Text>
              </View>
            </View>
          </View>
        ) : null}
        <View style={styles.ProductContainer}>
          <View>
            <Text style={styles.TextColor}>Product</Text>
            <Text style={styles.TextColoBold}>{props.product}</Text>
          </View>
          <View>
            <Text style={styles.TextColor}>Payment Terms</Text>
            <Text style={styles.TextColoBold}>To Pay</Text>
          </View>
        </View>
      </TouchableOpacity>
      <>
        <Text style={styles.Infoheader}>Driver</Text>
        <View style={styles.sellerInfo}>
          <View style={styles.ratingNimage}>
            <Image source={driver} style={styles.img} />
            <View style={styles.rating}>
              <Text style={styles.ratingText}>4.5</Text>

              <MaterialCommunityIcons name="star" color="yellow" size={18} />
            </View>
          </View>
          {/*owner below is a props which is name of truck owner and is displayed at user end */}
          {props.owner ? (
            <View>
              <Text style={styles.company}>{props.owner}</Text>
              <Text style={styles.driver}>{props.driver}</Text>
            </View>
          ) : (
            <View>
              <Text style={styles.company}>{props.driver}</Text>
              <Text style={styles.Tnum}>{props.tNum}</Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.callBtn}
            onPress={() => {
              let Phonenumber = 'tel:${' + Dnum + '}';
              Linking.openURL(Phonenumber);
            }}>
            <CallButton name="call" />
          </TouchableOpacity>
        </View>
      </>
      {props.customer ? (
        <>
          <Text style={styles.Infoheader}>Customer</Text>
          <View style={styles.sellerInfo}>
            <View style={styles.ratingNimage}>
              <Image source={driver} style={styles.img} />
            </View>

            <View>
              <Text style={styles.company}>{props.customer}</Text>
            </View>

            <TouchableOpacity
              style={styles.callBtn}
              onPress={() => {
                let Phonenumber = 'tel:${' + Dnum + '}';
                Linking.openURL(Phonenumber);
              }}>
              <Text style={styles.callText}>Call</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default CustomerDealCard;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width,
    height: 'auto',
    padding: 20,
    marginBottom: 15,
  },
  TruckIcon: {
    height: 20,
    width: 30,
  },
  TruckInfoContainer: {
    marginTop: 10,
    //paddingHorizontal:20
  },
  TruckInfo: {
    flexDirection: 'row',
  },
  ProductContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  TextColor: {
    color: '#434d59',
    fontSize: 15,
  },
  TextColoBold: {
    fontWeight: 'bold',
    color: '#434d59',
  },
  Infoheader: {
    color: '#434d59',
    fontWeight: '800',
    marginTop: 10,
  },
  sellerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#d9d9d9',
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  company: {
    color: '#00488d',
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'capitalize',
  },
  Tnum: {color: '#434d59', textTransform: 'uppercase'},
  driver: {
    color: '#434d59',
  },
  callBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  callText: {
    color: '#FFF',
  },

  ratingNimage: {
    position: 'relative',

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rating: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '130%',
  },
});

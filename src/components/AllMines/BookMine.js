import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
//import CallButton from "../../utils/CallButton";
import Colors from '../../helper/config/Colors';
import CalenderComp from '../../components/AddLoad/Utils/CalenderComp';
import AddButton from '../AddButton';
import TimeComp from './TimeComp';

const BookMine = ({navigation}) => {
  const Pulldata = data => {
    console.log(data);
  };
  return (
    <>
      <ScrollView style={styles.Container}>
        <View style={styles.nameContainer}>
          <Text style={styles.mName}>aquib mine</Text>
        </View>
        <View style={styles.addressRateContainer}>
          <Text style={styles.textAddress}>
            4-c,vikalp khand,gomti nagar ,lucknow,uttar pradesh 226010,india
          </Text>
          <Text style={styles.rateText}>₹2000/quintal</Text>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.text}>Mineral</Text>
            <Text style={styles.textDetails}>gitti</Text>
          </View>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.text}>Truck Number</Text>
            <Text style={styles.textDetails}>up14er0147</Text>
          </View>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.text}>Truck Driver</Text>
            <Text style={styles.textDetails}>hayedaiyya</Text>
          </View>
        </View>
        <View style={styles.calContainer}>
          <CalenderComp func={Pulldata} />
        </View>
        <View>
          <TimeComp />
        </View>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.Btn}
        onPress={() => {
          navigation.navigate('OtpPage');
        }}>
        <AddButton text="Book Mine" />
      </TouchableOpacity>
    </>
  );
};

export default BookMine;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mName: {
    color: '#434d59',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '700',
    borderBottomWidth: 2,
  },
  nameContainer: {alignItems: 'center'},
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginHorizontal: 10,
    //backgroundColor: "red",
  },
  text: {color: Colors.text},
  textDetails: {
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: '700',
    color: Colors.text,
  },
  textAddress: {
    color: Colors.text,
    width: '65%',
    textTransform: 'capitalize',
  },
  rateText: {
    color: Colors.white,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    textTransform: 'uppercase',
  },
  detailsSubContainer: {
    //width: "30%",
    alignItems: 'center',
  },
  addressRateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
    borderBottomColor: Colors.third,
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  calContainer: {
    borderTopColor: Colors.third,
    borderTopWidth: 2,
    borderBottomColor: Colors.third,
    borderBottomWidth: 2,
    marginTop: 5,
  },
  Btn: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});

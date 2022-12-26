import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Colors from '../../../../../helper/config/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';

const DriverCard = props => {
  return (
    <View style={styles.Container}>
      <View style={styles.Container1}>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.Image}
            source={{
              uri: 'https://media.istockphoto.com/photos/truck-driver-stock-image-picture-id1098283608?k=6&m=1098283608&s=612x612&w=0&h=_sZATKUZeREgd2T7rw_zAjuCAk9JXMFoZW7cRgVyZkk=',
            }}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.textName}>Bhola Prasad</Text>
            <Text style={styles.text}>Allahabad</Text>
          </View>
        </View>
        {props.bal ? (
          <View>
            <Text style={styles.textName}>₹{props.bal}</Text>
            <Text style={styles.text}>to be paid</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.textName}>₹{props.paid}</Text>
            <Text style={styles.text}>paid</Text>
          </View>
        )}
      </View>
      {props.bal ? (
        <View style={styles.Container2}>
          <View style={styles.paymentContainer}>{null}</View>
          <View style={styles.paymentContainer}>
            <Fontisto name="date" size={18} color={Colors.primary} />

            <Text style={styles.textTime}>11/10/2022</Text>
            <Text style={styles.textTime}>18:32:12</Text>
          </View>
        </View>
      ) : (
        <View style={styles.Container2}>
          <View style={styles.paymentContainer}>
            <FontAwesome5 name="money-check" size={18} color={Colors.primary} />
            <Text style={styles.textTime}>NetBanking</Text>
          </View>
          <View style={styles.paymentContainer}>
            <Fontisto name="date" size={18} color={Colors.primary} />

            <Text style={styles.textTime}>11/10/2022</Text>
            <Text style={styles.textTime}>18:32:12</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default DriverCard;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  Container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  ImageContainer: {
    flexDirection: 'row',
  },
  Image: {
    height: (Dimensions.get('window').width * 1.5) / 10,
    width: (Dimensions.get('window').width * 1.5) / 10,
    borderRadius: (Dimensions.get('window').width * 1.5) / 10,
  },
  nameContainer: {
    marginLeft: 10,
  },
  textName: {
    color: Colors.text,
    fontSize: 15,
    fontWeight: '700',
  },
  text: {
    color: Colors.text,
    textTransform: 'capitalize',
  },
  textTime: {
    color: Colors.text,
    textTransform: 'capitalize',
    marginLeft: 5,
  },
  paymentContainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },
});

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Dnum = 9889632541;
const DriverId = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Container1}>
        <View style={styles.nameContainer}>
          <Image
            source={{
              uri: 'https://media.istockphoto.com/photos/truck-driver-stock-image-picture-id1098283608?k=6&m=1098283608&s=612x612&w=0&h=_sZATKUZeREgd2T7rw_zAjuCAk9JXMFoZW7cRgVyZkk=',
            }}
            style={styles.Image}
          />
          <View style={styles.nameContainer1}>
            <Text style={styles.text}>Driver Name</Text>
            <Text style={styles.Text}>Pradeep Bose</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            let Phonenumber = 'tel:${' + Dnum + '}';
            Linking.openURL(Phonenumber);
          }}>
          <FontAwesome name="phone" size={30} color="#00488d" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DriverId;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  Container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  text: {
    color: '#434d59',
    textTransform: 'capitalize',
    fontSize: 15,
  },
  Text: {
    color: '#434d59',
    textTransform: 'capitalize',
    fontWeight: '700',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameContainer1: {
    marginLeft: 10,
  },
});

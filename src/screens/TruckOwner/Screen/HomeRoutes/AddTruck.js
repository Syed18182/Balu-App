import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../../../../helper/config/Colors';
import Dropdown from '../../../../components/DropDown/Dropdown';

let trucknum = null;
let company = null;
const tyre = [
  '6 TYRES',
  '8 TYRES',
  '10 TYRES',
  '14 TYRES',
  '18 TYRES',
  '24 TYRES',
];
const load = ['6 TON and Below', '9 TON', '12 TON'];
const AddTruck = () => {
  return (
    <>
      <View style={styles.Container}>
        <TouchableOpacity style={styles.ImageContainer}>
          <Image
            style={styles.Image}
            source={{
              uri: 'https://media.istockphoto.com/photos/truck-driver-stock-image-picture-id1098283608?k=6&m=1098283608&s=612x612&w=0&h=_sZATKUZeREgd2T7rw_zAjuCAk9JXMFoZW7cRgVyZkk=',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Fill Details</Text>
        <View style={styles.TextInputContainer}>
          <TextInput style={styles.textInput} placeholder="Driver Name" />
          <TextInput style={styles.textInput} placeholder="Driver Phone " />
        </View>
        <View style={styles.headDropContainer}>
          <View style={styles.dropContainer}>
            <Text style={styles.text}>Tyres</Text>
            <Dropdown data={tyre} />
          </View>
          <View style={styles.dropContainer}>
            <Text style={styles.text}>Load</Text>
            <Dropdown data={tyre} />
          </View>
        </View>
        <View>
          <View style={styles.truckContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Truck Number</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Truck Company</Text>
            </View>
          </View>
          <View style={styles.truckContainer}>
            <TextInput
              autoCapitalize={'characters'}
              maxLength={10}
              style={styles.textInput}
              placeholder="UP32RF9856"
              onChangeText={e => {
                trucknum = e;
              }}
            />
            <TextInput
              style={styles.textInput}
              placeholder="EICHER"
              autoCapitalize={'characters'}
              maxLength={15}
              onChangeText={e => {
                company = e;
              }}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          console.log(company);
          console.log(trucknum);
        }}>
        <Text style={styles.addBtnText}>Add Load</Text>
      </TouchableOpacity>
    </>
  );
};

export default AddTruck;

const styles = StyleSheet.create({
  Container: {paddingTop: 10, paddingHorizontal: 5},
  ImageContainer: {alignItems: 'center'},
  TextInputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '45%',
    borderColor: Colors.white,
    borderRadius: 10,
    marginTop: 10,
  },
  Image: {
    height: (Dimensions.get('window').width * 2.5) / 10,
    width: (Dimensions.get('window').width * 2.5) / 10,
    borderRadius: (Dimensions.get('window').width * 1.2) / 10,
  },
  text: {
    color: Colors.text,
    fontSize: 15,
  },
  headDropContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dropContainer: {
    width: '45%',
  },
  truckContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    width: '45%',
  },
  addBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  addBtn: {
    backgroundColor: '#00488c',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});

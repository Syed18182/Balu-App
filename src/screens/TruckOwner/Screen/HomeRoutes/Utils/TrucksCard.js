import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../../../helper/config/Colors';
import CallButton from '../../../../../components/CallButton';
import {useNavigation} from '@react-navigation/native';

const TrucksCard = props => {
  const navigation = useNavigation();
  return (
    <View>
      {props.data.map((value, i) => {
        return (
          <TouchableOpacity
            style={styles.Container}
            onPress={() => {
              props.func(i);
              navigation.navigate('AllMines');
            }}>
            <View style={styles.Container1}>
              <Image
                style={styles.Image}
                source={{
                  uri: 'https://media.istockphoto.com/photos/truck-driver-stock-image-picture-id1098283608?k=6&m=1098283608&s=612x612&w=0&h=_sZATKUZeREgd2T7rw_zAjuCAk9JXMFoZW7cRgVyZkk=',
                }}
              />
              <View style={styles.dataContainer}>
                <View style={styles.dataContainer}>
                  <View style={styles.truckTextContainer}>
                    <Text style={styles.truckText}>{value.tName}</Text>
                    <Text style={styles.truckNum}>{value.tNum}</Text>
                  </View>
                  <View style={styles.driverContainer}>
                    <Text style={styles.truckText}>Driver</Text>
                    <Text style={styles.truckNum}>{value.dName}</Text>
                  </View>
                </View>
              </View>
              <View>
                <Text></Text>
              </View>

              {/* <View style={styles.Btns}>
             <TouchableOpacity style={styles.BtnEdi}>
            <View style={styles.btnrow}>
              <MaterialIcons name="edit" size={20} color="#fff" />
              <Text style={styles.BtnText}>Edit</Text>
            </View>
             </TouchableOpacity>
              <TouchableOpacity style={styles.BtnDel}>
            <View style={styles.btnrow}>
              <MaterialCommunityIcons
                name="delete-forever-outline"
                size={22}
                color="white"
              />
              <Text style={styles.BtnText}>Delete</Text>
            </View>
              </TouchableOpacity>
            </View> */}
            </View>
            <Text style={styles.text}>Truck Type</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="truck" size={20} color="black" />
                <Text style={styles.detailsText}>
                  <Text>Open Half</Text>
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="weight" size={20} color="black" />
                <Text style={styles.detailsText}>
                  18 <Text>TON</Text>
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <Entypo name="flickr-with-circle" size={20} color="black" />
                <Text style={styles.detailsText}>
                  10 <Text>Tyres</Text>
                </Text>
              </View>
            </View>
            <View style={styles.callBtnContainer}>
              <View>
                <CallButton />
              </View>
              <View style={styles.status}>
                {props.forLoad ? (
                  <Text style={styles.truckNum}>rest</Text>
                ) : (
                  <View>
                    {true ? (
                      <Text style={styles.truckNum}>{value.tStatus}</Text>
                    ) : (
                      <Text style={styles.truckNum}>rest</Text>
                    )}
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TrucksCard;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  Container1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  truckText: {
    color: Colors.text,

    textTransform: 'uppercase',
  },
  Image: {
    height: (Dimensions.get('window').width * 1.25) / 10,
    width: (Dimensions.get('window').width * 1.25) / 10,
    borderRadius: (Dimensions.get('window').width * 1.5) / 10,
  },
  truckTextContainer: {
    marginLeft: 10,
  },
  truckNum: {
    color: Colors.text,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  driverContainer: {
    marginLeft: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
  },
  detailsText: {
    color: Colors.text,
    fontWeight: '700',
  },
  text: {
    color: Colors.text,
  },
  heading: {
    color: Colors.text,
    fontWeight: '700',
  },
  BtnDel: {
    padding: 2.5,
    backgroundColor: 'red',
    borderRadius: 8,
    width: (Dimensions.get('window').width * 1.8) / 10,
    marginTop: 10,
  },
  BtnText: {
    color: '#fff',
  },
  BtnEdi: {
    padding: 2.5,
    backgroundColor: '#00cce5',
    borderRadius: 8,
    width: (Dimensions.get('window').width * 1.8) / 10,
    paddingLeft: 12,
  },
  btnrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callBtnContainer: {
    justifyContent: 'space-between',

    flexDirection: 'row',
  },
  status: {
    justifyContent: 'center',
  },
  dataContainer: {
    flexDirection: 'row',
  },
});

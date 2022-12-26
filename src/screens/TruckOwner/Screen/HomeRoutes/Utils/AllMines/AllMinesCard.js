import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
//import GButton from "../../../../../utils/GButton";
import CallButton from '../../../../../../components/CallButton';
import Colors from '../../../../../../helper/config/Colors';
import {useNavigation} from '@react-navigation/native';

const photo = require('../../../../assets/sand.png');

const TruckDriverCard = props => {
  const navigation = useNavigation();
  return (
    <View>
      {props.data.map(value => {
        return (
          <View style={styles.Container}>
            <View style={styles.Upper}>
              <Image source={photo} style={styles.Img} />

              <Text style={styles.textCustomer}>{value.mName}</Text>
            </View>
            <View style={styles.mAddress}>
              <Text style={styles.text}>{value.mAddress}</Text>
            </View>
            <View style={styles.Container2}>
              <View style={styles.truckProduct}>
                <MaterialCommunityIcons
                  name="dump-truck"
                  size={30}
                  color="#00488d"
                />
                <Text style={styles.text}>{value.product}</Text>
              </View>
              <View style={styles.BtnLoc}>
                <View style={styles.star}>
                  <Text style={styles.textStar}>{value.rating}</Text>
                  <Entypo name="star" size={22} color="yellow" />
                </View>

                <View style={styles.approxContainer}>
                  <MaterialCommunityIcons
                    name="target"
                    size={24}
                    color="#434d59"
                  />
                  <Text style={styles.text}>({value.approx} KM Approx)</Text>
                </View>
              </View>
            </View>
            <Text style={styles.text}>₹{value.rate}/quintal</Text>
            <View style={styles.Line} />
            <View style={styles.BtnContainer}>
              <TouchableOpacity style={styles.Btn}>
                <CallButton name="route" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.Btn}>
                <CallButton name="call" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Btn}
                onPress={() => {
                  navigation.navigate('BookMine');
                }}>
                <CallButton name="book" />
              </TouchableOpacity>
            </View>
            <View style={styles.Line} />
          </View>
        );
      })}
    </View>
  );
};

export default TruckDriverCard;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFF',
    //width: Dimensions.get("window").width,
    //height: 250,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 10,
  },
  Container2: {flexDirection: 'row', justifyContent: 'space-between'},
  Upper: {
    //backgroundColor: "red",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  Img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  truckProduct: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCustomer: {
    color: '#434d59',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  UpperRight: {
    //backgroundColor: "red",
    //width: "62.5%",

    flex: 1,
  },

  text: {
    color: '#434d59',
    textTransform: 'capitalize',
  },
  mAddress: {
    width: Dimensions.get('window').width * 0.5,
  },
  textTruckno: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '900%',
  },
  star: {
    flexDirection: 'row',
    alignItems: 'center',

    //justifyContent: "space-between",
  },
  BtnLoc: {
    flexDirection: 'row',
    //backgroundColor: "green",
    //height: 100,
    justifyContent: 'space-between',
  },
  BtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Btn: {
    width: Dimensions.get('window').width * 0.27,
  },
  textBtn: {
    color: '#fff',
    textTransform: 'capitalize',
  },
  textStar: {
    fontSize: 15,
    color: '#434d59',
  },
  location: {
    //flexDirection: "row",
    backgroundColor: 'red',
  },
  approxContainer: {flexDirection: 'row', alignItems: 'center'},
  Line: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.third,
    marginVertical: 5,
  },
});

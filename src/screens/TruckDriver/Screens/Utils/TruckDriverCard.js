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
import GButton from '../../../../components/GButton';

const photo = require('../../assets/sand.png');

const TruckDriverCard = props => {
  return (
    <View style={styles.Container}>
      <View style={styles.Upper}>
        <View>
          <Image source={photo} style={styles.Img} />
          <View style={styles.truckProduct}>
            <MaterialCommunityIcons
              name="dump-truck"
              size={30}
              color="#00488d"
            />
            <Text style={styles.text}>{props.product}</Text>
          </View>
        </View>
        <View style={styles.UpperRight}>
          <View style={styles.custContainer}>
            <Text style={styles.textCustomer}>{props.customer}</Text>
            {props.address ? (
              <Text style={styles.text}>{props.address}</Text>
            ) : (
              <>
                <Text style={styles.text}>
                  {props.mobno}
                  {'\n'}
                  <Text>{props.owner}</Text>
                </Text>
              </>
            )}
          </View>
          <View style={styles.BtnLoc}>
            <View style={styles.star}>
              <Text style={styles.textStar}>{props.rating}</Text>
              <Entypo name="star" size={22} color="yellow" />
            </View>
            {props.rate ? (
              <View style={styles.location}>
                <TouchableOpacity style={styles.Btn} disabled={true}>
                  <Text style={styles.textBtn}>{props.rate}/squareft</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="target"
                    size={24}
                    color="#434d59"
                  />
                  <Text style={styles.text}>({props.approx} KM Approx)</Text>
                </View>
              </View>
            ) : (
              <View style={styles.location}>
                <TouchableOpacity style={styles.Btn} disabled={true}>
                  <Text style={styles.textTruckno}>{props.truckno}</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="target"
                    size={24}
                    color="#FFF"
                  />
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={styles.Lower}>
        <GButton name="Book Now" />
        {props.truckno ? null : <GButton name="Route Map" />}
        <GButton name="Call Now" />
      </View>
    </View>
  );
};

export default TruckDriverCard;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFF',
    //width: Dimensions.get("window").width,
    height: 250,
    padding: 10,
    marginBottom: 15,
  },
  Upper: {
    //backgroundColor: "red",
    flexDirection: 'row',
    height: '80%',
  },
  Lower: {
    //backgroundColor: "green",
    height: '20%',
    //backgroundColor: "green",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Img: {
    height: 130,
    width: 130,
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
    width: '62.5%',
    marginLeft: 10,
    height: '60%',
  },
  custContainer: {
    //backgroundColor: "blue",
    height: '60%',
  },
  text: {
    color: '#434d59',
    textTransform: 'capitalize',
  },
  textTruckno: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '900%',
  },
  star: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',

    //justifyContent: "space-between",
  },
  BtnLoc: {
    flexDirection: 'row',

    height: 100,
  },
  Btn: {
    backgroundColor: '#00488d',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
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
    alignItems: 'center',
    width: '80%',

    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
});

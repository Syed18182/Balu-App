import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';
import React from 'react';
import CircleNdLongDashes from './Utils/CircleDashes/CircleNdLongDashes';
import Line from './Utils/CircleDashes/line';
//import styles from "../RegisterStyle";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const LoadDetails = ({navigation, route}) => {
  return (
    <ScrollView>
      <View style={{backgroundColor: '#FFF', paddingTop: 20}}>
        <View style={{paddingLeft: 8}}>
          <CircleNdLongDashes
            start={route.params.start}
            end={route.params.end}
          />
        </View>
        <Line width={4} color="#d9d9d9" margin={15} />
        <View style={styles.Row}>
          <Text style={styles.Text}>Distance</Text>

          <Text style={styles.Text}>{route.params.dist} KM</Text>
        </View>
        <Line width={4} color="#d9d9d9" />
        <View style={styles.Row}>
          <Text style={styles.Text}>Product</Text>

          <Text style={styles.Text}>{route.params.product}</Text>
        </View>
        <Line width={4} color="#d9d9d9" />
        <View style={styles.Row}>
          <View>
            <Text style={styles.Text}>Truck Type</Text>
          </View>
          <View>
            <Text style={styles.Text}>Open Half/Full Body</Text>
            <Text style={styles.text}>
              {route.params.ton} TON| {route.params.tyre} Tyres
            </Text>
          </View>
        </View>
        <Line width={4} color="#d9d9d9" />
        <View style={styles.Row}>
          <Text style={styles.Text}>Total Load</Text>

          <Text style={styles.Text}>{route.params.ton} TON</Text>
        </View>
        <View style={styles.Highlight}>
          <Text style={styles.Text}>Pricing & Product Details</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.Text}>Payment</Text>

          <Text style={styles.Text}>To Pay</Text>
        </View>
        <Line width={4} color="#d9d9d9" />
        <View style={styles.Row}>
          <Text style={styles.Text}>Total Earnings</Text>

          <Text style={styles.Text}>Will be shared on call</Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={styles.HighlightText}>
            Full Amount will be paid to the driver at the unloading point{' '}
          </Text>
          <Line width={4} color="#d9d9d9" />
        </View>
        <View style={styles.CallText}>
          <Text style={styles.Text}>Call or Chat now to know the Price</Text>
        </View>
        <View style={styles.BtnContainer}>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => {
              navigation.navigate('MessageScreen');
            }}>
            <Entypo name="chat" size={24} color="white" />
            <Text style={styles.BtnText}>Chat Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => {
              Linking.openURL('tel:${8009012342}');
            }}>
            <FontAwesome name="phone" size={24} color="white" />
            <Text style={styles.BtnText}>Call Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoadDetails;

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  Text: {
    color: '#434d59',
    fontWeight: 'bold',
  },
  text: {
    color: '#434d59',
  },
  Highlight: {
    backgroundColor: '#d9d9d9',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  HighlightText: {
    padding: 5,
    backgroundColor: '#ffd2b7',
    marginHorizontal: 5,
    marginTop: 10,

    color: '#ed610b',
  },
  CallText: {
    //backgroundColor: "red",
    alignItems: 'center',
  },
  BtnContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Btn: {
    flexDirection: 'row',
    backgroundColor: '#00488d',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  BtnText: {
    color: '#FFF',
    margin: 5,
  },
});

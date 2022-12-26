{
  /* mName,data,time,dName, tNum, dNum*/
}

import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MineHistoryCard = props => {
  return (
    <View style={styles.Container}>
      <View style={styles.Upper}>
        <Image
          source={{
            uri: 'https://images.tribuneindia.com/cms/gall_content/2019/7/2019_7$largeimg19_Friday_2019_080554396.jpg',
          }}
          style={styles.Image}
        />

        <Text style={styles.DateTime}>
          <Text style={styles.mineName}>{props.mName}</Text>
          {'\n'}
          <Text>Date:{props.date}</Text>
          {'\n'}
          <Text>Time:{props.time}</Text>
        </Text>
      </View>

      <View style={styles.Container1}>
        <View style={styles.TruckDetails}>
          <View style={styles.ProductContainer}>
            <Text style={styles.names}>Driver Name:</Text>
            <Text style={styles.ProductName}>{props.dName}</Text>
          </View>

          <View style={styles.ProductContainer}>
            <Text style={styles.names}>Truck No:</Text>
            <Text style={styles.Tnum}>{props.tNum}</Text>
          </View>

          <View style={styles.ProductContainer}>
            <Text style={styles.names}>Phone:</Text>
            <Text style={styles.ProductName}>{props.dNum}</Text>
          </View>
        </View>

        <View style={styles.TruckDetails}>
          <View style={styles.ProductContainer}>
            <Text style={styles.names}>Mine Owner:</Text>
            <Text style={styles.ProductName}>Aquib </Text>
          </View>
          <View style={styles.ProductContainer}>
            <Text style={styles.names}>Mineral:</Text>
            <Text style={styles.ProductName}>Gitti</Text>
          </View>
          <View style={styles.ProductContainer}>
            <Text style={styles.names}>Phone:</Text>
            <Text style={styles.ProductName}>9838252488</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MineHistoryCard;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  Container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  Image: {
    height: (Dimensions.get('window').height * 15) / 100,
    width: (Dimensions.get('window').width * 30) / 100,
    borderRadius: 10,
  },
  names: {
    color: '#434d59',
    fontWeight: '700',
    fontSize: 15,
    marginRight: (Dimensions.get('window').width * 1) / 100,
  },
  TruckDetails: {
    width: (Dimensions.get('window').width * 45) / 100,
    justifyContent: 'space-between',
  },
  ProductContainer: {
    flexDirection: 'row',
    // width: (Dimensions.get("window").width * 20) / 100,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  ProductName: {
    color: '#434d59',
    textTransform: 'capitalize',
  },
  Tnum: {
    color: '#434d59',
    textTransform: 'uppercase',
  },
  Upper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DateTime: {
    color: '#434d59',

    textTransform: 'uppercase',
    width: (Dimensions.get('window').width * 35) / 100,
  },
  mineName: {
    fontWeight: '700',
    fontSize: 18,
    textTransform: 'capitalize',
  },
});

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Touchable,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CallButton from '../../../../../components/CallButton';

const Card = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Prodimage}>
        <Image
          style={styles.Image}
          source={{
            uri: 'https://www.thehindu.com/incoming/ca6ah9/article65496536.ece/alternates/FREE_1200/002.JPG',
          }}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.text}>Truck Driver Name</Text>
          <Text style={styles.textNum}>up32es9856</Text>
          <Text style={styles.text}>Going To:-</Text>
          <Text style={styles.textNum}>location to unload</Text>
        </View>
        <View>
          <Text style={styles.text}>moorang</Text>
          <Text style={styles.textNum}>11/09/2022 05:24 pm</Text>
          <View style={styles.BtnContainer}>
            <CallButton />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  Prodimage: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  Image: {
    height: Dimensions.get('window').height / 10,
    width: Dimensions.get('window').width / 5,
    borderRadius: Dimensions.get('window').width / 10,
  },
  detailContainer: {
    maxWidth: '40%',
  },
  text: {
    color: '#434d59',
    textTransform: 'capitalize',
    fontWeight: '700',
  },
  textNum: {
    color: '#434d59',
    textTransform: 'uppercase',
  },
  BtnContainer: {
    alignItems: 'flex-end',
  },
});

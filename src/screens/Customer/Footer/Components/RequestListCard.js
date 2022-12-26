import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import Colors from '../../../../helper/config/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const RequestListCard = () => {
  return (
    <>
      {true ? (
        <View style={styles.noReqContainer}>
          <AntDesign
            name="frown"
            size={Dimensions.get('window').width / 4}
            color={Colors.secondary}
          />
          <Text style={styles.Text}>No Request Made</Text>
        </View>
      ) : (
        <View style={styles.Container}>
          <View style={styles.Container1}>
            <Image
              style={styles.Image}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/04/13/19/20/binary-1327492__180.jpg',
              }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.Text}>Request Made</Text>
              <View style={styles.subtextContainer}>
                <View style={styles.subContainer1}>
                  <Text style={styles.text}>To Balu Corp</Text>
                  <Text style={styles.text}>
                    For Mineral: {'\n'}
                    <Text style={styles.textHigh}>Moorang</Text>
                  </Text>
                </View>
                <View style={styles.subContainer1}>
                  <Text style={styles.text}>At-:14/11/2022 11:16 AM</Text>
                  <Text style={styles.text}>
                    To Location-:
                    {'\n'}
                    <Text style={styles.textHigh}>Kanyakumari</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.Container2}>
            <Text></Text>
          </View>
        </View>
      )}
    </>
  );
};

export default RequestListCard;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  noReqContainer: {
    height: '100%',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  Text: {
    color: Colors.text,
    fontSize: 18,
    fontWeight: '700',
    //marginBottom: 10,
  },
  text: {
    color: Colors.text,
  },
  textHigh: {
    fontWeight: '700',
  },
  Container1: {
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 10,

    flex: 1,
  },
  subtextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer1: {
    width: '45%',
  },
});

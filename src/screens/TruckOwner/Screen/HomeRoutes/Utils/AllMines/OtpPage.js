import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useRef, useState} from 'react';
import DriverId from './DriverId';
import Colors from '../../../../../../helper/config/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CallButton from '../../../../../../components/CallButton';

const OtpPage = () => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [code, setCode] = useState({1: '', 2: '', 3: '', 4: ''});
  const [ok, setOk] = useState(0);
  let opt = '';
  return (
    <View style={styles.Container}>
      <View style={styles.driverContainer}>
        <DriverId />
      </View>
      <View style={styles.infoCard}>
        <View style={styles.infoContainer}>
          <Image
            source={{
              uri: 'https://www.gannett-cdn.com/-mm-/4339d7f627606caf2cdec92a06d29e6726078e30/c=130-0-2594-1392/local/-/media/2018/05/06/WisPub/WisconsinStateFarmer/636612301197666888-AP18122652569556.jpg?width=3200&height=1680&fit=crop',
            }}
            style={styles.Image}
          />
          <View style={styles.info}>
            <Text style={styles.mName}>aquib mine</Text>
            <Text>Booking ID:1254</Text>
            <Text style={styles.mName}>951236847</Text>
          </View>
        </View>
        <Text style={styles.rateText}>₹2000/quintal</Text>
      </View>
      <View style={styles.icons}>
        <Text>
          <MaterialCommunityIcons
            name="dump-truck"
            color={Colors.primary}
            size={20}
          />
          Red Sand
        </Text>
        <Text>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            color={Colors.primary}
            size={20}
          />
          22-11-2022
        </Text>
        <Text>
          <MaterialCommunityIcons
            name="clock-outline"
            color={Colors.primary}
            size={20}
          />
          04:30 pm
        </Text>
      </View>
      <View style={styles.BtnContainer}>
        <TouchableOpacity>
          <CallButton name="call" />
        </TouchableOpacity>
        <TouchableOpacity>
          <CallButton name="route" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderTopWidth: 2.5,
          borderTopColor: Colors.third,
          marginTop: 10,
        }}>
        <View style={styles.Heading}>
          <Text style={styles.textHeading}>Enter OTP</Text>
        </View>
        <View style={styles.otpContainer}>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otptext}
              keyboardType={'numeric'}
              maxLength={1}
              ref={firstInput}
              onChangeText={text => {
                setCode({...code, 1: text});
                text && secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otptext}
              keyboardType={'numeric'}
              maxLength={1}
              ref={secondInput}
              onChangeText={text => {
                setCode({...code, 2: text});
                text ? thirdInput.current.focus() : firstInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otptext}
              keyboardType={'numeric'}
              maxLength={1}
              ref={thirdInput}
              onChangeText={text => {
                setCode({...code, 3: text});
                text
                  ? fourthInput.current.focus()
                  : secondInput.current.focus();
              }}
            />
          </View>
          <View style={styles.otpBox}>
            <TextInput
              style={styles.otptext}
              keyboardType={'numeric'}
              maxLength={1}
              ref={fourthInput}
              onChangeText={text => {
                setCode({...code, 4: text});
                !text && thirdInput.current.focus();
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.SubmitBtn}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            navigation.navigate('dashboard');
          }}>
          <Text style={{fontSize: 25, color: '#FFF', fontWeight: '700'}}>
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpPage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    //justifyContent: "center",
    // alignItems: "center",
  },
  driverContainer: {
    paddingVertical: 5,
    backgroundColor: Colors.white,
    borderBottomWidth: 2,
    borderBottomColor: Colors.third,
  },
  Image: {
    width: 90,
    height: 90,
  },
  infoContainer: {
    flexDirection: 'row',
  },
  mName: {
    color: Colors.text,
    textTransform: 'uppercase',
    fontSize: 15,
  },
  info: {
    marginLeft: 10,
  },
  rateText: {
    color: Colors.white,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignSelf: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 5,
    textTransform: 'uppercase',
  },
  infoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  BtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  Heading: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeading: {
    color: Colors.text,
    fontSize: 18,
  },
  otpContainer: {
    marginBottom: 20,
    marginHorizontal: 20,

    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  otpBox: {
    margin: 10,
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: '#00448d',
    backgroundColor: '#FFF',
  },
  otptext: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 25,
  },
  submitButton: {
    backgroundColor: '#00488d',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  SubmitBtn: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    paddingHorizontal: 5,
    width: Dimensions.get('window').width,
  },
});

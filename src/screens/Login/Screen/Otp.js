import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useRef, useState} from 'react';
import styles from '../Style/Otp';
//import UserRoutes from '../../../navigation/Users/UsersRoutes';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const OtpImg = require('../assets/Otp.png');

const Otp = ({route}) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [code, setCode] = useState({1: '', 2: '', 3: '', 4: ''});
  const [ok, setOk] = useState(0);
  const navigation = useNavigation();
  // let data = {contact: route.params.contact, otp: ''};
  const handleSubmit = async () => {
    let otp = code[1] * 1000 + code[2] * 100 + code[3] * 10 + code[4] * 1;
    data.otp = JSON.stringify(otp);
    console.log(data);
    await axios({
      method: 'post',
      url: 'http://balucorp.com/admin/balu_test/verifyotp.php',
      data: data,
      header: {
        'content-type': 'multipart/form-data',
      },
    })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log('errrororo');
        console.log(error.message);
      });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFF'}}>
      <Image source={OtpImg} style={styles.Img} />
      <Text style={styles.VerText}>Verification code</Text>
      <Text style={styles.MiniText}>
        We have sent the code verification to Your Mobile Number
      </Text>
      {/* <Text style={styles.NumText}>{console.log(route.params.contact)}</Text> */}
      <View>
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

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            navigation.replace('UsersRoutes', 'Customer');
          }}>
          <Text style={{fontSize: 25, color: '#FFF', fontWeight: '700'}}>
            SUBMIT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resendButton}>
          <Text style={styles.resendText}>Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Otp;

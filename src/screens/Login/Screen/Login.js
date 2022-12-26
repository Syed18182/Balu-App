import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from '../Style/Login';
import rootStyles from '../Style/Style';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import translation from '../languages/MultiLang';
//import * as Localization from "expo-localization";
import {I18n} from 'i18n-js';
import {useState} from 'react';

const LogoImg = require('../assets/BaluLogo.png');
const bkImg = require('../assets/bkImg.png');

const i18n = new I18n(translation);
//i18n.locale=Localization.locale
//i18n.locale='hi'

const Login = ({navigation, route}) => {
  i18n.locale = route.params.lang;
  //{console.log(route)}
  const [num, setNumber] = useState(route.params);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  // {console.log(num)}
  //console.log(route.params)
  const fromLogin = true;
  let data = {contact: ''};
  const handlePressPost = async () => {
    // console.log(data);
    await axios({
      method: 'post',
      url: 'http://balucorp.com/admin/balu_test/login.php',
      data: data,
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
      .then(function (response) {
        data = response.data;
        console.log('you will get -:' + data);
        console.log(Object.values(data));
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
      })
      .finally(() => {
        navigation.navigate('OTP', data);
      });
  };

  return (
    <View style={styles.Background}>
      <ImageBackground
        source={bkImg}
        style={rootStyles.bkImg}
        resizeMode="cover">
        <View style={styles.Align}>
          <Image source={LogoImg} style={styles.BaluLogo} />
          <Text style={styles.LoginText}>{i18n.t('Login')}</Text>
          <TextInput
            placeholder={i18n.t('LoginTextBox')}
            keyboardType="phone-pad"
            maxLength={10}
            style={styles.TextInput}
            onChangeText={text => {
              data.contact = text;
            }}
          />
          {/*console.log(num)*/}
          <View style={styles.Horizontal}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              tintColors={{true: '#00cce5', false: '#00cce5'}}
            />

            <Text style={styles.CheckboxText}>{i18n.t('LoginCheckText')}</Text>
          </View>
          <TouchableOpacity
            style={styles.LoginButton}
            onPress={handlePressPost}>
            <Text style={styles.TextLoginButton}>{i18n.t('LoginBtn')}</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={styles.CheckboxText}>{i18n.t('LoginText')} </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.replace('Register', route.params);
              }}>
              <Text style={styles.Highlight}>{i18n.t('LoginSignUpText')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

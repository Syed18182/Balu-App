import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import Checkbox from '@react-native-community/checkbox';
import styles from '../Style/RegisterStyle';
import rootStyles from '../Style/Style';
import axios from 'axios';
import translation from '../languages/MultiLang';
//import * as Localization from "expo-localization";
import {I18n} from 'i18n-js';

const LogoImg = require('../assets/BaluLogo.png');
const bkImg = require('../assets/bkImg.png');

const i18n = new I18n(translation);
//i18n.locale=Localization.locale

const Register = ({route, navigation}) => {
  i18n.locale = route.params.lang;
  const fromLogin = false;
  const [isCheck, setCheck] = useState(false);
  const data = {contact: '', User: '', lang: '', name: ''};

  const postDataUsingSimplePostCall = async () => {
    // console.log('hello world');
    await axios({
      method: 'post',
      url: 'http://balucorp.com/admin/balu_test/registeruser.php',
      data: data,
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
      })
      .finally(() => {
        navigation.navigate('OTP', data);
      });
  };
  //

  return (
    <View style={styles.Background}>
      <ImageBackground
        source={bkImg}
        style={rootStyles.bkImg}
        resizeMode="cover">
        <ScrollView>
          <View style={styles.Align}>
            <Image source={LogoImg} style={styles.BaluLogo} />
            <Text style={styles.RegisterText}>{i18n.t('Register')}</Text>
            <TextInput
              placeholder={i18n.t('RegisterText1')}
              style={styles.TextInput}
              onChangeText={text => {
                data.name = text;
              }}
            />
            <TextInput
              placeholder={i18n.t('RegisterText2')}
              style={styles.TextInput}
              keyboardType="number-pad"
              onChangeText={text => {
                data.contact = text;
              }}
            />
            <TextInput
              placeholder={i18n.t('RegisterText3')}
              style={styles.TextInput}
            />

            {/*Here a tick button for Agree to our Terms and Condition*/}
            <View style={styles.Horizontal}>
              <Checkbox
                value={isCheck}
                onValueChange={() => {
                  setCheck(!isCheck);
                }}
                tintColors={{true: '#00cce5', false: '#00cce5'}}
                style={{borderColor: '#FFF'}}
              />

              <Text style={styles.CheckboxText}>
                {i18n.t('RegisterCheckText1')}
              </Text>
            </View>
            {/*Here a tick button for Agree to our Terms and Condition*/}

            <TouchableOpacity
              style={styles.RegisterButton}
              disabled={!isCheck}
              onPress={postDataUsingSimplePostCall}>
              <Text style={styles.TextRegisterButton}>
                {i18n.t('RegisterBtn')}
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text style={styles.CheckboxText}>{i18n.t('RegisterText')}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.replace('Login', route.params);
                }}>
                <Text style={styles.Highlight}>
                  {i18n.t('RegisterSignInText')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Register;

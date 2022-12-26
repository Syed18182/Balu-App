import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from '../Style/SelectLangStyle';
import {useState} from 'react';
import translation from '../languages/MultiLang';

const Translate = require('../assets/translate.png');
//import * as Localization from 'react-native-localization';
import {I18n} from 'i18n-js';

const i18n = new I18n(translation);

const SelectLang = ({navigation}) => {
  //const [lang,setLang]=useState("hi")
  i18n.locale = 'hi';
  return (
    <View style={styles.Container}>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity
          style={styles.SkipBtn}
          onPress={() => {
            navigation.navigate('UserSelection', 'hi');
          }}>
          <Text style={styles.SkipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <Image source={Translate} style={{height: 100, width: 100}} />

      <Text style={styles.MainText}>{i18n.t('Choose')}</Text>
      <Text style={styles.MiniText}>{i18n.t('Please')}</Text>

      <TouchableOpacity
        style={styles.LangSelection}
        onPress={() => {
          //setLang("en")
          navigation.navigate('UserSelection', 'en');
        }}>
        <View style={styles.Llogo}>
          <Text style={styles.LlogoText}>En</Text>
        </View>
        <Text style={styles.ChoosingText}>English</Text>
      </TouchableOpacity>
      <View style={styles.Line} />

      <TouchableOpacity
        style={styles.LangSelection}
        onPress={() => {
          //setLang("hi")
          navigation.navigate('UserSelection', 'hi');
        }}>
        <View style={styles.Llogo}>
          <Text style={styles.LlogoText}>हि</Text>
        </View>
        <Text style={styles.ChoosingText}>हिन्दी</Text>
      </TouchableOpacity>
      <View style={styles.Line} />

      <TouchableOpacity
        style={styles.LangSelection}
        onPress={() => {
          //setLang("pn")
          navigation.navigate('UserSelection', 'pn');
        }}>
        <View style={styles.Llogo}>
          <Text style={styles.LlogoText}>ਪੀ</Text>
        </View>
        <Text style={styles.ChoosingText}>ਪੰਜਾਬੀ</Text>
      </TouchableOpacity>
      <View style={styles.Line} />

      <TouchableOpacity
        style={styles.LangSelection}
        onPress={() => {
          //setLang("bn")
          navigation.navigate('UserSelection', 'bn');
        }}>
        <View style={styles.Llogo}>
          <Text style={styles.LlogoText}>লা</Text>
        </View>
        <Text style={styles.ChoosingText}>বাংলা</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectLang;

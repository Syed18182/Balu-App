import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
//import styles from './RegisterStyle'

import translation from '../languages/MultiLang';
//import * as Localization from 'react-native-localization';
import {I18n} from 'i18n-js';
import {useState, useEffect} from 'react';
import UserContext from '../../../context/UserContext/UserContext';

const Customer = require('../assets/UserSelection/customer.png');
const Driver = require('../assets//UserSelection/driver.png');
const Truck = require('../assets/UserSelection/truck.png');
const Mine = require('../assets/UserSelection/mine.png');
const Partner = require('../assets/UserSelection/partner.png');

const i18n = new I18n(translation);

const UserSelection = ({route, navigation}) => {
  useEffect(() => {
    return () => {
      console.log(uselect);
    };
  });

  i18n.locale = route.params;
  const [uselect, setUSelect] = useState({
    lang: route.params,
    PhoneNumber: null,
    User: '',
  });
  return (
    <View style={styles.Container}>
      <Text style={styles.TopText}>{i18n.t('SelectUserHeading')}</Text>

      <Text style={styles.SelectionHeading}>{i18n.t('UserBuyer')}</Text>

      <TouchableOpacity
        style={styles.Selection}
        onPress={() => {
          setUSelect({...uselect, User: 'Customer'});
          navigation.navigate('Login', uselect);
          <UserContext user="Customer" />;
        }}>
        <Image source={Customer} style={styles.Icons} />
        <View style={styles.SelectionView}>
          <Text style={styles.SelectionTextHeading}>
            {i18n.t('UserCustomer')}
          </Text>
          <Text style={styles.SelectionText}>{i18n.t('CustomerText')}</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.SelectionHeading}>{i18n.t('UserSeller')}</Text>
      <TouchableOpacity
        style={styles.Selection}
        onPress={() => {
          setUSelect({...uselect, User: 'TruckDriver'});

          navigation.navigate('Login', uselect);
          <UserContext user="TruckDriver" />;
        }}>
        <Image source={Driver} style={styles.Icons} />
        <View style={styles.SelectionView}>
          <Text style={styles.SelectionTextHeading}>
            {i18n.t('UserTruckDriver')}
          </Text>
          <Text style={styles.SelectionText}>{i18n.t('TruckDriverText')}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Selection}
        onPress={() => {
          setUSelect({...uselect, User: 'TruckOwner'});

          navigation.navigate('Login', uselect);
          <UserContext user="TruckOwner" />;
        }}>
        <Image source={Truck} style={styles.Icons} />
        <View style={styles.SelectionView}>
          <Text style={styles.SelectionTextHeading}>
            {i18n.t('UserTruckOwner')}
          </Text>
          <Text style={styles.SelectionText}>{i18n.t('TruckOwnerText')}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Selection}
        onPress={() => {
          setUSelect({...uselect, User: 'MineOwner'});

          navigation.navigate('Login', uselect);
          <UserContext user="MineOwner" />;
        }}>
        <Image source={Mine} style={styles.Icons} />
        <View style={styles.SelectionView}>
          <Text style={styles.SelectionTextHeading}>
            {i18n.t('UserMineOwner')}
          </Text>
          <Text style={styles.SelectionText}>{i18n.t('MineOwnerText')}</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.SelectionHeading}>{i18n.t('UserDistributor')}</Text>
      <TouchableOpacity
        style={styles.Selection}
        onPress={() => {
          setUSelect({...uselect, User: 'BaluPartner'});

          navigation.navigate('Login', uselect);
          <UserContext user="BaluPartner" />;
        }}>
        <Image source={Partner} style={styles.Icons} />
        <View style={styles.SelectionView}>
          <Text style={styles.SelectionTextHeading}>
            {i18n.t('UserBaluPartner')}
          </Text>
          <Text style={styles.SelectionText}>{i18n.t('BaluPartnerText')}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor:"red",
    // justifyContent:"center",
    // alignItems:"center",
    width: Dimensions.get('screen').width,
  },
  TopText: {
    padding: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00488d',
  },
  SelectionHeading: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#434d59',
  },
  Selection: {
    backgroundColor: '#87CEFF',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
  },
  SelectionView: {
    // backgroundColor:"red",
    justifyContent: 'center',
    //alignItems:"center"
  },
  SelectionTextHeading: {
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#00488d',
  },
  SelectionText: {
    fontSize: 14,
    color: '#434d59',
    textAlign: 'right',
  },
  Icons: {
    height: 64,
    width: 64,
  },
});

export default UserSelection;

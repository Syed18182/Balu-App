import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import Line from '../../components/CircleDashes/line';
import Trans from './Utils/Trans';
const Wallet = props => {
  return (
    <View style={styles.Container}>
      <View style={styles.walletPart}>
        <Text style={styles.textHi}>Hi, {props.name}</Text>
        <Text style={styles.textBal}>Your Total Balance</Text>
        <View style={styles.walletArea}>
          <Entypo name="wallet" size={40} color="#00488d" />
          <Text style={styles.textMoney}>₹ 400</Text>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.textAdd}>ADD BALANCE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.transactionPart}>
        <Text style={styles.textTrans}>Transaction</Text>
        <Line color="#d9d9d9" width={2} />
        <ScrollView>
          <Trans TransName="Welcome Money" Status="JnJpGVqrm5" Amount={400} />
          <Trans
            TransName="Reacharge Amount"
            Status="Not Done"
            Amount={1199.0}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  walletPart: {
    flex: 0.4,
    backgroundColor: '#00488d',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: 'center',
  },
  transactionPart: {
    flex: 0.6,

    //paddingLeft: 10,
  },
  textHi: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textBal: {
    color: '#fff',
    fontSize: 18,
  },
  walletArea: {
    width: '80%',
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80,
    padding: 10,
    alignItems: 'center',
  },
  textMoney: {
    color: '#00488d',
    marginTop: 5,
    fontSize: 20,
  },
  addBtn: {
    width: '80%',
    backgroundColor: '#00488d',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  textAdd: {
    color: '#fff',
  },
  textTrans: {
    fontSize: 17,
    fontWeight: '500',
    margin: 10,
  },
});
export default Wallet;

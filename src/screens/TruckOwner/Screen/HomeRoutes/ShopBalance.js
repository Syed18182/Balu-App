import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
} from 'react-native';
import React from 'react';
import DriverCard from './Utils/DriverCard';
import {useState} from 'react';
import TextInputMultiline from '../../../../components/TextInputMultiline';
import AddButton from '../../../../components/AddButton';

const HandleAdd = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
      }}>
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>Shop Name</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>Shop Contact</Text>
        <TextInput style={styles.textInput} />
      </View>

      <View style={styles.textInputContainer}>
        <Text style={styles.text}>Address</Text>
        <TextInputMultiline />
      </View>
      <AddButton />
    </View>
  );
};

const ShopBalance = () => {
  const [salary, setsalary] = useState(null);
  return (
    <>
      <ScrollView style={styles.Container}>
        <DriverCard bal={80000} />
      </ScrollView>
      {salary === 'add' ? <HandleAdd /> : null}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          setsalary('add');
        }}>
        <Text style={styles.addBtnText}>Add Shop Balance</Text>
      </TouchableOpacity>
    </>
  );
};

export default ShopBalance;

const styles = StyleSheet.create({
  addBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  addBtn: {
    backgroundColor: '#00488c',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  textInputContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginTop: 5,
  },
  textInput: {
    borderRadius: 8,
  },
  text: {
    color: '#434d59',
  },
});

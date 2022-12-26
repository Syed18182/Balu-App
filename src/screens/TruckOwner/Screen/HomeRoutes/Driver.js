import {
  ScrollView,
  View,
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
        <Text style={styles.text}>Driver Name</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>Driver Contact</Text>
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

const Driver = () => {
  const [salary, setsalary] = useState(null);
  return (
    <View style={styles.Container}>
      <ScrollView>
        <DriverCard />
      </ScrollView>
      {salary === 'add' ? <HandleAdd /> : null}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => {
          setsalary('add');
        }}>
        <Text style={styles.addBtnText}>Add Salary</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Driver;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
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

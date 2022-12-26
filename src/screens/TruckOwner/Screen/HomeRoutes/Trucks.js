import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import TrucksCard from './Utils/TrucksCard';
import RateCard from '../../../../components/RateCard';
import Colors from '../../../../helper/config/Colors';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    dName: 'gulbinder singh tomar',
    tName: 'tata',
    tStatus: 'Verify OTP',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'harinder kumar singh ',
    tName: 'Ashok',
    tStatus: 'Verify OTP',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'manpreet sodi',
    tName: 'tata',
    tStatus: 'Verify OTP',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'vijay kumar',
    tName: 'Ashok',
    tStatus: 'Find Customer',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'shaka kumar',
    tName: 'tata',
    tStatus: 'Verify OTP',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'jamesh watson',
    tName: 'Ashok',
    tStatus: 'available',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'virat kohli',
    tName: 'Ashok',
    tStatus: 'Find Customer',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'juginder sikka',
    tName: 'tata',
    tStatus: 'Verify OTP',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'manveer bagga',
    tName: 'Ashok',
    tStatus: 'Find Customer',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'paras singh',
    tName: 'tata',
    tStatus: 'Verify OTP',
    tNum: 'hr32tr7894',
  },
];

let Rname = '';
const pullData = rNum => {
  Rname = rNum;
  console.log(Rname);
};

const Trucks = () => {
  const navigation = useNavigation();
  return (
    <>
      <RateCard alltrucks={80} available={23} onload={57} />
      {/*props:alltrucks,available,onload */}
      <ScrollView style={styles.Container}>
        <TrucksCard data={data} func={pullData} />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          width: Dimensions.get('window').width,
          //backgroundColor: "red",
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 0,
        }}>
        <TouchableOpacity
          style={styles.BtnContainer}
          onPress={() => {
            navigation.navigate('AddTruck');
          }}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Trucks;

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 10,
    backgroundColor: Colors.third,
  },
  BtnContainer: {
    height: 60,
    width: 60,
    //paddingHorizontal: 15,
    borderRadius: 30,
    backgroundColor: '#00cce5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 35,
  },
});

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../../../../../helper/config/Colors';

const time = [
  '11:30 AM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
  '06:30 PM',
  '07:00 PM',
  '07:30 PM',
  '08:00 PM',
  '08:30 PM',
  '09:00 PM',
  '09:30 PM',
  '10:00 PM',
  '10:30 PM',
  '11:00 PM',
  '11:30 PM',
  '12:00 AM',
];
const TimeComp = () => {
  const pressed = true;
  const [pIndex, setpIndex] = useState(null);
  const onPressHandler = i => {};

  return (
    <ScrollView contentContainerStyle={styles.Container}>
      {time.map((value, i) => {
        return (
          <View selectionColor={Colors.text}>
            <TouchableOpacity
              style={[
                styles.timeContainer,
                {
                  backgroundColor: pIndex == i ? Colors.primary : null,
                },
              ]}
              onPress={() => {
                setpIndex(i);
                console.log(i);
              }}>
              <Text
                style={{
                  color: pIndex == i ? Colors.white : Colors.text,
                }}>
                {value}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default TimeComp;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //backgroundColor: "red",
    justifyContent: 'center',
    marginTop: 10,
  },
  timeContainer: {
    borderWidth: 1,
    margin: 5,
    padding: 2,
    borderRadius: 8,
    borderColor: Colors.text,
  },
  selectTimeContainer: {
    backgroundColor: Colors.primary,
  },
});

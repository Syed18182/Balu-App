import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Line from '../../../components/CircleDashes/line';

const Trans = props => {
  return (
    <>
      <View style={styles.Container}>
        <Text style={styles.text1}>{props.TransName}</Text>
        <View>
          <Text style={styles.text1}>Transaction id</Text>
          <Text style={styles.text2}>{props.Status}</Text>
        </View>
        <Text style={styles.text1}>₹ {props.Amount}</Text>
      </View>
      <Line color="#d9d9d9" width={2} />
    </>
  );
};

export default Trans;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  text1: {
    fontWeight: '600',
    color: '#434d59',
  },
  text2: {
    color: '#434d59',
  },
});

{
  /*
Props to be passed are Name of Transaction as(TransName)
Transaction status as (Status)
and Amount as (Amount)
*/
}

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Dash = props => {
  const styles = StyleSheet.create({
    design: {
      height: 10,
      width: 5,
      backgroundColor: '#d9d9d9',
      marginBottom: props.bottom,
      marginHorizontal: 7.5,
    },
  });
  return <View style={styles.design} />;
};

export default Dash;

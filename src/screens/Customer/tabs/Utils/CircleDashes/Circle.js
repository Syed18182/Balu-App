import { View, Text, StyleSheet } from "react-native";
import React from "react";
//import styles from '../../RegisterStyle'

const Circle = (props) => {
  const styles = StyleSheet.create({
    Container: {
      flexDirection: "row",
    },
    design: {
      height: props.height,
      width: props.width,
      borderRadius: props.height / 2,
      borderWidth: 4,
      borderColor: props.color,
    },
    text: {
      marginHorizontal: 10,
      fontSize: 16,
      fontWeight: "bold",
      color: "#434d59",
      textTransform: "capitalize",
    },
  });
  return (
    <View style={styles.Container}>
      <View style={styles.design} />
      <Text style={styles.text}>{props.location}</Text>
    </View>
  );
};

export default Circle;

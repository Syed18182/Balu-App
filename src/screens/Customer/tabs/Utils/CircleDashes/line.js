import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Line = (props) => {
  const styles = StyleSheet.create({
    Line: {
      borderBottomWidth: props.width,
      borderBottomColor: props.color,
      marginTop: props.margin,
    },
  });
  return <View style={styles.Line} />;
};

export default Line;

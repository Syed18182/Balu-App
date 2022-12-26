import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const GButton = (props) => {
  return (
    <TouchableOpacity style={styles.Btn}>
      <Text style={styles.textBtn}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default GButton;

const styles = StyleSheet.create({
  Btn: {
    backgroundColor: "#00488d",
    borderRadius: 10,
    paddingHorizontal: 15,

    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    color: "#fff",
    textTransform: "capitalize",
  },
});

import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AddButton = (props) => {
  return (
    <View>
      <View style={styles.addBtn}>
        <Text style={styles.addBtnText}>{props.text}</Text>
      </View>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addBtnText: {
    color: "#fff",
    fontSize: 16,
    textTransform: "capitalize",
  },
  addBtn: {
    backgroundColor: "#00488c",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

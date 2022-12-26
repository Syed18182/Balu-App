import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import React from "react";
import RadioList from "./Utils/RadioList";
import { useState } from "react";

const Language = () => {
  list = [
    { value: "हिन्दी" },
    { value: "English" },
    { value: "ਪੰਜਾਬੀ" },
    { value: "বাংলা" },
  ];
  let select = false;
  return (
    <View style={styles.Container}>
      <View style={styles.List}>
        <RadioList data={list} select={select} />
      </View>
      <TouchableOpacity
        style={styles.Btn}
        disabled={select}
        onPress={() => {
          Alert.alert("Applied Successfully");
        }}
      >
        <Text style={styles.textBtn}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Language;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  List: {
    width: Dimensions.get("window").width,
  },
  Btn: {
    width: "80%",
    backgroundColor: "#00488d",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  textBtn: {
    color: "#fff",
    fontSize: 16,
  },
});

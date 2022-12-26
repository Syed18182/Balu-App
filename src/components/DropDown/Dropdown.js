import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState, useRef } from "react";
import { Picker } from "@react-native-picker/picker";

let Values = { Price: "", RateCom: "Square Ft" };

const Dropdown = (props) => {
  const [rate, setrate] = useState({ price: "", rateCom: "Square Ft" });
  const [ptype, setptype] = useState("Cash");
  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <View>
      <View style={styles.Container}>
        <View style={styles.picker}>
          {props.gen ? (
            <Picker
              style={styles.text}
              selectedValue={ptype}
              onValueChange={(itemValue, ItemIndex) => {
                setptype(itemValue);
              }}
            >
              {props.data.map((value) => {
                return <Picker.Item label={value} value={value} />;
              })}
            </Picker>
          ) : (
            <Picker
              style={styles.text}
              selectedValue={rate.rateCom}
              onValueChange={(itemValue, ItemIndex) => {
                setrate({ ...rate, rateCom: itemValue });
                Values.RateCom = itemValue;
              }}
            >
              {props.data.map((value) => {
                return <Picker.Item label={value} value={value} />;
              })}
            </Picker>
          )}
        </View>
      </View>
    </View>
  );
  //console.log(rate.price);
};

export default Dropdown;

const styles = StyleSheet.create({
  picker: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
    width: "100%",
    minWidth: "58%",
  },
  Rate: {
    backgroundColor: "#fff",

    width: "40%",
    borderRadius: 10,
    marginTop: 10,
    // paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: "center",
    //alignItems: "center",
    marginRight: 10,
  },
  text: {
    color: "#434d59",
    fontSize: 15,
    borderColor: "#fff",
  },
  textInput: {
    color: "#434d59",
    fontSize: 15,
    borderColor: "#fff",
    marginTop: 10,
    marginRight: 10,
    borderRadius: 10,
    height: 500,
  },
});

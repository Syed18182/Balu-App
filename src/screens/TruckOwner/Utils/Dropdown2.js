import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState, useRef } from "react";
import { Picker } from "@react-native-picker/picker";
import TextInputMultiline from "../../../utils/TextInputMultiline";

let Values = { Price: "", RateCom: "Square Ft" };

const Dropdown2 = (props) => {
  const [rate, setrate] = useState({ price: "", rateCom: "Square Ft" });
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
        <View style={styles.Rate}>
          <TextInput
            placeholder="Enter Rate"
            style={styles.text}
            onChangeText={(e) => {
              setrate({ ...rate, price: e });
              Values.Price = e;
              props.func(Values);
            }}
          />
        </View>
        <View style={styles.picker}>
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
        </View>
      </View>
    </View>
  );
  //console.log(rate.price);
};

export default Dropdown2;

const styles = StyleSheet.create({
  Container: { flexDirection: "row", paddingRight: 10 },

  picker: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
    width: "58%",
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

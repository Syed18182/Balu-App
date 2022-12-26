import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRef } from "react";
import { Picker } from "@react-native-picker/picker";

let Values = { cat: "", sub: "" };

const Dropdown = (props) => {
  const [selectedProduct, setSelectedProduct] = useState("Concrete");
  const [selectedSub, setSelectedSub] = useState("above 20mm");
  const pickerRef = useRef();
  let concrete,
    red,
    white,
    silica,
    brick = false;

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <View style={styles.Container}>
      {/* <Picker
        selectedValue={selectedProduct}
        onValueChange={(itemValue, ItemIndex) => {
          setSelectedProduct(itemValue);
        }}
      >
        <Picker.Item label="Concrete" value="concrete" />
        <Picker.Item label="Red Sand" value="redsand" />
        <Picker.Item label="White Sand" value="whitesand" />
        <Picker.Item label="Silica Sand" value="silicasand" />
        <Picker.Item label="Brick" value="bricks" />
      </Picker> */}
      <View style={styles.picker}>
        <Picker
          selectedValue={selectedProduct}
          onValueChange={(itemValue, ItemIndex) => {
            setSelectedProduct(itemValue);
            Values.cat = itemValue;
          }}
          style={styles.text}
        >
          {props.sub.list.map((value) => {
            return <Picker.Item label={value} value={value} />;
          })}
          {/* {console.log(selectedProduct)} */}
        </Picker>
      </View>
      <View style={styles.picker}>
        {/*For Concrete */}
        {selectedProduct === "Concrete" ? (
          <Picker
            selectedValue={selectedSub}
            onValueChange={(itemValue, ItemIndex) => {
              setSelectedSub(itemValue);
              Values.sub = itemValue;
              props.func(Values);
            }}
            style={styles.text}
          >
            {props.sub.ConcreteSub.map((value) => {
              return <Picker.Item label={value} value={value} />;
            })}
          </Picker>
        ) : null}
        {/*Red Sand */}
        {selectedProduct === "Red Sand" ? (
          <Picker
            selectedValue={selectedSub}
            onValueChange={(itemValue, ItemIndex) => {
              setSelectedSub(itemValue);
              Values.sub = itemValue;
              props.func(Values);
            }}
            style={styles.text}
          >
            {props.sub.RedSandSub.map((value) => {
              return <Picker.Item label={value} value={value} />;
            })}
          </Picker>
        ) : null}
        {/*White Sand */}
        {selectedProduct === "White Sand" ? (
          <Picker
            selectedValue={selectedSub}
            onValueChange={(itemValue, ItemIndex) => {
              setSelectedSub(itemValue);
              Values.sub = itemValue;
              props.func(Values);
            }}
            style={styles.text}
          >
            {props.sub.WhiteSilicaSub.map((value) => {
              return <Picker.Item label={value} value={value} />;
            })}
          </Picker>
        ) : null}
        {/*Silica Sand*/}
        {selectedProduct === "Silica Sand" ? (
          <Picker
            selectedValue={selectedSub}
            onValueChange={(itemValue, ItemIndex) => {
              setSelectedSub(itemValue);
              Values.sub = itemValue;
              props.func(Values);
            }}
            style={styles.text}
          >
            {props.sub.WhiteSilicaSub.map((value) => {
              return <Picker.Item label={value} value={value} />;
            })}
          </Picker>
        ) : null}
        {/*Brick */}
        {selectedProduct === "Bricks" ? (
          <Picker
            selectedValue={selectedSub}
            onValueChange={(itemValue, ItemIndex) => {
              setSelectedSub(itemValue);
              Values.sub = itemValue;
              props.func(Values);
            }}
            style={styles.text}
          >
            {props.sub.Bricks.map((value) => {
              return <Picker.Item label={value} value={value} />;
            })}
          </Picker>
        ) : null}
      </View>
      {/* {props.data1.map((value) => {
        console.log(value);
      })} */}
    </View>
  );
  props.func(selectedProduct, selectedSub);
};

export default Dropdown;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picker: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    marginRight: 10,
    width: "45%",
    // marginRight: 10,
  },
  text: {
    color: "#434d59",
    fontSize: 15,
  },
});

{
  /*selectedSub and selectedProduct are the state variables containing Category selection and its sub selection */
}

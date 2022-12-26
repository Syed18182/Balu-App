import { View, Text, Pressable, Alert, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";

const RadioList = (props) => {
  const [userOption, setUserOption] = useState(null);

  return (
    <View>
      {props.data.map((item) => {
        return (
          <Pressable
            style={
              item.value === userOption
                ? styles.ContainerSelected
                : styles.ContainerUnselected
            }
            onPress={() => {
              setUserOption(item.value);
              props.select = true;
              Alert.alert("You pressed " + item.value);
            }}
          >
            <Text
              style={
                item.value === userOption
                  ? styles.textSelected
                  : styles.textUnselected
              }
            >
              {item.value}
            </Text>
          </Pressable>
        );
      })}
      {/* {console.log(userOption)} */}
    </View>
  );
};

export default RadioList;
const styles = StyleSheet.create({
  ContainerSelected: {
    backgroundColor: "#00488d",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  ContainerUnselected: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  textSelected: {
    color: "white",
    fontSize: 14,
  },
  textUnselected: {
    color: "#434d59",
    fontSize: 14,
  },
});

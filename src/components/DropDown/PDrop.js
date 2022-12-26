import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const PDrop = (props) => {
  const [type, setType] = useState("select mode");
  const [visible, setvisible] = useState(false);
  return (
    <View style={{ backgroundColor: "red" }}>
      <Pressable
        onPress={() => {
          setvisible(!visible);
        }}
      >
        <View style={styles.Container}>
          <Text style={styles.text}>{type}</Text>
          {visible ? (
            <AntDesign name="up" size={15} />
          ) : (
            <AntDesign name="down" size={15} />
          )}
        </View>
      </Pressable>
      {visible ? (
        <View style={styles.list}>
          <TouchableHighlight
            onPress={() => {
              setvisible(!visible);
              setType("online");
            }}
          >
            <View style={styles.Container}>
              <Text style={styles.text}>Online</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setvisible(!visible);
              setType("cash");
            }}
          >
            <View style={styles.Container}>
              <Text style={styles.text}>Cash</Text>
            </View>
          </TouchableHighlight>
        </View>
      ) : null}
    </View>
  );
};

export default PDrop;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  list: {
    // position: "absolute",
    // width: "100%",
  },
  text: {
    color: "#434d59",
    textTransform: "capitalize",
  },
});

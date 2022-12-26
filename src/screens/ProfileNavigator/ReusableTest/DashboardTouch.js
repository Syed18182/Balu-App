import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";

const styles = StyleSheet.create({
  icons: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  touchContainer: {
    width: Dimensions.get("window").width,
    marginBottom: 20,
    height: 60,
    //backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  touch: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: "#434d59",
  },
});

const DashboardTouch = (props) => {
  return (
    <View style={styles.touchContainer}>
      <View style={styles.touch}>
        <Image source={props.image} style={styles.icons} />

        <Text style={styles.text}>{props.text}</Text>
      </View>
      <Image source={props.arrow} style={styles.icons} />
    </View>
  );
};

export default DashboardTouch;

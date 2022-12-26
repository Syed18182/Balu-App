import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const Scomp = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.Container}>
        {props.object.map((data) => {
          return (
            <TouchableOpacity
              style={styles.Container1}
              onPress={() => {
                navigation.navigate(data.name);
              }}
            >
              <MaterialCommunityIcons
                name={data.icon}
                color="#00488d"
                size={35}
              />
              <Text style={styles.text}>{data.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {props.object1 ? (
        <View style={styles.Container}>
          {props.object1.map((data) => {
            return (
              <TouchableOpacity
                style={styles.Container2}
                onPress={() => {
                  navigation.navigate(data.name);
                }}
              >
                <Fontisto name={data.icon} color="#00488d" size={35} />
                <Text style={styles.text}>{data.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
    </View>
  );
};

export default Scomp;

const styles = StyleSheet.create({
  Container: {
    marginTop: 10,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  Container1: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "32%",
    height: (Dimensions.get("window").width * 25) / 100,
  },
  Container2: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "48%",
    height: (Dimensions.get("window").width * 25) / 100,
  },
  text: {
    color: "#434d59",
    fontSize: 15,
  },
});

import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const RateCard = (props) => {
  return (
    <View style={styles.Container}>
      {props.redsand ? (
        <View style={styles.Card}>
          <View>
            <Text style={styles.textProduct}>Red Sand</Text>
            <Text style={styles.textRate}>72 SQ/FT</Text>
          </View>
          <View>
            <Text style={styles.textProduct}>White Sand</Text>
            <Text style={styles.textRate}>60 SQ/FT</Text>
          </View>
          <View>
            <Text style={styles.textProduct}>Concrete</Text>
            <Text style={styles.textRate}>45 SQ/FT</Text>
          </View>{" "}
        </View>
      ) : (
        <View style={styles.Card}>
          <View>
            <Text style={styles.textProduct}>All Trucks</Text>
            <Text style={styles.textRate}>{props.alltrucks}</Text>
          </View>
          <View>
            <Text style={styles.textProduct}>Available Trucks</Text>
            <Text style={styles.textRate}>{props.available}</Text>
          </View>
          <View>
            <Text style={styles.textProduct}>Trucks On Load</Text>
            <Text style={styles.textRate}>{props.onload}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default RateCard;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    backgroundColor: "#d9d9d9",
    justifyContent: "space-between",
    padding: 10,
  },
  Card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textProduct: {
    color: "#434d59",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  textRate: { color: "#00488d", fontWeight: "600", textAlign: "center" },
});

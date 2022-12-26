import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
const YourOrdersCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.nameContainer}>
        <View style={styles.nameSubContainer}>
          <FontAwesome name="circle" size={35} color="#00488d" />

          <Text style={styles.nameText}>Sumit Kumar</Text>
        </View>
        <View style={styles.nameSubContainer}>
          <Text style={styles.textBg}>Negotiable</Text>
        </View>
      </View>
      <View style={styles.Line} />
      <View style={styles.nameContainer}>
        <Text style={styles.text}>Mineral-: Moorang</Text>
        <Text style={styles.text}>100000</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.Text}>Indore-Lucknow</Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.text}>
          Load Target: <Text style={styles.textHigh}>Today 10:00pm</Text>
        </Text>
        <TouchableOpacity
          style={styles.BtnContainer}
          onPress={() => {
            navigation.navigate("YourOrderDetails");
          }}
        >
          <Text style={styles.BtnText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YourOrdersCard;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
  },
  nameContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameSubContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameText: {
    color: "#434d59",
    fontWeight: "700",
    fontSize: 17,
    marginLeft: 10,
  },
  textBg: {
    color: "#31a200",
    backgroundColor: "#b0d89e",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontWeight: "600",
  },
  Line: {
    borderBottomWidth: 1,
    borderColor: "#434d59",
  },
  text: {
    color: "#434d59",
    fontWeight: "500",
  },
  Text: {
    color: "#434d59",
    fontWeight: "700",
    fontSize: 18,
  },
  BtnContainer: {
    backgroundColor: "#00488d",
    paddingHorizontal: 10,
    paddingVertical: 2.5,
    borderRadius: 8,
  },
  BtnText: {
    color: "#fff",
  },
  textHigh: {
    color: "red",
    textTransform: "uppercase",
  },
});

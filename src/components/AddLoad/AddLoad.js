import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";

import TextInputMultiline from "../TextInputMultiline";

import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import Dropdown from "./Utils/Dropdown";
import CalenderComp from "./Utils/CalenderComp";
import Dropdown2 from "./Utils/Dropdown2";

const AddLoad = () => {
  const navigation = useNavigation();
  const [Values, setValues] = useState({
    From: "",
    To: "",
    Cate: "Concrete",
    Size: "above 20 mm",
    Rate: "",
    RateCom: "Square ft",
    Date: "",
    Remark: "",
  });
  const [ToLoc, setToLoc] = useState();
  const [FromLoc, setFromLoc] = useState();
  let subCate = {
    list: ["Concrete", "Red Sand", "White Sand", "Silica Sand", "Bricks"],
    ConcreteSub: [
      "above 20 mm",
      "14-20 mm",
      "10 mm",
      "Jera",
      "Dust",
      "GSB",
      "G2",
      "G3",
    ],
    RedSandSub: ["Big", "Medium", "Very Small"],
    WhiteSilicaSub: ["Big", "Very Small"],
    Bricks: ["1 Number", "2 Number", "3 Number"],
  };
  let count = ["Square ft", "Quintal", "Piece", "Trolley", "Ton"];

  const Pulldata = (data) => {
    setValues({ ...Values, Date: data });
  };
  const Pulldata1 = (data) => {
    setValues({ ...Values, Cate: data.cat, Size: data.sub });
  };
  const Pulldata2 = (data) => {
    setValues({ ...Values, Rate: data.Price, RateCom: data.RateCom });
  };
  const Pulldata3 = (data) => {
    setValues({ ...Values, Remark: data });
  };

  const handleSuccess = () => {
    Alert.alert("", "Press OK to Confirm", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      { text: "OK", onPress: () => navigation.replace("HomeScreen") },
    ]);
  };

  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.Container1}>
          <Text style={styles.text}>From Location</Text>
          <TextInput
            style={styles.TextInput}
            onChangeText={(e) => {
              setValues({ ...Values, From: e });
            }}
          />
          <Text style={styles.text}>To Location</Text>
          <TextInput
            style={styles.TextInput}
            onChangeText={(e) => {
              setValues({ ...Values, To: e });
            }}
          />
        </View>

        <View style={styles.Container2}>
          <View style={styles.truckDetailsContainer}>
            <Text style={styles.truckDetails}>6 TYRES</Text>
            <Text style={styles.truckDetails}>Max Load 9TN</Text>
          </View>
          <Text style={styles.text}>Select Material Type</Text>
          <Dropdown sub={subCate} func={Pulldata1} />
          <Text style={styles.text}>Load Delivery Date</Text>
          <CalenderComp func={Pulldata} />
          <Dropdown2 data={count} func={Pulldata2} />
          <View style={styles.MultiLine}>
            <TextInputMultiline func={Pulldata3} placeholder="Add Remark" />
          </View>
          <Text style={styles.lastText}>
            Rate of Concrete in your area is {84}/Square ft{" "}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => {
            console.log(Values);
            Values.From === "" &&
            Values.To === "" &&
            Values.Rate === "" &&
            Values.Date === ""
              ? Alert.alert("Load Details are not complete")
              : handleSuccess();
            // console.log(FromLoc);
            // console.log(ToLoc);
          }}
        >
          <Text style={styles.addBtnText}>Add Load</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddLoad;
const styles = StyleSheet.create({
  Container: {
    //padding: 10,
  },
  Container1: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  TextInput: {
    borderRadius: 10,
    borderWidth: 2.5,
  },

  truckDetailsContainer: {
    flexDirection: "row",
    //backgroundColor: "red",
    justifyContent: "space-between",
    marginRight: 10,
  },
  truckDetails: {
    backgroundColor: "#fff",
    color: "#434d59",
    fontSize: 16,
    width: "40%",
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    //marginLeft: 10,
  },
  text: {
    color: "#434d59",
    fontSize: 16,
    marginTop: 5,
  },
  Container2: {
    marginLeft: 10,
  },
  MultiLine: {
    paddingRight: 10,
  },
  lastText: {
    color: "#00488e",
    textAlign: "center",
    marginVertical: 10,
  },
  addBtnText: {
    color: "#fff",
    fontSize: 16,
  },
  addBtn: {
    backgroundColor: "#00488c",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

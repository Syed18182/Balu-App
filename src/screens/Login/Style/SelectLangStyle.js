import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  Container: {
    flex: 1,

    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  SkipBtn: {
    padding: 10,
  },
  SkipText: {
    fontSize: 18,
    fontWeight: "600",
  },
  MainText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#434d59",
    paddingHorizontal: 10,
  },
  MiniText: {
    color: "#434d59",
    fontSize: 15,
    paddingHorizontal: 10,
  },
  LangSelection: {
    //backgroundColor:"red",
    height: 60,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    margin: 10,
  },
  ChoosingText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#434d59",
  },
  Llogo: {
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 30,
  },
  LlogoText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  Line: {
    borderBottomColor: "#00cce5",
    borderBottomWidth: 5,
    left: 0,
    right: 0,
  },
});

export default styles;

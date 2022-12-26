import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Img: {
    marginTop: "10%",
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  VerText: {
    margin: 10,
    fontSize: 28,
    fontWeight: "bold",
    color: "#434d59",
  },
  MiniText: {
    paddingHorizontal: "8%",

    fontSize: 20,
    textAlign: "center",
    color: "#00cce5",
  },
  NumText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#434d59",
    margin: 30,
  },
  otpContainer: {
    marginBottom: 20,
    marginHorizontal: 20,

    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  otpBox: {
    margin: 10,
    height: 60,
    width: 60,
    borderWidth: 2,
    borderColor: "#00cce5",
    //borderRadius: 15,
    backgroundColor: "#FFF",
  },
  otptext: {
    flex: 1,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 25,
  },
  submitButton: {
    backgroundColor: "#00cce5",
    borderRadius: 8,

    padding: 10,
    marginTop: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  resendButton: {
    padding: 10,

    justifyContent: "center",
    alignItems: "center",
  },
  resendText: {
    color: "#434d59",
    fontSize: 25,
  },
});

export default styles;

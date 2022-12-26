import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MessagesComponent = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      {props.data.user.map((value) => {
        return (
          <View>
            <TouchableOpacity
              style={styles.Container}
              onPress={() => {
                console.log(value.id);
                navigation.navigate("MessageScreen");
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 10,
                }}
              >
                <Image source={value.photo} style={styles.Image} />
                <View>
                  <Text style={styles.Name}>{value.name}</Text>
                  <Text style={styles.LastMessage}>{value.lastmessage}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.LastMessage}>{value.time}</Text>
              </View>
            </TouchableOpacity>

            <View
              style={{ borderBottomWidth: 3, borderBottomColor: "#d9d9d9" }}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  Name: {
    fontWeight: "700",
    color: "#434d59",
  },
  LastMessage: {
    color: "#434d59",
  },
});
export default MessagesComponent;

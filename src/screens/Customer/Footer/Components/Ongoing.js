import { View, Text } from "react-native";
import React from "react";
import MyOrderComponent from "./MyOrderComponent";

const Ongoing = () => {
  return (
    <View>
      <MyOrderComponent
        name="puneet pandey"
        truckno="up32ed9856"
        product="moorang"
        photo={{
          uri: "http://thispix.com/wp-content/uploads/2015/06/portrait-profile-012.jpg",
        }}
        start="Akbarpur,Ambedkar Nagar"
        end="Maleseyamau,Lucknow"
      />
    </View>
  );
};

export default Ongoing;

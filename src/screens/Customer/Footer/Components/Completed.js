import { View, Text } from "react-native";
import React from "react";
import MyOrderComponent from "./MyOrderComponent";

const Completed = () => {
  return (
    <View>
      <MyOrderComponent
        name="Arvind Pandey"
        confirmation="unloaded"
        product="moorang"
        truckno="up14bd2145"
        photo={{
          uri: "http://thispix.com/wp-content/uploads/2015/06/portrait-profile-012.jpg",
        }}
        start="banda, chitrakoot"
        end="Maleseyamau,Lucknow"
        time="02:44 pm"
        date="14/11/2022"
      />
    </View>
  );
};

export default Completed;

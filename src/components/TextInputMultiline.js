import { View, Text, TextInput } from "react-native";
import React from "react";
import { useState } from "react";
let Value = "";
const TextInputMultiline = (props) => {
  const [value, setValue] = useState("");
  return (
    <View>
      <TextInput
        style={{
          borderColor: "#fff",
          marginTop: 10,
          borderRadius: 10,
          color: "#434d59",
          borderColor: "#d9d9d9",
        }}
        numberOfLines={4}
        multiline
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={(text) => {
          setValue(text);
          Value = text;
          props.func(Value);
        }}
      />
    </View>
  );
};

export default TextInputMultiline;

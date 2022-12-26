import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
//import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from 'react';
import CurrentLoadCard from '../Utils/CurrentLoadCard';

const CurrentLoad = () => {
  return (
    <>
      <CurrentLoadCard rate="48/square ft" />
    </>
  );
};

export default CurrentLoad;
const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});

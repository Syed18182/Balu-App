import {View, ScrollView, Text, StyleSheet} from 'react-native';
import React from 'react';
import AllMinesCard from './AllMinesCard';
import SearchBar from '../../../../../../components/SearchBar/SearchBar';
import DriverId from './DriverId';
//import AddLoad from "../../../../../utils/AddButton";

const data = [
  {
    product: 'moorang',
    mName: 'Aquib Mine',
    rating: 3.4,
    approx: 1.8,
    mAddress: '450/151 lane opp to sangan , muftiganj,hussainabad , lko',
    rate: 40,
  },
  {
    product: 'balu',
    mName: 'natiq khudai',
    rating: 3.4,
    approx: 1.8,
    mAddress: 'sarfarazganj , muftiganj,hussainabad , lko',
    rate: 40,
  },
  {
    product: 'balu',
    mName: 'natiq khudai',
    rating: 3.4,
    approx: 1.8,
    mAddress: 'sarfarazganj , muftiganj,hussainabad , lko',
    rate: 40,
  },
  {
    product: 'moorang',
    mName: 'Aquib Mine',
    rating: 3.4,
    approx: 1.8,
    mAddress: '450/151 lane opp to sangan , muftiganj,hussainabad , lko',
    rate: 40,
  },
  {
    product: 'moorang',
    mName: 'Aquib Mine',
    rating: 3.4,
    approx: 1.8,
    mAddress: '450/151 lane opp to sangan , muftiganj,hussainabad , lko',
    rate: 40,
  },
  {
    product: 'Gitti',
    mName: 'Ali fields',
    rating: 3.4,
    approx: 1.8,
    mAddress: '450/151 Square head , muftiganj,hussainabad , lko',
    rate: 58,
  },

  {
    product: 'moorang',
    mName: 'Aquib Mine',
    rating: 3.4,
    approx: 1.8,
    mAddress: '450/151 lane opp to sangan , muftiganj,hussainabad , lko',
    rate: 40,
  },
  {
    product: 'cement',
    mName: 'Aquib Mine',
    rating: 3.4,
    approx: 1.8,
    mAddress: '450/151 lane opp to sangan , muftiganj,hussainabad , lko',
    rate: 40,
  },
  {
    product: 'Gitti',
    mName: 'Ali fields',
    rating: 3.4,
    approx: 1.8,
    mAddress: '450/151 Square head , muftiganj,hussainabad , lko',
    rate: 58,
  },
];

const AllMines = () => {
  return (
    <View>
      <View style={styles.dContainer}>
        <DriverId />
        <View style={styles.Line} />
      </View>
      <SearchBar />
      <ScrollView style={styles.ScrollContainer}>
        <AllMinesCard data={data} />
      </ScrollView>
    </View>
  );
};

export default AllMines;

const styles = StyleSheet.create({
  Line: {
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 2,
    marginTop: 5,
  },
  dContainer: {
    backgroundColor: '#fff',
  },
  ScrollContainer: {
    paddingBottom: 500,
  },
});

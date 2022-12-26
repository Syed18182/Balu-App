import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
//import TruckDriverCard from "../Utils/TruckDriverCard";
import RateCard from '../Utils/RateCard';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import {useNavigation} from '@react-navigation/native';
//import CircularBtn from "../../../utils/CircularBtn";
import AllMines from '../../../../components/AllMines/AllMines';

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <SearchBar />
      <RateCard />

      <ScrollView>
        {/*Please pass props to below component */}
        {/* <TruckDriverCard
          product="moorang"
          customer="puneet pandey"
          rate={40}
          rating={3.4}
          approx={1.8}
          address="450/151 lane opp to sangan , muftiganj,hussainabad , lko"
        />
        <TruckDriverCard
          product="moorang"
          customer="puneet pandey"
          rate={40}
          rating={3.4}
          approx={1.8}
          address="450/151 lane opp to sangan , muftiganj,hussainabad , lko"
        />
        <TruckDriverCard
          product="moorang"
          customer="puneet pandey"
          rate={40}
          rating={3.4}
          approx={1.8}
          address="450/151 lane opp to sangan , muftiganj,hussainabad , lko"
        />
        <TruckDriverCard
          product="moorang"
          customer="puneet pandey"
          rate={40}
          rating={3.4}
          approx={1.8}
          address="450/151 lane opp to sangan , muftiganj,hussainabad , lko"
        />
        <TruckDriverCard
          product="moorang"
          customer="puneet pandey"
          rate={40}
          rating={3.4}
          approx={1.8}
          address="450/151 lane opp to sangan , muftiganj,hussainabad , lko"
        />
        <TruckDriverCard
          product="moorang"
          customer="puneet pandey"
          rate={40}
          rating={3.4}
          approx={1.8}
          address="450/151 lane opp to sangan , muftiganj,hussainabad , lko"
        />
        <TruckDriverCard
          product="moorang"
          customer="puneet pandey"
          rate={40}
          rating={3.4}
          approx={1.8}
          address="450/151 lane opp to sangan , muftiganj,hussainabad , lko"
        /> */}
        <AllMines driver={true} />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          width: Dimensions.get('window').width,
          //backgroundColor: "red",
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 0,
        }}>
        <TouchableOpacity
          style={styles.BtnContainer}
          onPress={() => {
            navigation.navigate('AddLoad');
          }}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
const styles = StyleSheet.create({
  BtnContainer: {
    height: 60,
    width: 60,
    //paddingHorizontal: 15,
    borderRadius: 30,
    backgroundColor: '#00cce5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 35,
  },
});

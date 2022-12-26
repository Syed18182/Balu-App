import {View, Text} from 'react-native';
import React from 'react';
import MineHistoryCard from '../../../components/MineHistoryCard/MineHistoryCard';

const History = () => {
  return (
    <View>
      <MineHistoryCard
        mName="Aquib Mine"
        date="11/09/2022"
        time="10:58am"
        dName="aquib rizvi"
        tNum="up32es9856"
        dNum={9874123650}
      />
    </View>
  );
};

export default History;

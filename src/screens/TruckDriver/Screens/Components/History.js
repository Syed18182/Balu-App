import {ScrollView, View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MineHistoryCard from '../../../../components/MineHistoryCard/MineHistoryCard';

const History = () => {
  return (
    <ScrollView>
      <MineHistoryCard
        mName="aquib fields"
        date="06/10/2022"
        time="07:28 pm"
        dName="shiva"
        tNum="up32ed8547"
        dNum={6386958426}
      />
    </ScrollView>
  );
};

export default History;

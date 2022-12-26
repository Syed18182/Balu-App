import {ScrollView, Text} from 'react-native';
import React from 'react';
//import CustomerDealCard from '../../../Customer/tabs/CustomerDealCard';
import YourOrdersCard from '../../../../components/YourOrdersCard/YourOrdersCard';

const YourOrders = () => {
  return (
    <ScrollView>
      <YourOrdersCard />
    </ScrollView>
  );
};

export default YourOrders;

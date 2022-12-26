import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
// import CustomerUi from '../../../components/CustomerUi';
import MessagesComponent from '../../../components/Messages/MessagesComponent';

const bajjan = require('../assets/Customer/bajjan.png');

const data = {
  user: [
    {
      photo: bajjan,
      name: 'Bajjan Chaudhary',
      lastmessage: 'Last rate yhi hai',
      time: '17 OCT 01:55',
      id: 1,
    },
    {
      photo: bajjan,
      name: 'Sumit Kapoor',
      lastmessage: 'Gaadi kahan pahuchi hai??',
      time: '18 OCT 17:05',
      id: 2,
    },
    {
      photo: bajjan,
      name: 'Ajay Chaudhary',
      lastmessage: 'Thank you ',
      time: '21 OCT 12:55',
      id: 3,
    },
  ],
};

const Message = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.Container}>
          <MessagesComponent data={data} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    borderRadius: 10,

    marginVertical: 50,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
});
export default Message;

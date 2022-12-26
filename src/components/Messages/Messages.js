import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Colors from '../../helper/config/Colors';

const Messages = props => {
  return (
    <View>
      <View style={styles.enyc}>
        <Text style={styles.textEncy}>end-to-end encrypted</Text>
      </View>
      {props.data.messages.map(v => {
        return (
          <View>
            {v.send ? (
              <View style={styles.mSendContainer}>
                <View style={styles.mSend}>
                  <Text style={styles.text}>{v.send}</Text>
                  <Text style={styles.time}>06:03PM</Text>
                </View>
              </View>
            ) : null}
            {v.recieve ? (
              <View style={styles.mReceiveContainer}>
                <View style={styles.mReceive}>
                  <Text style={styles.text}>{v.recieve}</Text>
                  <Text style={styles.time}>06:03PM</Text>
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  mReceive: {
    backgroundColor: Colors.white,
    width: '70%',
    borderRadius: 8,
    marginLeft: 10,
  },
  mSend: {
    backgroundColor: Colors.white,
    width: '70%',
    textAlign: 'right',
    borderRadius: 8,
    marginRight: 10,
  },
  mReceiveContainer: {
    //backgroundColor: "yellow",
    marginTop: 5,
  },
  mSendContainer: {
    //backgroundColor: "yellow",
    alignItems: 'flex-end',
    marginTop: 5,
  },
  textSend: {
    margin: 10,
  },
  text: {
    color: Colors.black,
    width: '90%',
    padding: 3,
  },
  time: {
    color: Colors.text,
    fontSize: 10,
    position: 'absolute',
    bottom: 1,
    right: 2,
  },
  enyc: {
    alignItems: 'center',
  },
  textEncy: {
    color: Colors.white,
    backgroundColor: '#a6a6a6',
    paddingHorizontal: 10,
    paddingVertical: 2.5,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 5,
  },
});

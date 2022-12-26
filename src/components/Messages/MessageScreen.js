import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../helper/config/Colors';
import {useNavigation, StackActions} from '@react-navigation/native';
import Messages from './Messages';

const msg = {
  messages: [
    {send: 'hello hiii'},

    {
      send: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {recieve: 'Tell more about yourself buddy, how you'},
  ],
};

const MessageScreen = () => {
  const [Message, setMessage] = useState('');
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: Colors.third}}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(StackActions.pop(1));
          }}>
          <Ionicons
            name="arrow-back"
            size={28}
            style={styles.icon}
            color={Colors.white}
          />
        </TouchableOpacity>
        <Image
          style={styles.profile}
          source={{
            uri: 'https://www.goodmorningimagesdownload.com/wp-content/uploads/2020/01/Girl-Image-Dp-Images-8.jpg',
          }}
        />
        <Text style={styles.headerText}>Moksh</Text>
      </View>
      <ScrollView>
        <Messages data={msg} />
      </ScrollView>
      <View style={styles.InputContainer}>
        <View style={styles.TextInputContainer}>
          <TextInput
            style={styles.TextInput}
            placeholder="Message"
            multiline={true}
            onChangeText={e => {
              setMessage(e);
            }}
            onContentSizeChange={() => {
              console.log('Increase');
            }}
          />
        </View>
        <View style={styles.TouchContainer}>
          <TouchableOpacity
            style={styles.Send}
            onPress={() => {
              console.log('Message sent');
            }}>
            <Ionicons name="send" color={Colors.white} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    paddingVertical: 8,
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  TextInputContainer: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    height: 40,
    width: '88%',
    justifyContent: 'center',
  },
  TextInput: {
    borderColor: Colors.white,
    borderRadius: 20,

    flex: 1,
  },
  InputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: "red",
    position: 'absolute',
    bottom: 10,
    width: Dimensions.get('window').width,
  },
  Send: {
    backgroundColor: Colors.primary,
    padding: 2,
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'capitalize',
    marginLeft: 10,
  },
  TouchContainer: {
    width: '10%',
  },
});

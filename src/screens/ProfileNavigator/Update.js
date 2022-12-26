import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import AddButton from '../../components/AddButton';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../../helper/config/Colors';
import TextInputMultiline from '../../components/TextInputMultiline';
import {StackActions, useNavigation} from '@react-navigation/native';

const Pulldata3 = data => {
  console.log(data);
};

const Update = ({route}) => {
  const navigation = useNavigation();
  const handleUpdate = () => {
    console.log('Update');
    navigation.replace('CusFooter');
  };
  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={styles.ImageContainer}>
          <View>
            <Image source={route.params} style={styles.profileImage} />
            <TouchableOpacity style={styles.cameraContainer}>
              <Fontisto name="camera" color="#fff" size={17} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Container}>
          <Text style={styles.text}>Name</Text>
          <TextInput value="Ajay Singh" style={styles.textInput} />
          <Text style={styles.text}>Mobile No</Text>
          <TextInput value="9445983862" style={styles.textInput} />

          <>
            <Text style={styles.text}>Alternate No</Text>
            <TextInput value="9445983862" style={styles.textInput} />
          </>
        </View>
        <Image
          style={styles.Image}
          source={{
            uri: 'https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png',
          }}
        />
        <View style={styles.Container}>
          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>State</Text>
              <TextInput style={styles.textInput1} value="Uttar Pradesh" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.text}>City</Text>
              <TextInput style={styles.textInput1} value="Lucknow" />
            </View>
          </View>
          <Text style={styles.text}>Area</Text>
          <View style={styles.MultiLine}>
            <TextInputMultiline
              func={Pulldata3}
              value="5/750, Sector 6, Gomti Nagar , Lko, UP 22610,India"
            />
          </View>

          <View style={styles.aadhaarContainer}>
            <View>
              <Text style={styles.text}>upload aadhar card</Text>
              <Image
                style={styles.Image}
                source={{
                  uri: 'https://indiadarpan.com/wp-content/uploads/2018/10/Aadhaar-Card-sample.png',
                }}
              />
              <TouchableOpacity style={styles.Btn}>
                <AddButton text="kindly click" />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.text}>upload address of aadhar card</Text>
              <Image
                style={styles.Image}
                source={{
                  uri: 'https://indiadarpan.com/wp-content/uploads/2018/10/Aadhaar-Card-sample.png',
                }}
              />
              <TouchableOpacity style={styles.Btn}>
                <AddButton text="kindly click" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={handleUpdate} style={styles.BtnContainer}>
          <AddButton text="Update Profile" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Update;

const styles = StyleSheet.create({
  Container: {flex: 1, color: Colors.black},
  ImageContainer: {
    //backgroundColor: "red",
    alignItems: 'center',
    marginTop: 20,
  },
  BtnContainer: {
    width: '100%',
    bottom: 0,
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: '#FFF',
  },
  cameraContainer: {
    position: 'absolute',
    backgroundColor: '#00488d',
    padding: 8,
    bottom: 0,
    right: 2,
    borderRadius: 15,
  },
  text: {
    color: '#434d59',
    fontSize: 15,
    marginVertical: 5,
    marginHorizontal: 5,
    textTransform: 'capitalize',
  },
  textInput: {
    borderRadius: 10,
    color: '#434d59',
    fontSize: 16,
  },
  textInput1: {
    borderRadius: 10,
    color: '#434d59',
    fontSize: 16,
  },
  inputContainer: {
    width: '45%',
  },
  Image: {
    height: 225,
    width: '100%',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addBtnText: {
    color: '#fff',
    fontSize: 16,
  },
  addBtn: {
    backgroundColor: '#00488c',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  MultiLine: {
    marginBottom: 10,
  },
  aadhaarContainer: {
    marginBottom: 10,
  },
  Btn: {
    marginHorizontal: 10,
    padding: 2,
    backgroundColor: '#00488d',
    borderRadius: 10,
  },
});

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const CurrentLoadCard = props => {
  const navigation = useNavigation();
  const handleDel = () => {
    Alert.alert('Delete', 'Are You Sure?', [
      {
        title: 'Cancle',
      },
      {title: 'Delete', onPress: console.log('Deleted')},
    ]);
  };
  return (
    <View style={styles.Container}>
      <View style={styles.Container1}>
        <Image
          source={{
            uri: 'https://www.sixdegreesnews.org/wp-content/uploads/2017/12/sand_mining.png',
          }}
          style={styles.Image}
        />
        <View style={styles.left}>
          <Text style={styles.Id}>Load ID:{2559}</Text>

          <TouchableOpacity>
            <View style={styles.Phone}>
              <Feather name="phone-outgoing" size={18} color="#00488d" />

              <Text style={styles.Text}>7007274325</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.Phone}>
            <MaterialCommunityIcons
              name="dump-truck"
              size={20}
              color="#00488d"
            />
            <Text style={styles.Text}>UP78FX2861</Text>
          </View>
        </View>
        <View style={styles.Btns}>
          <TouchableOpacity
            style={styles.BtnEdi}
            onPress={() => {
              navigation.navigate('AddLoad');
            }}>
            <View style={styles.btnrow}>
              <MaterialIcons name="edit" size={26} color="#fff" />
              <Text style={styles.BtnText}>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnDel} onPress={handleDel}>
            <View style={styles.btnrow}>
              <MaterialCommunityIcons
                name="delete-forever-outline"
                size={26}
                color="white"
              />
              <Text style={styles.BtnText}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.below}>
        <View style={styles.Prod}>
          <MaterialCommunityIcons name="dump-truck" size={30} color="#00488d" />
          <Text style={styles.Prodtext}>Moorang</Text>
        </View>
        <Text style={props.rate ? styles.rate : null}>{props.rate}</Text>
      </View>
    </View>
  );
};

export default CurrentLoadCard;
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    marginTop: 10,

    padding: 10,
  },
  Container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Image: {
    height: (Dimensions.get('window').height * 15) / 100,
    width: (Dimensions.get('window').width * 30) / 100,
    borderRadius: 10,
  },
  Id: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#434d59',
  },
  Phone: {
    flexDirection: 'row',
    //backgroundColor: "red",
  },
  Text: {
    fontSize: 15,
    marginLeft: 10,
    //backgroundColor: "red",
  },
  Btns: {
    //flexDirection: "row"
  },
  BtnDel: {
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 8,
    width: 80,
    marginTop: 10,
  },
  BtnText: {
    color: '#fff',
    fontSize: 15,
  },
  BtnEdi: {
    padding: 5,
    backgroundColor: '#00cce5',
    borderRadius: 8,
    width: 80,
    paddingLeft: 12,
  },
  left: {
    textAlign: 'right',
  },
  btnrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  below: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Prod: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Prodtext: {
    color: '#434d59',
    textTransform: 'capitalize',
  },
  rate: {
    backgroundColor: '#00488d',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#fff',
    borderRadius: 6,
    textTransform: 'capitalize',
  },
});

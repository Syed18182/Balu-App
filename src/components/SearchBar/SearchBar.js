import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import Colors from '../../helper/config/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  const [location, setLocation] = useState('Location');
  let data = 'Dubai';
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.locationContainer}>
        <Ionicons name="md-location-sharp" color={Colors.text} size={16} />
        <Text style={styles.text}>Lucknow,Uttar Pradesh</Text>
      </View>
      <View style={styles.SearchContainer}>
        <View style={styles.IconContainer}>
          <Feather
            name="search"
            size={22}
            style={styles.Icon}
            color={Colors.primary}
          />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Search here"
            maxLength={15}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  SearchContainer: {
    flexDirection: 'row',
    padding: 2,
    borderRadius: 8,
    borderWidth: 1,
  },

  textInput: {
    borderColor: '#fff',
  },

  location: {
    position: 'absolute',
  },
  IconContainer: {
    justifyContent: 'center',
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  searchContainer: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Colors.text,
    fontSize: 15,
  },
});

export default SearchBar;

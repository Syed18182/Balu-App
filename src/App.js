import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
//import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation/Navigation';
import {setCustomTextInput, setCustomText} from 'react-native-global-props';

const App = () => {
  const customTextInputProps = {
    style: {
      borderWidth: 1,
      borderColor: 'gray',

      paddingHorizontal: 10,
      backgroundColor: 'white',
    },
  };

  setCustomTextInput(customTextInputProps);
  const customTextProps = {
    style: {
      fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
    },
  };

  setCustomText(customTextProps);
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  Text: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 50,
  },
});

export default App;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Background: {
    //backgroundColor: "#000080",
    flex: 1,
    //marginTop: 20,
  },
  BaluLogo: {
    marginTop: '20%',
    borderRadius: 100,
    height: 150,
    width: 150,
    position: 'relative',
  },
  // InputBox: {
  //   width: "90%",
  // },
  Align: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  RegisterText: {
    margin: 20,
    fontSize: 30,
    color: '#FFF',
    fontWeight: '700',
  },
  TextInput: {
    borderColor: '#d9d2e9',
    borderWidth: 2,
    height: 56,
    width: '80%',
    margin: 12,
    borderRadius: 14,
    padding: 10,
    backgroundColor: '#FFF',
  },
  Horizontal: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: 'red',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  CheckboxText: {
    color: '#FFF',
    marginLeft: 10,
  },
  Highlight: {
    fontSize: 17,
    fontWeight: '700',
    color: '#d9d2e9',
  },
  RegisterButton: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#00cce5',
    borderRadius: 8,
    padding: 10,
  },
  TextRegisterButton: {
    //fontFamily: "",
    fontSize: 25,
    fontWeight: '900',
    color: '#FFF',
  },
});

export default styles;

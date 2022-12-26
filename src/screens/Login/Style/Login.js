import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Background: {
    flex: 1,

    // backgroundColor:"red",
  },
  BaluLogo: {
    marginTop: '20%',
    borderRadius: 100,
    height: 150,
    width: 150,
    position: 'relative',
  },
  Align: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginText: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: '700',
    margin: 20,
  },
  TextInput: {
    borderColor: '#d9d2e9',
    borderWidth: 2,
    height: 56,
    width: '80%',
    margin: 12,
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#FFF',
  },
  Horizontal: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '10%',
    alignItems: 'center',
    //backgroundColor: 'red',
    alignSelf: 'flex-start',
  },
  CheckboxText: {
    color: '#FFF',
    //marginLeft: 10,
  },
  LoginButton: {
    //backgroundColor: "#87CEFF",
    //borderRadius:50,
    //height:50,
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#00cce5',
    borderRadius: 8,
    padding: 10,
    //marginTop:"20%",
    //  justifyContent:"center",
    //  alignItems:"center"
  },
  TextLoginButton: {
    fontFamily: '',
    fontSize: 25,
    fontWeight: '900',
    color: '#FFF',
  },
  Highlight: {
    fontSize: 17,
    fontWeight: '700',
    color: '#d9d2e9',
  },
});

export default styles;

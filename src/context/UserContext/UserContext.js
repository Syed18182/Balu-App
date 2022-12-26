import {View, Text} from 'react-native';
import React, {useState} from 'react';

const UserContext = props => {
  const [User, setUser] = useState('Customer');
  setUser(props);
  console.log(User + 'from context');
};

export default UserContext;

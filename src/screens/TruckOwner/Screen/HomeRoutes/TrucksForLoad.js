import {View, Text} from 'react-native';
import React from 'react';
import TrucksCard from './Utils/TrucksCard';

const data = [
  {
    dName: 'gulbinder singh tomar',
    tName: 'tata',
    tStatus: 'Verify OTP',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'harinder kumar singh ',
    tName: 'Ashok',
    tStatus: 'Verify OTP',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'manpreet sodi',
    tName: 'tata',
    tStatus: 'Verify OTP',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'vijay kumar',
    tName: 'Ashok',
    tStatus: 'Find Customer',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'shaka kumar',
    tName: 'tata',
    tStatus: 'Verify OTP',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'jamesh watson',
    tName: 'Ashok',
    tStatus: 'available',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'virat kohli',
    tName: 'Ashok',
    tStatus: 'Find Customer',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'juginder sikka',
    tName: 'tata',
    tStatus: 'Verify OTP',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'manveer bagga',
    tName: 'Ashok',
    tStatus: 'Find Customer',
    tNum: 'hr32tr7894',
  },
  {
    dName: 'paras singh',
    tName: 'tata',
    tStatus: 'Verify OTP',
    tNum: 'hr32tr7894',
  },
];
const pullData = rNum => {
  let Rname = rNum;
  console.log(Rname);
};
const TrucksForLoad = () => {
  return (
    <View>
      <TrucksCard forLoad={true} data={data} func={pullData} />
    </View>
  );
};

export default TrucksForLoad;

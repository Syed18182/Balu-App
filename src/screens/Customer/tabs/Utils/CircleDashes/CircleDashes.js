import { View, Text } from 'react-native'
import React from 'react'
import Circle from './Circle'
import Dash from './Dash'

const CircleDashes = (props) => {
  return (
    <View>
      <Circle height={20} width={20} color="green" location={props.start}/>
      <Dash bottom={10} />
      <Dash />
      <Circle height={20} width={20} color="red" location={props.end}/>
      
    </View>
  )
}

export default CircleDashes
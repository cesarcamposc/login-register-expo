import { Text, View } from 'react-native'

import LoginScreen from '../screens/LoginScreen'
import React from 'react'
import RegisterScreen from '../screens/RegisterScreen'

export default function index() {
  return (
    <View>
      {/* <LoginScreen/> */}
      <RegisterScreen/>
    </View>
  )
}
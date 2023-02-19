import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/home'
import type { StackParams } from './types'

const NavigationStack = createNativeStackNavigator<StackParams>()

const AppStack = () => {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator initialRouteName="Home">
        <NavigationStack.Screen name="Home" component={Home} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack

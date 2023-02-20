import React from 'react'
import { DefaultTheme, NavigationContainer, type Theme } from '@react-navigation/native'
import { type NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/home'
import { setNavigator } from './apis'
import type { StackParams } from './types'

const NavigationStack = createNativeStackNavigator<StackParams>()
const NavigationTheme: Theme = DefaultTheme
const NavigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

const AppStack = () => {
  return (
    <NavigationContainer theme={NavigationTheme} ref={setNavigator}>
      <NavigationStack.Navigator screenOptions={NavigationOptions} initialRouteName="Home">
        <NavigationStack.Screen name="Home" component={Home} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack

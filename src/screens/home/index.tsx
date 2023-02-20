import React, { type FC } from 'react'
import { Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { StackParams } from '@core/navigation/types'

type Props = NativeStackScreenProps<StackParams, 'Home'>

const Home: FC<Props> = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Hello</Text>
    </View>
  )
}

export default Home

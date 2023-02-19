import React, { type FC } from 'react'
import { Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { StackParams } from '@core/navigation/types'

type Props = NativeStackScreenProps<StackParams, 'Home'>

const Home: FC<Props> = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}

export default Home

import React, { type FC } from 'react'
import { Button, Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { StackParams } from '@core/navigation/types'
import { useLanguage } from '@hooks/useLanguage'

type Props = NativeStackScreenProps<StackParams, 'Home'>

const Home: FC<Props> = ({ navigation }) => {
  const [t] = useLanguage()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{t('hello')}</Text>
      <Button onPress={() => navigation.navigate('Second', { data: 'Data' })} title={t('navigate')} />
    </View>
  )
}

export default Home

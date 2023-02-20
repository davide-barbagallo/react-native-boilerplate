import React, { type FC } from 'react'
import { Button, Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { StackParams } from '@core/navigation/types'
import { useLanguage } from '@hooks/useLanguage'
import { useStyles } from '@hooks/useStyles'
import { styles as homeStyle } from './styles'

type Props = NativeStackScreenProps<StackParams, 'Home'>

const Home: FC<Props> = ({ navigation }) => {
  const [t] = useLanguage()
  const styles = useStyles(homeStyle)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('hello')}</Text>
      <Button onPress={() => navigation.navigate('Second', { data: 'Data' })} title={t('navigate')} />
    </View>
  )
}

export default Home

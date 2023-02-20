import React, { type FC } from 'react'
import { Button, Text, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { StackParams } from '@core/navigation/types'
import { useLanguage } from '@hooks/useLanguage'
import { useStyles } from '@hooks/useStyles'
import { styles as secondStyles } from './styles'

type Props = NativeStackScreenProps<StackParams, 'Second'>

const Second: FC<Props> = ({ navigation, route }) => {
  const [t] = useLanguage()
  const styles = useStyles(secondStyles)

  return (
    <View style={styles.container}>
      <Text>{t('hello')}</Text>
      <Text>{route.params.data}</Text>
      <Button onPress={() => navigation.navigate('Home')} title={t('navigate')} />
    </View>
  )
}

export default Second

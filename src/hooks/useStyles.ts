import { useMemo } from 'react'
import { type StyleSheet, useColorScheme, useWindowDimensions } from 'react-native'
import { type Theme, makeTheme } from '@core/theme'

export const useStyles = <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
  styles: (theme: Theme) => T
) => {
  const scheme = useColorScheme()
  const dimensions = useWindowDimensions()

  return useMemo(() => styles(makeTheme(scheme, dimensions)), [styles, scheme, dimensions])
}

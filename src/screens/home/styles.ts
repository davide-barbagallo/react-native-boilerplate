import { StyleSheet } from 'react-native'
import type { Theme } from '@core/theme'

export const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    text: {
      fontSize: theme.fonts.sizes.sm,
      color: '#002145',
    },
  })
}

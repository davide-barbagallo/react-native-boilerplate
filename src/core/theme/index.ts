import type { ColorSchemeName, ScaledSize } from 'react-native/types'
import { colors } from './colors'
import { FONT_FAMILIES, FONT_SIZES } from './fonts'

export const makeTheme = (scheme: ColorSchemeName, dimensions: ScaledSize) => ({
  scheme,
  dimensions,
  colors,
  fonts: {
    family: FONT_FAMILIES,
    sizes: FONT_SIZES,
  },
})

export type Theme = ReturnType<typeof makeTheme>

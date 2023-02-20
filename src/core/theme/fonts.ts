import type { TextStyle } from 'react-native/types'
import { fontSizeScale } from '@utils/fonts'

export type FontWeight = 'regular'

export type FontSizes = 'sm' | 'md'

export const FONT_SIZES: Record<FontSizes, number> = {
  sm: fontSizeScale(14),
  md: fontSizeScale(16),
}

export const FONT_FAMILIES: Record<FontWeight, string> = {
  regular: 'Roboto',
}

export const FONT_STYLES: Record<string, TextStyle> = {}

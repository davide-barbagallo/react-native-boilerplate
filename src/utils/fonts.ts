import { Dimensions, Platform, StatusBar } from 'react-native'

const { height, width } = Dimensions.get('window')

export const isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (height === 780 ||
      width === 780 ||
      height === 812 ||
      width === 812 ||
      height === 844 ||
      width === 844 ||
      height === 896 ||
      width === 896 ||
      height === 926 ||
      width === 926)
  )
}
const standardLength = width > height ? width : height
const offset = width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight || 0

const deviceHeight = isIphoneX() || Platform.OS === 'android' ? standardLength - offset : standardLength

export const fontSizeScale = (fontSize: number, standardScreenHeight = 640) => {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight
  if (heightPercent > fontSize) {
    return fontSize
  }
  return Math.round(heightPercent)
}

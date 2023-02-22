import React from 'react'
import 'react-native'
import { render } from '@testing-library/react-native'
import App from '../App'

jest.mock('i18n-js', () => {
  return jest.requireActual('i18n-js/dist/require/index')
})
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native')
  RN.NativeModule = {
    SettingsManager: {
      settings: {
        AppleLocale: 'it-IT',
      },
    },
    I18nManager: {
      localeIdentifier: 'it-IT',
    },
  }
  RN.unstable_batchedUpdates = jest.fn()
})

it('renders correctly', () => {
  render(<App />)
  expect(1).toBe(1)
})

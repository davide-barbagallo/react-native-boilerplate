import React, { type FC, type ReactNode, createContext } from 'react'
import { NativeModules, Platform } from 'react-native'
import { I18n } from 'i18n-js'
import en from './values/en'

const languages = { en }

export type DeepKeys<T, S extends string> = T extends Record<string, unknown>
  ? S extends `${infer I1}.${infer I2}`
    ? I1 extends keyof T
      ? `${I1}.${DeepKeys<T[I1], I2>}`
      : keyof T & string
    : S extends keyof T
    ? `${S}`
    : keyof T & string
  : ''

export type LanguagesType = keyof typeof languages
export type LocalizationKeys = keyof typeof en
export type CallbackTranslation = <S extends string>(
  scope: DeepKeys<typeof en, S>,
  options?: Record<string, unknown>
) => string
export type CallbackSetTranslation = (language: LanguagesType) => void

interface LocalizationContextProps {
  t: CallbackTranslation
  setLocale: CallbackSetTranslation
}

export const sanitizeLanguage = (code: string = '', defaultLanguage: string = '') => {
  if (code) {
    const splitOnDash = code.split('-')
    if (splitOnDash.length !== 1) {
      return splitOnDash[0]
    }
    const splitOnUnderscore = code.split('_')
    if (splitOnUnderscore.length !== 1) {
      return splitOnUnderscore[0]
    }
  }
  return defaultLanguage
}

export const retrieveLatestLanguage = (): string => {
  const language = 'en'
  if (Platform.OS === 'ios') {
    const iosLang =
      NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0]
    return sanitizeLanguage(iosLang, language)
  }
  if (Platform.OS === 'android') {
    const androidLang = NativeModules.I18nManager.localeIdentifier
    return sanitizeLanguage(androidLang, language)
  }
  return language
}

const i18n = new I18n(languages, {
  defaultLocale: retrieveLatestLanguage(),
  locale: retrieveLatestLanguage(),
})

const providerOptions: LocalizationContextProps = {
  t: (scope, options = {}) => i18n.t(scope, options),
  setLocale: (lang: LanguagesType) => (i18n.locale = lang),
}

export const LocalizationContext = createContext<LocalizationContextProps>(providerOptions)

export const LocalizationProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <LocalizationContext.Provider value={providerOptions}>{children}</LocalizationContext.Provider>
)

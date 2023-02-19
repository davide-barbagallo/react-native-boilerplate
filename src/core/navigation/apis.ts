import { CommonActions } from '@react-navigation/core'
import type { NavigationContainerRef } from '@react-navigation/core'
import { StackActions } from '@react-navigation/native'
import type { StackParams } from '@core/navigation/types'

let navigator: NavigationContainerRef<StackParams> | null = null

export const setNavigator = (nav: NavigationContainerRef<StackParams>): void => {
  navigator = nav
}

export const getNavigator = (): NavigationContainerRef<ReactNavigation.RootParamList> | null => navigator

export const navigateTo = <T extends keyof StackParams>(name: T, params?: StackParams[T], key?: string): void => {
  navigator?.dispatch(CommonActions.navigate({ name, params, key }))
}

export const pushTo = <T extends keyof StackParams>(name: T, params?: StackParams[T]): void => {
  navigator?.dispatch(StackActions.push(name, params))
}

export const replace = <T extends keyof StackParams>(
  name: T,
  params?: StackParams[T],
  source?: string,
  target?: string
): void => {
  navigator?.dispatch({ ...StackActions.replace(name, params), source, target })
}

export const reset = <T extends keyof StackParams>(name: T, params?: StackParams[T]): void => {
  navigator?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name, params }],
    })
  )
}

export const back = () => {
  if (navigator?.canGoBack()) {
    navigator.goBack()
  }
}

export const navigateBack = (num?: number): void => navigator?.dispatch(StackActions.pop(num))

export const navigateToTop = (): void => navigator?.dispatch(StackActions.popToTop())

export const getCurrentRoute = (): string | undefined => navigator?.getCurrentRoute()?.name

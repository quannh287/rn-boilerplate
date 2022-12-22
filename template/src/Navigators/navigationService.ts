import { createRef } from 'react'

import { CommonActions, NavigationContainerRef, StackActions } from '@react-navigation/native'
import { RootStackParamList } from '@Navigators/screenTypes'

export const navigationRef = createRef<NavigationContainerRef<RootStackParamList>>()

export function navigateToScreen<RouteName extends keyof RootStackParamList>(
  ...arg: undefined extends RootStackParamList[RouteName]
    ? [screen: RouteName] | [screen: RouteName, params?: RootStackParamList[RouteName]]
    : [screen: RouteName, params?: RootStackParamList[RouteName]]
) {
  navigationRef.current?.navigate(arg[0] as any, arg.length > 1 ? arg[1] : undefined)
}

export function pushScreen<RouteName extends keyof RootStackParamList>(
  ...arg: undefined extends RootStackParamList[RouteName]
    ? [screen: RouteName] | [screen: RouteName, params?: RootStackParamList[RouteName]]
    : [screen: RouteName, params: RootStackParamList[RouteName]]
) {
  navigationRef.current?.dispatch(StackActions.push(arg[0] as any, arg.length > 1 ? arg[1] : undefined))
}

export function replaceScreen<RouteName extends keyof RootStackParamList>(
  ...arg: undefined extends RootStackParamList[RouteName]
    ? [screen: RouteName] | [screen: RouteName, params?: RootStackParamList[RouteName]]
    : [screen: RouteName, params: RootStackParamList[RouteName]]
) {
  navigationRef.current?.dispatch(StackActions.replace(arg[0] as any, arg.length > 1 ? arg[1] : undefined))
}

export function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack)
}

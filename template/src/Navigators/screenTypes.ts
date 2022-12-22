import { StackScreenProps as RNStackScreenProps } from '@react-navigation/stack'

export enum APP_SCREEN {
  LOGIN = 'LOGIN',
}

export type RootStackParamList = {
  [APP_SCREEN.LOGIN]: undefined
}

export type StackScreenProps<T extends keyof RootStackParamList> = RNStackScreenProps<RootStackParamList, T>

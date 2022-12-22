import { TextInputProps as RNTextInputProps } from 'react-native'
import { UseFormTrigger } from 'react-hook-form'

export interface ITextInputProps extends RNTextInputProps {
  /**
   * Format text before call onChangeText function
   * @default undefined
   */
  rxFormat?: RegExp

  /**
   * Call trigger react hook form
   * @default undefined
   */
  trigger?: UseFormTrigger<any>
}

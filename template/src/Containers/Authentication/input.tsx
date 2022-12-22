import { View, Text } from 'react-native'
import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { FormLoginType } from '@Models/Authentication'
import { TextInput } from '@Components/index'

export interface IInputFormProps {
  name: string
  defaultValue?: string
}

const InputForm = ({ name, defaultValue = '' }: IInputFormProps) => {
  const { trigger, getValues } = useFormContext<FormLoginType>()
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    defaultValue,
  })

  return (
    <View>
      <TextInput
        ref={field.ref}
        trigger={trigger}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        defaultValue={(getValues() as Record<string, any>)[name as string]}
      />
    </View>
  )
}

export default InputForm

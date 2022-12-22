import { NativeSyntheticEvent, StyleSheet, TextInput as RNTextInput, TextInputFocusEventData, View } from 'react-native'
import React, { ForwardedRef, forwardRef } from 'react'
import { ITextInputProps } from '@Components/TextInput/type'
import { sizeScale } from '@Commons/Scale'

const TextInput = forwardRef(
  ({ onChangeText, rxFormat, editable, onFocus, onBlur }: ITextInputProps, ref: ForwardedRef<RNTextInput>) => {
    const handleTextChange = (text: string) => {
      const actualText = rxFormat ? text.replace(rxFormat, '') : text
      if (onChangeText) {
        onChangeText(actualText)
      }
    }
    const handleFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (onFocus) {
        onFocus(event)
      }
    }
    const handleBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (onBlur) {
        onBlur(event)
      }
    }

    return (
      <RNTextInput
        ref={ref}
        onChangeText={handleTextChange}
        editable={editable}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.container}
      />
    )
  },
)

export default TextInput

const styles = StyleSheet.create({
  container: {
    color: '#000',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#464646',
    height: sizeScale(36),
  },
})

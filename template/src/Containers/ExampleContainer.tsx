import { View, Text } from 'react-native'
import React from 'react'

export interface IExampleContainerProps {}

const ExampleContainer = (props: IExampleContainerProps) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text>Example Container</Text>
    </View>
  )
}

export default ExampleContainer

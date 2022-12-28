import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface ILoginScreenProps {}

const LoginScreen = (props: ILoginScreenProps) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <Text>Login Screen</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

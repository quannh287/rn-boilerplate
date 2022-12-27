import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Config from 'react-native-config';
import { BASE_URL } from '@Config/index';

export interface ILoginScreenProps {}

const LoginScreen = (props: ILoginScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Login Screen
        {Config.ENVIRONMENT}
        {BASE_URL}
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

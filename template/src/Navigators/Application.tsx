import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './utils';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { APP_SCREEN } from '@Navigators/screenTypes';
import { LoginScreen } from '@Features/Authentication';

const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={'dark-content'} />

        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Main'}>
          <Stack.Screen name={APP_SCREEN.LOGIN} component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default ApplicationNavigator;

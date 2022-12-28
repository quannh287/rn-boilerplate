import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './utils';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { APP_SCREEN } from '@Navigators/screenTypes';
import { LoginScreen } from '@Features/Authentication';
import { useTheme } from '@Theme/index';

const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  const theme = useTheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef} theme={theme}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Main'}>
          <Stack.Screen name={APP_SCREEN.LOGIN} component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default ApplicationNavigator;

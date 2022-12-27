import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExampleContainer } from 'src/Features/index';

const Tab = createBottomTabNavigator();

// @refresh reset
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ExampleContainer}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

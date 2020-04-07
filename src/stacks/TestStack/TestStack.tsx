import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../../navigation/navigationConstants';
import TestScreen from '../../screens/TestScreen';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Test2Screen from '../../screens/Test2Screen';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();
export const TestStack = () => {
  return (
    <Tab.Navigator style={{paddingTop: 30, backgroundColor: 'white'}}>
      <Tab.Screen
        name={screens.TEST_SCREEN}
        options={{title: 'Test 1'}}
        component={TestScreen}
      />
      <Tab.Screen
        name={screens.TEST_2_SCREEN}
        options={{title: 'Test 2'}}
        component={Test2Screen}
      />
    </Tab.Navigator>
  );
};
export default TestStack;

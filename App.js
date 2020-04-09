/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeStack from './src/stacks/HomeStack';
import TestStack from './src/stacks/TestStack';
import LoginStack from './src/stacks/LoginStack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="HomeStack">
          <Stack.Screen
            screenOptions={{
              header: null,
              headerTitle: null,
            }}
            name="te"
            component={HomeStack}
          />
          <Stack.Screen name="TestStack" component={TestStack} />
          <Stack.Screen name="LoginStack" component={LoginStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

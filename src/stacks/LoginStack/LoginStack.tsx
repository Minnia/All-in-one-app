import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../../navigation/navigationConstants';
import LoginScreen from '../../screens/LoginScreen';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{title: null}}
        name={screens.LOGIN_SCREEN}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;

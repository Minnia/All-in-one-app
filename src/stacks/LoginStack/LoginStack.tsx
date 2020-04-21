import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../../navigation/navigationConstants';
import LoginScreen from '../../screens/LoginScreen';
import SignUpScreen from '../../screens/SignUpScreen';

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        options={{title: null}}
        name={screens.LOGIN_SCREEN}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          title: null,
          headerShown: null,
          headerBackTitleVisible: false,
        }}
        name={screens.SIGN_UP_SCREEN}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;

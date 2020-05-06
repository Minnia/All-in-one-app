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
import LoginStack from './src/stacks/LoginStack';
import {stacks} from './src/navigation/navigationConstants';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={stacks.LOGIN}>
      <Stack.Screen
        screenOptions={{
          header: null,
          headerTitle: null,
        }}
        component={HomeStack}
        name={stacks.CAROUSEL}
      />
      <Stack.Screen name={stacks.LOGIN} component={LoginStack} />
    </Stack.Navigator>
  );
};

function DrawerContainer() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={LoginStack} />
      <Drawer.Screen name={stacks.CAROUSEL} component={HomeStack} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <>
      <NavigationContainer>
        <DrawerContainer />
      </NavigationContainer>
    </>
  );
};

export default App;

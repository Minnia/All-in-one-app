import React from 'react';

import CarouselScreen from '../../screens/CarouselScreen';
import {screens, stacks} from '../../navigation/navigationConstants';
import ViewScreen from '../../screens/ViewScreen';
import TestScreen from '../../screens/TodoListScreen';
import TestStack from '../TestStack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CarouselStack from '../CarouselStack';
import LoginStack from '../LoginStack';

const Tab = createBottomTabNavigator();

export const HomeStack = () => {
  return (
    <Tab.Navigator initialRouteName={screens.CAROUSEL}>
      <Tab.Screen
        options={{title: 'Carousel'}}
        name={'CarouselStack'}
        component={CarouselStack}
      />
      <Tab.Screen
        options={{title: 'Test'}}
        name={stacks.TEST}
        component={TestStack}
      />
      <Tab.Screen
        options={{title: 'Login'}}
        name={stacks.LOGIN}
        component={LoginStack}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;

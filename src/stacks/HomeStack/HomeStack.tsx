import React from 'react';
import {screens, stacks} from '../../navigation/navigationConstants';
import TestStack from '../TestStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CarouselStack from '../CarouselStack';

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
    </Tab.Navigator>
  );
};

export default HomeStack;

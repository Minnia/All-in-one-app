import React from 'react';
import {screens} from '../../navigation/navigationConstants';
import CarouselScreen from '../../screens/CarouselScreen';
import ViewScreen from '../../screens/ViewScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const CarouselStack = () => (
  <Stack.Navigator initialRouteName={screens.CAROUSEL}>
    <Stack.Screen
      options={{title: null, headerShown: null, headerBackTitleVisible: false}}
      name={screens.CAROUSEL}
      component={CarouselScreen}
    />
    <Stack.Screen
      options={{title: null, headerShown: null, headerBackTitleVisible: false}}
      name={screens.VIEW}
      component={ViewScreen}
    />
  </Stack.Navigator>
);

export default CarouselStack;

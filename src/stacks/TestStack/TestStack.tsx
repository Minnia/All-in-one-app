import React from 'react';
import {screens} from '../../navigation/navigationConstants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TodoListScreen from '../../screens/TodoListScreen';
import MapScreen from '../../screens/MapScreen';

const Tab = createMaterialTopTabNavigator();
export const TestStack = () => {
  return (
    <Tab.Navigator style={{paddingTop: 30, backgroundColor: 'white'}}>
      <Tab.Screen
        name={screens.TODO_LIST_SCREEN}
        options={{title: 'My todos'}}
        component={TodoListScreen}
      />
      <Tab.Screen
        name={screens.MAP_SCREEN}
        options={{title: 'Map'}}
        component={MapScreen}
      />
    </Tab.Navigator>
  );
};
export default TestStack;

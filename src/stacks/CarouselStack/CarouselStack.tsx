import React from 'react';
import {screens} from '../../navigation/navigationConstants';
import CarouselScreen from '../../screens/CarouselScreen';
import ViewScreen from '../../screens/ViewScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import layout from '../../theme/layout';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'red'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow',
          height: layout.height,
          width: layout.width,
        }}>
        <Text>Home!</Text>
      </View>
    </SafeAreaView>
  );
};
const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: layout.height,
          width: layout.width,
        }}>
        <Text>Settings!</Text>
      </View>
    </SafeAreaView>
  );
};
function DrawerContainer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        openByDefault
        overlayColor="red">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const CarouselStack = () => (
  <Stack.Navigator initialRouteName={screens.CAROUSEL}>
    <Stack.Screen
      options={{title: 'Carousel'}}
      name={screens.CAROUSEL}
      component={CarouselScreen}
    />
    <Stack.Screen
      options={{title: 'Clock'}}
      name={screens.VIEW}
      component={ViewScreen}
    />
    <Stack.Screen
      options={{title: 'Drawer'}}
      name={'DrawerContainer'}
      component={DrawerContainer}
    />
  </Stack.Navigator>
);

export default CarouselStack;

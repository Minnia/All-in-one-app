import React, {FunctionComponent, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import seeds from '../../../seeds.json';
import CommonButton from '../common/Button/index';
import {useNavigation} from '@react-navigation/native';
import {screens} from '../../navigation/navigationConstants';
import {NavigationContainer} from '@react-navigation/native';
export const CarouselRide = () => {
  const navigation = useNavigation();
  console.log('navigation', navigation);
  const test = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={{uri: item.image}} style={{height: 300, width: 400}} />
        <Text
          style={{
            backgroundColor: 'white',
            fontSize: 20,
            bottom: 24,
            width: 400,
            height: 50,
            textAlign: 'center',
          }}>
          {item.flower}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Carousel
        layout={'stack'}
        layoutCardOffset={`18`}
        data={seeds.Images}
        renderItem={test}
        sliderWidth={450}
        itemWidth={450}
      />
      <CommonButton
        title="Press me"
        onPress={() => navigation.navigate(screens.VIEW)}
      />
    </SafeAreaView>
  );
};

export default CarouselRide;

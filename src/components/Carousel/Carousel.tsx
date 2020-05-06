import React from 'react';
import {SafeAreaView, View, Image, Text, Button} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import seeds from '../../../seeds.json';
import CommonButton from '../common/Button/index';
import {useNavigation} from '@react-navigation/native';
import {screens, stacks} from '../../navigation/navigationConstants';
import Header from '../common/Header';

export const CarouselRide = () => {
  const navigation = useNavigation();
  const test = ({item}) => {
    return (
      <>
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
      </>
    );
  };

  return (
    <>
      <Header title="Carousel" navigation={navigation} />
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
          title="What time is it?"
          backgroundColor="green"
          onPress={() => navigation.navigate(screens.VIEW)}
        />
        <Button
          title="Go to test"
          onPress={() => navigation.navigate(stacks.TEST)}
        />
      </SafeAreaView>
    </>
  );
};

export default CarouselRide;

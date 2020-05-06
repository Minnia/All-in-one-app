import React from 'react';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = ({title, navigation}) => {
  console.log(navigation);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
      }}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={{uri: '../../assets/svg/HamburgerIcon.svg'}}
            style={{height: 45, width: 45, backgroundColor: 'yellow'}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex: 1}} />
    </View>
  );
};

export default Header;

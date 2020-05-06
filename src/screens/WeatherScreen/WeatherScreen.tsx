import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import layout from '../../theme/layout';
import CommonButton from '../../components/common/Button';

const WeatherScreen = () => {
  return (
    <>
      <View>
        <Text>What's the weather like in...</Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput placeholder="City" style={styles.inputBox} />
        <TextInput placeholder="Country" style={styles.inputBox} />
      </View>
      <CommonButton
        title="Search the weather"
        backgroundColor="blue"
        largeButton
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: layout.height * 0.3,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputBox: {
    width: 100,
    borderBottomColor: 'black',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderWidth: 2,
    paddingLeft: 8,
    color: 'black',
  },
});

export default WeatherScreen;

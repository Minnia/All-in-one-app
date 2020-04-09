import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import MapView from 'react-native-maps';

const Maps = () => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  const initialRegion = {
    latitude: 59.307226,
    longitude: 18.123344,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [region, setRegion] = useState(initialRegion);

  const onRegionChange = region => setRegion(region);

  return (
    <MapView
      showsUserLocation
      style={{height: height, width: width}}
      region={region}
      onRegionChange={onRegionChange}
    />
  );
};

export default Maps;

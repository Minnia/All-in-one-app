import React, {useState} from 'react';
import {Dimensions, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import seeds from '../../../seeds.json';

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
      onRegionChange={onRegionChange}>
      {seeds.Images.map(seed => {
        return (
          <Marker
            title="poop"
            style={{height: 25, width: 30}}
            coordinate={{
              latitude: seed.location.lat,
              longitude: seed.location.long,
            }}
          />
        );
      })}
    </MapView>
  );
};

export default Maps;

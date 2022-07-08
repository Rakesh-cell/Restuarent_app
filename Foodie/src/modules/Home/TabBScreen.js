import React from 'react'
import { StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Marker } from 'react-native-maps';

const TabBScreen = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        showsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 28.579660,
          longitude: 77.321110,
          latitudeDelta: 0.2,
          longitudeDelta: 0.1,
        }}
      >

        <Marker
          coordinate={{ latitude: 28.579660, longitude: 77.321110 }}
          title={"Store one"}
          description={"React native maps"}
        />
        <Marker
          coordinate={{ latitude: 12.972442, longitude: 77.580643 }}
          title={"Bengaluru"}
          description={"Neostore Application"}
        />
        <Marker
          coordinate={{ latitude: 19.076090, longitude: 72.877426 }}
          title={"Mumbai"}
          description={"Neostore Mumbai"}
        />
      </MapView>

    </View>
  )
}

export default TabBScreen

const styles = StyleSheet.create({
  MainContainer: {
    flex:1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

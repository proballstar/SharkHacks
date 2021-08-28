import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import MapView, { Marker} from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const Map = () => {

    const origin = useSelector(selectOrigin)

    return (
        <View>
           <MapView   
        initialRegion={{
            latitude: 60.002,
            longitude: 98.005,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }} 
        style={{ 
            height: Dimensions.get('window').height/2
        }}
        mapType="mutedStandard"
      />   
             
       
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    
})

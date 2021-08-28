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
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.300,
            longitudeDelta: 0.300,
        }} 
        style={{ 
            height: Dimensions.get('window').height/2
        }}
        mapType="mutedStandard"
            >
            {origin?.location && (
                <Marker 
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}
            </MapView>   
             
       
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    
})

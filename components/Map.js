import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import MapView, { Marker} from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY} from '@env'

const Map = () => {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = React.useRef(null)
    const dispath  = useDispatch()

    React.useEffect(() => {
        if(!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: { top: 100, right: 100, left: 100, bottom: 100}
        })
    }, [origin, destination])

    React.useEffect(() => {
        
        if(!origin || !destination) return ;

        const getTravelTime = async () => {
            const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
            fetch(URL)
                .then((res => res.json()))
                .then((data) => {
                    dispath(setTravelTimeInformation(data.rows[0].elements[0]))
                })
        }

        getTravelTime()
    }, [origin, destination, GOOGLE_MAPS_APIKEY])


    return (
        <View>
           <MapView
           ref={mapRef}
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }} 
            style={{ 
                height: Dimensions.get('window').height/2
            }}
            mapType="mutedStandard"
                >

                {origin  && destination && (
                    <MapViewDirections
                        origin={origin.description}
                        destination={destination.description}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeColor="red"
                        strokeWidth={3}
                        lineDashPattern={[2]}
                    />   
                )}
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
                {destination?.location && (
                    <Marker 
                        coordinate={{
                            latitude: destination.location.lat,
                            longitude: destination.location.lng
                        }}
                        title="Destination"
                        description={destination.description}
                        identifier="destination"
                    />
                )}
            </MapView>   
             
       
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    
})

import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"
import { KeyboardAvoidingView} from 'react-native';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {

    const dispath = useDispatch()

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
            <Image style={{ width: 100, height: 100, resizeMode: 'contain'}} source={require('../assets/RideShark.png') } />
            
            <GooglePlacesAutocomplete  
                enableHighAccuracyLocation
                fetchDetails
                keyboardShouldPersistTaps="always" onPress={(data, details = null) => {
                    dispath(setOrigin({
                        location: details.geometry.location,
                        description: data.description
                    }))

                    dispath(setDestination(null))

                    dispath(setDestination(null))
                }} returnKeyType={"search"} minLength={2} enablePoweredByContainer={false} query={{ key: GOOGLE_MAPS_APIKEY, language: "en"}} styles={{ container: { flex: 0}, textInput: { fontSize: 18}}}nearbyPlacesAPI="GooglePlacesSearch" debounce={400} placeholder="Where From?">
                    
            </GooglePlacesAutocomplete>
            <View style={tw`p-20`}/>
            <NavOptions />
           </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})

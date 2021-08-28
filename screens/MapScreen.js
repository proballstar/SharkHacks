import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map';

const MapScreen = () => {
    return (
        <SafeAreaView>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}></View>
        </SafeAreaView>
    )
}

export default MapScreen

const styles = StyleSheet.create({})

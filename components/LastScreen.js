import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectTravelTimeInformation } from '../slices/navSlice'


const LastScreen = () => {

    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    return (
        <SafeAreaView>
            <Text style={tw`text-lg text-center`}>Your ride has been confirmed, do you want to schedule another ride back</Text>
            <Text style={tw`font-bold mt-3 ml-3 p-5`}>Travel Distance: {travelTimeInformation.distance.text}</Text>
            <Text style={tw`font-bold ml-3 p-5`}>Current Travel Time: {travelTimeInformation.duration.text}</Text>
        </SafeAreaView>
    )
}

export default LastScreen

const styles = StyleSheet.create({})

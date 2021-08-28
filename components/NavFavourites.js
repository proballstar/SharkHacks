import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import tw from 'tailwind-react-native-classnames'


const NavFavourites = () => {

    const dispatch = useDispatch()

    const data = [
        {
            id: "123",
            icon: "home",
            place: "Home",
            destination: "San Jose, CA",
            location: {
                lat: 37.33548,
                lng: -121.893028
            }
        },  
        {
            id: "456",
            icon: "briefcase",
            place: "Work",
            destination: "San Fransisco, CA",
            location: {
                lat: 37.773972,
                lng: -122.431297
            }
        }
    ]
    
    return (
        <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({item}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`} onPress={() => {
                dispatch(setDestination({ location: item.location, description: item.destination}))
            }}>
                <Icon  style={tw`mr-4 rounded-full bg-gray-300 p-3`} name={item.icon} type="ionicon" color="white" size={20}/>
                <View>
                    <Text style={tw`font-bold text-lg`}>{item.place}</Text>
                    <Text style={tw`text-gray-500`}>{item.destination}</Text>
                </View>
            </TouchableOpacity>
        )}></FlatList>
    )
}


export default NavFavourites

const styles = StyleSheet.create({})

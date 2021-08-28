import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'


const NavFavourites = () => {

    const data = [
        {
            id: "123",
            icon: "home",
            location: "Home",
            destination: "San Jose, CA"
        },  
        {
            id: "456",
            icon: "briefcase",
            location: "Work",
            destination: "San Fransico, CA"
        }
    ]
    
    return (
        <FlatList  ItemSeparatorComponent={() => (
            <View style={tw`bg-gray-200`, {height: 1.5}}/>
        )} data={data} keyExtractor={(item) => item.id} renderItem={({item}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                <Icon  style={tw`mr-4 rounded-full bg-gray-300 p-3`} name={item.icon} type="ionicon" color="white" size={20}/>
                <View>
                    <Text style={tw`font-bold text-lg`}>{item.location}</Text>
                    <Text style={tw`text-gray-500`}>{item.destination}</Text>
                </View>
            </TouchableOpacity>
        )}></FlatList>
    )
}


export default NavFavourites

const styles = StyleSheet.create({})

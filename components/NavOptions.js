import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, Touchable, View } from 'react-native'
import { FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../slices/navSlice'

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: require('../assets/sharkcar.jpg'),
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: require('../assets/sharkfood.jpg'),
        screen: "EatsScreen",
    }
]

const NavOptions = () => {

    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)

    return (
        <View>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity disabled={!origin} style={tw`p-2 pl-6 pb-8 pt-4 bg-blue-900 m-2 w-40 rounded-xl`} onPress={() => navigation.navigate(item.screen)} >
                        <View style={tw`${!origin && "opacity-70"}`}>
                            <Image style={{ width: 120, height: 120, resizeMode: 'contain'}} source={item.image}/>
                            <Text style={tw`mt-2 ${origin ? "text-white" : "text-gray-500"} text-lg font-semibold text-white`}>{item.title}</Text>
                            <Icon style={tw`p-2 ${origin ? "bg-white" : "bg-gray-700"} w-10 rounded-full mt-4`} type="antdesign" name="arrowright" color="black" />
                        </View>
                    </TouchableOpacity>
                )} 
            />
        </View>
    )
}

export default NavOptions

const styles = StyleSheet.create({})

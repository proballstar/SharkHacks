import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, Touchable, View } from 'react-native'
import { FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

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

    return (
        <View>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-blue-900 m-2 w-40 rounded-xl`} onPress={() => navigation.navigate(item.screen)} >
                        <View>
                            <Image style={{ width: 120, height: 120, resizeMode: 'contain'}} source={item.image}/>
                        </View>
                        <Text style={tw`mt-2 text-lg font-semibold text-white`}>{item.title}</Text>
                        <Icon style={tw`p-2 bg-white w-10 rounded-full mt-4`} type="antdesign" name="arrowright" color="black" />
                    </TouchableOpacity>
                )} 
            />
        </View>
    )
}

export default NavOptions

const styles = StyleSheet.create({})

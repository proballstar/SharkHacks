import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const RideOptionsCard = () => {

    const navigation = useNavigation()

    const [ selected, setSelected] = React.useState(null)

    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    const SURGE_CHARGE_RATE = 2;
  
    const data  = [
        {
            id: "Great-White-Shark-789",
            title: "Great White Shark",
            multiplier: 1,
            image: require('../assets/greatwhite.jpg')
        },
        {
            id: "Basking-Shark-456",
            title: "Basking Shark",
            multiplier: 1.25,
            image: require('../assets/basking.jpg')
        },
        {
            
            id: "Whale-Shark-123",
            title: "Whale Shark",
            multiplier: 2,
            image: require('../assets/whale.jpg')
        },
        
        
    ]

    return (
        <SafeAreaView style={tw`bg-white flex-grow `}>
            <View>
                <View style={tw`absolute top-3 z-50 left-5 p-3 rounded-full`} >
                    <TouchableOpacity onPress={() => navigation.navigate('NavigateCard')}>
                        <Icon name="chevron-left" type="fontawesome" />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={tw`text-center py-5 text-xl`}>Select a ride - {travelTimeInformation?.distance.text}</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity style={tw`flex-row justify-between items-center px-10 flex-1 ml-5 mt-5 
                    
                    ${item.id === selected?.id  && "bg-gray-200"}`}
                    onPress={() => navigation.navigate('LastScreen')}
                    >
                        <View>
                            <Image 
                                style={{height: 40, width: 80, marginLeft: -50}}
                                source={item.image}
                            />
                        </View>
                        <View style={tw`-ml-6`}>
                            <Text style={tw`font-bold`}>{item.title}</Text>
                            <Text >{travelTimeInformation?.duration.text}</Text>   
                        </View>
                        <Text style={tw`text-xl`}>

                            

                       
                            {(travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * item.multiplier /200).toFixed(2)}
                        

                        </Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})

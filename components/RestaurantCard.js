import { AntDesign, Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const RestaurantCard = ({
    id, imgUrl, title, rating,
    address, genre, short_description,
    dishes, long, lat
}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity className="bg-white mr-3 shadow-sm rounded-md"
            onPress={() => {
                navigation.navigate(
                    "Restaurant", {
                    id, imgUrl, title, rating,
                    address, genre, short_description,
                    dishes, long, lat
                })
            }}>
            <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-md" />
            <View className="px-3 pb-4">
                <Text className="text-lg font-semibold pt-2">{title}</Text>
                <Text className="text-xs text-gray-400 w-[232px] whitespace-pre-wrap">{short_description}</Text>
                <View className="flex-row items-center space-x-1 pt-1">
                    <AntDesign name="staro" size={22} color="green"
                        className="opacity-5" />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500">{rating}</Text>  {genre}
                    </Text>
                </View>

                <View className="flex-row items-center space-x-1">
                    <Entypo name="location-pin" size={22} color="gray" className="opacity-5" />
                    <Text>Nearby - {address}</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default RestaurantCard
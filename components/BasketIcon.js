import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'

const BasketIcon = () => {

    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const navigation = useNavigation();

    return (
        <View className="absolute bottom-10 w-full z-50">
            <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="mx-5 p-4 rounded-xl flex-row  items-center space-x-1 bg-[#00CCBB]">
                <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
                <Text className="flex-1 text-white font-extrabold text-lg text-center">View Basket</Text>
                <Text className="text-lg text-white font-extrabold">$ {basketTotal}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon
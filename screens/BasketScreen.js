import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';

const BasketScreen = () => {

    const navigation = useNavigation();
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    const removeFromBasketHandler = (id) => {
        dispatch(removeFromBasket({ id }));
    }


    return (
        <View className="mt-4">
            <View className="bg-white h-full rounded-t-3xl">
                <View className="rounded-t-3xl p-5 border-b border-[#00CCBB] bg-white shadow-sm">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">Hoilday Cafe</Text>
                    </View>

                    <TouchableOpacity onPress={navigation.goBack}
                        className="rounded-full bg-gray-100 absolute top-5 right-4">
                        <Entypo name="circle-with-cross" size={40} color="green" />
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image source={{ uri: "https://links.papareact.com/wru" }}
                        className="rounded-full h-9 w-9 bg-gray-300 p-4"
                    />
                    <Text className="flex-1">Deliver in 50-75 min</Text>
                    <TouchableOpacity className="rounded-full absolute top-5 right-4">
                        <Text className="text-[#00CCBB]">Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="divide-y divide-gray-200">
                    {items.map((item, i) => (
                        <View key={item.id} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text>{i + 1}. </Text>
                            <Image
                                source={{ uri: item?.image }}
                                className="rounded-full h-14 w-14"
                            />
                            <Text className="flex-1">{item?.name}</Text>
                            <Text className="text-gray-600">$ {item?.price}</Text>
                            <TouchableOpacity onPress={() => removeFromBasketHandler(item.id)}>
                                <Text className="text-[#00CCBB] text-sm">
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">$ {basketTotal}</Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">$ 1</Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text>Order Total</Text>
                        <Text className="font-extrabold">$ {basketTotal + 1}</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("PreparingOrderScreen")}
                        className="rounded-lg bg-[#00CCBB] p-4">
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default BasketScreen;
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import BasketIcon from './BasketIcon';
import DishRow from './DishRow';

const RestaurantScreen = () => {

    const { params: {
        id, imgUrl, title, rating,
        address, genre, short_description,
        dishes, long, lat
    } } = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);

    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View className="relative">
                    <Image source={{ uri: imgUrl }}
                        className="w-full h-56 bg-gray-300 p-4" />
                    <TouchableOpacity onPress={navigation.goBack}
                        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
                        <AntDesign name="arrowleft" color="#00CCBB" size={20} />
                    </TouchableOpacity>
                </View>

                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-2xl font-bold">{title}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <AntDesign name="staro" color="green" size={22}
                                    className="opacity-5" />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500">{rating}</Text>  {genre}
                                </Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <Entypo name="location-pin" className="opacity-5" color="gray" size={25} />
                                <Text className="text-xs text-gray-500">Nearby - {address}</Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                    </View>

                    <TouchableOpacity className="flex-row items-center space-x-2 p-4
                border-y border-gray-300">
                        <AntDesign name="questioncircleo" color="gray" className="opacity-5" size={22} />
                        <Text>Have a food allergy?</Text>
                        <AntDesign name="arrowright" color="gray" className="opacity-5" size={22} />
                    </TouchableOpacity>
                </View>

                <View className="bg-white pb-36">
                    <Text className="text-xl px-4 pt-6 mb-3 font-bold">Menu</Text>
                    <DishRow id="1" name="Sushi" description="the body of knowledge, especially of a traditional."
                        price="500" image="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <DishRow id="2" name="Noddles" description="the body of knowledge, especially of a traditional."
                        price="400" image="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <DishRow id="3" name="Biriyani" description="the body of knowledge, especially of a traditional."
                        price="600" image="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <DishRow id="4" name="Cake" description="the body of knowledge, especially of a traditional."
                        price="900" image="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <DishRow id="5" name="Coca" description="the body of knowledge, especially of a traditional."
                        price="300" image="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </View>
            </ScrollView>
        </>
    )
}

export default RestaurantScreen
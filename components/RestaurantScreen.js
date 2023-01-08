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
                    <DishRow id="1" name="Dish" description="the body of knowledge, especially of a traditional."
                        price="500" image="https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80" />
                    <DishRow id="2" name="Dish" description="the body of knowledge, especially of a traditional."
                        price="400" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFzM8sULbV3uydmTtFHLPkI1KEFvN72Sn9w_PMICYZkN_OIHOCt5ddBJx-mM63Q0QPq4&usqp=CAU" />
                    <DishRow id="3" name="Dish" description="the body of knowledge, especially of a traditional."
                        price="600" image="https://c0.wallpaperflare.com/preview/5/191/602/tandoori-chicken-tikka-indian-food-indian-kitchen.jpg" />
                    <DishRow id="4" name="Biriyani" description="the body of knowledge, especially of a traditional."
                        price="900" image="https://media.istockphoto.com/id/1333127675/photo/chicken-biryani-spicy-indian-malabar-biryani-hyderabadi-biryani-dum-biriyani-pulao-golden.jpg?b=1&s=170667a&w=0&k=20&c=Exy5Kso6M8xZLKjcZ00NHsgQmk2KSfwP6Q_ZiAqM8Ho=" />
                    <DishRow id="5" name="Dish" description="the body of knowledge, especially of a traditional."
                        price="300" image="https://imgmedia.lbb.in/media/2020/06/5ee727ff0109343fcf9f4f5d_1592207359288.jpg" />
                </View>
            </ScrollView>
        </>
    )
}

export default RestaurantScreen
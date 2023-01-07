import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import Categories from "../components/Categories";
import Feature from "../components/Feature";


const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <SafeAreaView className="p-2 pt-10 bg-white">
            {/* HEADER */}
            <View className="flex-row pb-1 items-center mx-2 space-x-2">
                <Image className="h-8 w-8 bg-gray-300 p-4 rounded-full ml-1"
                    source={{ uri: "https://links.papareact.com/wru" }} />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <AntDesign name="down" size={20} color="#00CCBB" />
                    </Text>
                </View>
                <Ionicons name="ios-person-circle-outline" size={30} color="black" />
            </View>

            {/* SEARCH */}
            <View className="flex-row justify-between items-center px-2 pb-2">
                <View className="flex-row space-x-2 flex-1 bg-slate-200 py-1 px-2 rounded-xl mr-2">
                    <Feather name="search" size={24} />
                    <TextInput placeholder='Search resturants...' keyboardType='default' />
                </View>
                <AntDesign name="menufold" size={24} color="#00CCBB" />
            </View>

            {/* BODY */}
            <ScrollView showsVerticalScrollIndicator={false}
                className="bg-gray-100 pb-20">
                {/* CATEGORIES */}
                <Categories />

                {/* FEATURED ROWS */}
                <Feature />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;
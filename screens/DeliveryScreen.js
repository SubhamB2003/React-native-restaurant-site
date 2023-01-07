import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Progress from 'react-native-progress';
import { Marker } from 'react-native-svg';


const DeliveryScreen = () => {

    const navigation = useNavigation();

    return (
        <View className="bg-[#00CCBB] flex-1 pt-48">
            <SafeAreaView className="z-50 absolute">
                <View className="flex-row justify-between items-center p-5 mt-4">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Entypo name="circle-with-cross" size={40} color="white" />
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>

                <View className="bg-white ml-4 mr-5 my-2 rounded-md p-6 z-50 shadow-md">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-4xl font-bold">45-55 Minutes</Text>
                        </View>

                        <Image source={{ uri: "https://links.papareact.com/fls" }}
                            className="w-20 h-20" />
                    </View>
                    <Progress.Bar width={200} indeterminate={true} color="#00CCBB" />
                    <Text className="text-sm text-gray-500 mt-3">Your order at Nando's is being prepared</Text>
                </View>
            </SafeAreaView>

            <MapView
                initialRegion={{
                    latitude: 37.7882,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                className="flex-1 -mt10 z-0"
                mapType="mutedStandard"
            >
                <Marker
                    coordinate={{
                        latitude: 37.7882,
                        longitude: -122.4324,
                    }}
                    title="Nando's" identifier="origin"
                    pinColor="#00CCBB"
                />
            </MapView>

            <SafeAreaView className="bg-white flex-row items-center space-x-5 h-24 px-4">
                <Image className="h-10 w-10 bg-gray-300 p-4 rounded-full ml-1"
                    source={{ uri: "https://links.papareact.com/wru" }} />
                <View className="flex-1">
                    <Text className="text-lg">Demo Person</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>

                <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen;
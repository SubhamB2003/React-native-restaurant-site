import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import RestaurantCard from './RestaurantCard';


const FeatureRow = ({ id, title, description }) => {

    return (
        <View >
            <View className="flex-row items-center justify-between px-4 mt-4">
                <Text className="font-bold text-lg">{title}</Text>
                <AntDesign name="arrowright" size={24} color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView className="pt-4 mx-2" horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {/* RESTAURANTCARDS */}
                <RestaurantCard
                    id="100" imgUrl="https://images.pexels.com/photos/1050862/pexels-photo-1050862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Yo Susi" rating={4.5}
                    address="Japenese" genre="123 Main st"
                    short_description="the body of knowledge, especially. Archaic. the process or act of teaching; instruction. something that is taught; lesson."
                    dishes={[]} long={20} lat={0} />

                <RestaurantCard
                    id="200" imgUrl="https://images.pexels.com/photos/1050862/pexels-photo-1050862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Yo Susi" rating={4.5}
                    address="Japenese" genre="123 Main st"
                    short_description="This is a test description. the body of knowledge, especially. Archaic. the process or act of teaching; instruction."
                    dishes={[]} long={20} lat={0} />

                <RestaurantCard
                    id="300" imgUrl="https://images.pexels.com/photos/1050862/pexels-photo-1050862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Yo Susi" rating={4.5}
                    address="Japenese" genre="123 Main st"
                    short_description="the body of knowledge, especially. Archaic. the process or act of teaching; instruction. something that is taught; lesson."
                    dishes={[]} long={20} lat={0} />
            </ScrollView>
        </View>
    )
}

export default FeatureRow
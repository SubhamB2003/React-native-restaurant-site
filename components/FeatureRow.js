import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import RestaurantCard from './RestaurantCard';


const FeatureRow = ({ id, title, description }) => {

    return (
        <View key={id}>
            <View className="flex-row items-center justify-between px-4 mt-4">
                <Text className="font-bold text-lg">{title}</Text>
                <AntDesign name="arrowright" size={24} color="#00CCBB" />
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView className="pt-4 mx-2" horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {/* RESTAURANTCARDS */}
                <RestaurantCard
                    id="100" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckbur44GwlZHraXvjsvxjE0iE1ONB9_AhgA&usqp=CAU"
                    title="Pasta" rating={4.5}
                    address="Japenese" genre="123 Main st"
                    short_description="the body of knowledge, especially. Archaic. the process or mething that is taught; lesson."
                    dishes={[]} long={20} lat={0} />

                <RestaurantCard
                    id="200" imgUrl="https://c4.wallpaperflare.com/wallpaper/672/503/735/fast-food-junk-food-food-hamburger-wallpaper-preview.jpg"
                    title="Burger" rating={4.5}
                    address="Japenese" genre="123 Main st"
                    short_description="This is a test description. the body of knowledge, especially. Archaic."
                    dishes={[]} long={20} lat={0} />

                <RestaurantCard
                    id="300" imgUrl="https://wallpapercave.com/wp/wp1874212.jpg"
                    title="Random" rating={4.5}
                    address="Japenese" genre="123 Main st"
                    short_description="the body of knowledge, especially. Archaic. the process or instruction. something that is taught; lesson."
                    dishes={[]} long={20} lat={0} />
            </ScrollView>
        </View>
    )
}

export default FeatureRow
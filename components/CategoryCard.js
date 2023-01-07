import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="">
            <Image className="h-20 w-20 bg-gray-300 rounded mx-2"
                source={{ uri: "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" }} />
            <Text className="absolute bottom-1 left-3 text-white font-bold">
                {title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard
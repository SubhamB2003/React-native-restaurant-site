import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

const CategoryCard = ({ id, imgUrl, title }) => {
    return (
        <TouchableOpacity className="" key={id}>
            <Image className="h-20 w-20 bg-gray-300 rounded mx-2"
                source={{ uri: imgUrl }} />
            <Text className="absolute bottom-1 left-3 text-white font-bold">
                {title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard
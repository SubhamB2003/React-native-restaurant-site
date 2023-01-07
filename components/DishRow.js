import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../features/basketSlice';


const DishRow = ({ id, image, description, name, price }) => {

    const dispatch = useDispatch();
    const items = useSelector((state) => selectBasketItemsWithId(state, id));

    const [isPress, setIsPress] = useState(false);
    const addItemToBasket = () => {
        dispatch(addToBasket({ id, image, description, name, price }))
    }
    const removeItemFromBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({ id }));
    }

    return (
        <>
            <TouchableOpacity onPress={() => setIsPress((press) => !press)}
                className={`bg-white p-4 border border-gray-200 ${isPress && "border-b-0"}`}>
                <View className="flex-row">
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-400">{description}</Text>
                        <Text className="text-gray-400 mt-2">$ {price}</Text>
                    </View>

                    <View>
                        <Image style={{
                            borderWidth: 1, borderColor: "#F3F3F4"
                        }} source={{ uri: image }}
                            className="h-20 w-20 bg-gray-300 p-4 rounded-xl" />
                    </View>
                </View>
            </TouchableOpacity>

            {isPress && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-4 pb-3">
                        <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                            <AntDesign name="minuscircle" size={30} color={items.length > 0 ? "#00CCBB" : "gray"} />
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <AntDesign name="pluscircle" size={30} color="#00CCBB" />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
}

export default DishRow
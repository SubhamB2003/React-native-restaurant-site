import React from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <ScrollView className="space-x-2 py-4 bg-gray-100"
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 1" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 2" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 3" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 4" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 5" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 6" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 7" />
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing 8" />
        </ScrollView>
    )
}

export default Categories;
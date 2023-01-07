import React from 'react';
import { View } from 'react-native';
import FeatureRow from './FeatureRow';

const Feature = () => {

    return (
        <View className="bg-gray-100 pb-40">
            <FeatureRow id="1000" title="Featured"
                description="Paid placements from our partners" />
            <FeatureRow id="2000" title="Tasty Discounts"
                description="Paid placements from our partners" />
            <FeatureRow id="3000" title="Offers near you!"
                description="Paid placements from our partners" />
        </View>
    )
}

export default Feature
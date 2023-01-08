import React from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <ScrollView className="space-x-2 py-4 bg-gray-100"
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <CategoryCard imgUrl="https://cdn.wallpapersafari.com/34/46/W6l4nL.jpg" title="Dish 1" id="1" />
            <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoozCjLTvxdpiY1nTTvq0OuzcUvZYgrJPOyQ&usqp=CAU" title="Dish 2" id="2" />
            <CategoryCard imgUrl="https://images.all-free-download.com/images/graphiclarge/food_picture_01_hd_pictures_167558.jpg" title="Dish 3" id="3" />
            <CategoryCard imgUrl="https://wallpapercave.com/wp/wp3495545.jpg" title="Dish 4" id="4" />
            <CategoryCard imgUrl="https://c4.wallpaperflare.com/wallpaper/626/14/515/dessert-sweet-food-cake-wallpaper-preview.jpg" title="Dish 5" id="5" />
            <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJj2O-Hg0f3EzElQ2Vk1g77qlcAuAqi61K2Q&usqp=CAU" title="Dish 6" id="6" />
            <CategoryCard imgUrl="https://www.mwallpapers.com/download-image/533647/1080x810" title="Dish 7" id="7" />
            <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Cs07GTnQs_Ww5ReSD5IO_FggZLCzu6WnUg&usqp=CAU" title="Dish 8" id="8" />
        </ScrollView>
    )
}

export default Categories;
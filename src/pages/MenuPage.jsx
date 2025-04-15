import React, { useState, useEffect } from 'react';
import MenuHeader from '../components/MenuHeader';
import MenuCategoryTabs from '../components/MenuCategoryTabs';
import MenuItemList from '../components/MenuItemList';
import { fetchMenuItems } from '../api/MenuAPI';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('추천 메뉴');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = ['추천 메뉴', '카페인음료', '디카페인', '디저트'];

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMenuItems();
        setMenuItems(data);
      } catch (err) {
        setError('메뉴를 불러오는 중 오류가 발생했습니다.');
        console.error('Error fetching menu items:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadMenuItems();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenuItems = selectedCategory === '추천 메뉴'
    ? menuItems.filter(item => item.isRecommended)
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-page">
      <MenuHeader storeName="카페 지니빈스" />
      <MenuCategoryTabs 
        categories={categories} 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      {isLoading ? (
        <div className="loading">로딩 중...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <MenuItemList menuItems={filteredMenuItems} />
      )}
    </div>
  );
};

export default MenuPage;











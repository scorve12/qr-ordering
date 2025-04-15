import React from 'react';
import MenuItemVariants from './MenuItemVariants';

const MenuItem = ({ item }) => {
  // 가격 포맷팅 함수
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
  };

  // 메뉴에 크기 변형이 있는지 확인
  const hasVariants = item.variants && item.variants.length > 0;

  return (
    <div className="menu-item">
      <div className="menu-item-content">
        <div className="menu-item-info">
          {item.rank && (
            <span className="rank-badge">인기 {item.rank}위</span>
          )}
          
          {item.tags && item.tags.includes('사장님 추천') && (
            <span className="recommendation-tag">사장님 추천</span>
          )}
          
          <h3 className="menu-item-title">{item.title}</h3>
          <p className="menu-item-description">{item.description}</p>
          
          {!hasVariants && (
            <div className="menu-item-price">{formatPrice(item.price)}</div>
          )}
          
          {item.reviewCount > 0 && (
            <div className="review-count">리뷰 {item.reviewCount}</div>
          )}
        </div>
        
        <div className="menu-item-image">
          <img src={item.image} alt={item.title} />
        </div>
      </div>
      
      {hasVariants && (
        <MenuItemVariants variants={item.variants} />
      )}
    </div>
  );
};

export default MenuItem;
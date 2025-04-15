import React from 'react';
import MenuItem from './MenuItem.jsx';

const MenuItemList = ({ menuItems }) => {
  return (
    <div className="menu-item-list">
      {menuItems.length === 0 ? (
        <div className="empty-list">해당 카테고리에 메뉴가 없습니다.</div>
      ) : (
        menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
          />
        ))
      )}
    </div>
  );
};

export default MenuItemList;
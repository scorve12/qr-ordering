import React from 'react';

const MenuItemVariants = ({ variants }) => {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
  };

  return (
    <div className="menu-item-variants">
      {variants.map((variant) => (
        <div key={variant.size} className="variant-item">
          <span className="variant-size">{variant.size} : </span>
          <span className="variant-price">{formatPrice(variant.price)}</span>
        </div>
      ))}
    </div>
  );
};

export default MenuItemVariants;


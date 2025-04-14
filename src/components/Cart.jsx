import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, onRemoveFromCart, onAddToCart }) => {
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md sticky top-4">
      <h2 className="text-xl font-bold mb-4">주문 목록</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">담긴 메뉴가 없습니다.</p>
      ) : (
        <>
          <ul className="divide-y">
            {cart.map((item) => (
              <CartItem 
                key={item.id} 
                item={item}
                onRemove={onRemoveFromCart}
                onAdd={onAddToCart}
              />
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between text-lg font-bold">
              <span>총 금액:</span>
              <span>{totalPrice.toLocaleString()}원</span>
            </div>
            <button 
              className="w-full mt-4 bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
              disabled
            >
              주문하기 (기능 비활성화)
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
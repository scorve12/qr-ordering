import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuSection from './components/MenuSection';
import Cart from './components/Cart';
import { useState } from 'react';
import { cafeMenu } from './data/menuData';

const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prevCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId);
      
      if (existingItem?.quantity > 1) {
        return prevCart.map(item => 
          item.id === itemId 
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        );
      }
      return prevCart.filter(item => item.id !== itemId);
    });
  };

  return { cart, addToCart, removeFromCart };
};

const App = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      
      <main className="container mx-auto p-4 flex-grow">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-3/4">
            <MenuSection menu={cafeMenu} onAddToCart={addToCart} />
          </div>
          
          <div className="md:w-1/4">
            <Cart 
              cart={cart} 
              onRemoveFromCart={removeFromCart} 
              onAddToCart={addToCart} 
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
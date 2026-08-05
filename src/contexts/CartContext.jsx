import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [deliveryPrice] = useState(3.5);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalPrice = total + deliveryPrice;

  function addToCart(id, name, price, image) {
    const coffeeExists = cart.find(item => item.id === id);
    if (coffeeExists) {
      increase(id);
    } else {
      setCart([...cart, { id, name, price, image, quantity: 1 }]);
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  function increase(id) {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  }

  function decrease(id) {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increase, decrease, clearCart, total, deliveryPrice, finalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../store/slices/cartSlice';
import CartItem from './CartItem';

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
}

export default Cart;

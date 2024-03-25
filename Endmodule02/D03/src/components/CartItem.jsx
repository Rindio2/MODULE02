import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity } from '../store/slices/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(item.id));
  };

  return (
    <li>
      <span>{item.name} - ${item.price} x {item.quantity}</span>
      <button onClick={handleDecreaseQuantity}>-</button>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
}

export default CartItem;

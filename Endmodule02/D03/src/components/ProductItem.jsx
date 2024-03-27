import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <li>
      <span>{product.name} - ${product.price}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

export default ProductItem;

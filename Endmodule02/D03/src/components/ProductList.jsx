import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectAllProducts } from '../store/slices/productsSlice';
import ProductItem from './ProductItem';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

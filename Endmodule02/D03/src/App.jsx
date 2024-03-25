import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <h1>My Store</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;

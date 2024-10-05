import React from 'react';
import Card from './CardCom';  // Adjust the import path if necessary

const Main = ({ filteredProducts, setQuery }) => {
  return (
    <main>
      <div className="select-btn">
        <button className="sell-btn">Sell</button>
        <button className="wishlist-btn">Wishlist</button>
      </div>
      <div className="product-cards">
        {filteredProducts.map((product) => (
          <Card
            key={product.val}
            val={product.val}
            title={product.title}
            price={product.price}
            describe={product.describe}
            img={product.img}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;

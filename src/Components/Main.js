import React, { useState, useEffect } from 'react';
import Card from './CardCom';  // Adjust the import path if necessary

const Main = ({ filteredProducts, setQuery }) => {
  const [sortType, setSortType] = useState(''); 
  const [sortedProducts, setSortedProducts] = useState([...filteredProducts]);

  const parsePrice = (priceStr) => {
    return Number(priceStr.replace(/[^0-9.-]+/g, ''));
  };

  useEffect(() => {
    let sortedArray = [...filteredProducts];

    switch (sortType) {
      case 'priceLowToHigh':
        sortedArray.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case 'priceHighToLow':
        sortedArray.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      default:
        sortedArray = [...filteredProducts];
    }

    setSortedProducts(sortedArray);
  }, [sortType, filteredProducts]); 

  const handleSortChange = (e) => {
    const value = e.target.value;
    switch (value) {
      case '1':
        setSortType('priceLowToHigh');
        break;
      case '2':
        setSortType('priceHighToLow');
        break;
      default:
        setSortType('');
    }
  };

  return (
    <main>
      <div className="select-btn">
        <button className="sell-btn">Sell</button>
        <button className="wishlist-btn">Wishlist</button>
      </div>
      <div className='select-btn'>
        <select 
          className="form-select" 
          onChange={handleSortChange} 
          style={{ width: '200px' }}
        >
          <option selected>Sort By</option>
          <option value="1">Price: Low to High</option>
          <option value="2">Price: High to Low</option>
        </select>
      </div>
      <div className="product-cards">
        {sortedProducts.map((product) => (
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

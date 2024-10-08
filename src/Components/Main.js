import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './CardCom';

const Main = ({ filteredProducts, setQuery }) => {
  const [sortType, setSortType] = useState(''); 
  const [sortedProducts, setSortedProducts] = useState([...filteredProducts]);
  const [wishList, setWishList] = useState([]);

  const navigate = useNavigate();

  // Load wishlist from localStorage when the component mounts
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishList(JSON.parse(storedWishlist)); 
    }
  }, []); 

  // Toggle add/remove product from wishlist
  const handleWishList = (product) => {
    const isPresent = wishList.some(item => item.id === product.id);

    if (isPresent) {
      const newList = wishList.filter(item => item.id !== product.id);
      setWishList(newList);
      localStorage.setItem('wishlist', JSON.stringify(newList));
    } else {
      const newList = [...wishList, product];
      setWishList(newList);
      localStorage.setItem('wishlist', JSON.stringify(newList));
    }
  };

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

    // Add `isInWishlist` to each product
    const updatedArray = sortedArray.map((product) => ({
      ...product,
      isInWishlist: wishList.some(item => item.id === product.id)  // Check if in wishlist
    }));

    setSortedProducts(updatedArray);
  }, [wishList, sortType, filteredProducts]);  // Re-run when wishlist, sortType, or filteredProducts change

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
        <button className="wishlist-btn" onClick={() => {navigate('/wishlist')}}>Wishlist</button>
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
            id={product.id}
            title={product.title}
            price={product.price}
            describe={product.describe}
            img={product.img}
            isInWishList={product.isInWishlist}
            handleWishList={() => handleWishList(product)}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;

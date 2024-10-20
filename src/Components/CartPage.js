import { useEffect, useState } from 'react';
import Card from './CardCom';
import emptyCart from '../data/emptyCart.png'
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  // Handle removal of items from the cart
  const handleCart = (product) => {
    const updatedCartItems = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));  // Update localStorage
  };

   // Calculate total price of items in cart
   const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace(/[^0-9.-]+/g, '')), 0);
  };

  // Handle Buy Button Click (dummy action for now)
  const handleBuy = () => {
    alert('Proceeding to buy!');
    // You can add navigation to a payment page or further logic here
  };

  return (
    <div style={{width: '100vw', height: 'auto'}}>
        <div  style={{display: 'flex', flexDirection : 'column', alignItems : 'center'}}>
            <h1 style={{fontSize: '3rem', fontWeight: 'bolder', textAlign: 'center', margin: '0px auto'}}>Your Cart</h1>
            {cartItems.length > 0 && (
                <>
                    {/* Display Total Price */}
                    <div style={{display : 'flex' , gap : '40px' , marginTop : '20px'}}>
                        <h2 style={{ marginTop: '20px', fontSize: '1.5em', fontWeight: 'bold' }}>Total Amount: ₹{getTotalPrice().toFixed(2)}</h2>
                        <button
                        className="custom-button"
                        onClick={handleBuy}
                        style={{
                            backgroundColor: 'green',
                            color: 'white',
                            padding: '10px 20px',
                            fontSize: '1.2em',
                            borderRadius: '10px',
                        }}>
                        Buy Now
                        </button>
                    </div>
                </>
            )}
        </div> 
      <div className='product-cards'>
      {cartItems.length > 0 ? (
        
          cartItems.map((product) => (
             <Card
             key={product.val}
             val={product.val}
             id={product.id}
             title={product.title}
             price={product.price}
             describe={product.describe}
             img={product.img} 
             isInCart={true}
             handleCart={handleCart}
           />
          ))
      ) : (
        <div style= {{padding : '10px', textAlign : 'center' ,alignItems : 'center'}}>
          <img style= {{padding : '10px',}} src={emptyCart} alt='Empty Cart' />
          <Link to='/'><button style= {{padding : '20px' , backgroundColor: '#3d0ccf' , borderRadius: '10px', fontWeight : 'bold', color : 'white' , margin : 'auto'}}>Lets go Shopping</button></Link>
          </div>
      )}
      </div>
    </div>
  );
};

export default CartPage;
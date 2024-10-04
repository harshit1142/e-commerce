import './App.css';
import Card from './Components/CardCom';
import Footer from './Components/Footer';
import NAV_BAR from './Components/Navbar';
import products from './data/products.json'; // Importing the JSON file

function App() {
  return (
    <div>
      <NAV_BAR />
      <main>
        <div className='select-btn'>
          <button className="sell-btn">Sell</button>
          <button className="wishlist-btn">Wishlist</button>
        </div>
        <div className="product-cards">
          {products.map((product) => (
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
      <Footer />
    </div>
  );
}

export default App;

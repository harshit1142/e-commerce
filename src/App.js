import { useState } from "react";
import "./App.css";
// import Card from "./Components/CardCom";
import Footer from "./Components/Footer";
import NAV_BAR from "./Components/Navbar";
import products from "./data/products.json"; // Importing the JSON file
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from "./Components/AboutUs";
import Main from "./Components/Main";

function App() {
  const [query, setQuery] = useState("");

  // Filter the products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Router>
    <div>
      <NAV_BAR setQuery={setQuery} />
      
      <Routes>
      {/* <main>
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
      </main> */}
      <Route path="/" element={<Main filteredProducts={filteredProducts} setQuery={setQuery} />} />
      <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

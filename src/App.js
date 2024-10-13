import { useState } from "react";
import "./App.css";
// import Card from "./Components/CardCom";
import Footer from "./Components/Footer";
import NAV_BAR from "./Components/Navbar";
import Signup from "./Components/signup";

import products from "./data/products.json"; // Importing the JSON file
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Main from "./Components/Main";
import WishList from "./Components/WishList";
import CartPage from "./Components/CartPage";

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
      <Route path="/" element={<Main filteredProducts={filteredProducts} setQuery={setQuery} />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/cart" element={<CartPage/>} />
      {/* Signup page route */}
      <Route path="/signup" element={<Signup />} />
      </Routes>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;

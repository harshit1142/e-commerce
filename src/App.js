import { useState } from "react";
import "./App.css";
// import Card from "./Components/CardCom";
import Footer from "./Components/Footer";
import NAV_BAR from "./Components/Navbar";
import Signup from "./Components/signup";
import ContactUs from "./Components/ContactUs"; // Import the new ContactUs page

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
      <Route path="/" element={<Main filteredProducts={filteredProducts} setQuery={setQuery} />} />
      <Route path="/about" element={<AboutUs />} />
      {/* Signup page route */}
      <Route path="/signup" element={<Signup />} />
      
        {/* other routes */}
        <Route path="/contact" element={<ContactUs />} />
        {/* other routes */}
      
      </Routes>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;

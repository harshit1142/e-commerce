import { lazy, Suspense, useState } from "react";
import "./App.css";
// import Card from "./Components/CardCom";
import Footer from "./Components/Footer";
import NAV_BAR from "./Components/Navbar";
import Signup from "./Components/signup";
import products from "./data/products.json"; // Importing the JSON file
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useDebouncedSearch from "./hooks.js/useDebouncedSearch";
import PageLoading from "./Components/PageLoading";


const Main = lazy(() => import("./Components/Main"))
const Wishlist = lazy(() => import("./Components/WishList"))
const AboutUs = lazy(() => import("./Components/AboutUs"))
const ContactUs = lazy(() => import("./Components/ContactUs"))
const CartPage = lazy(() => import("./Components/CartPage"))
const Error = lazy(() => import("./Components/Error"))



function App() {
  const [query, setQuery] = useState("");
  const debouncedSearch = useDebouncedSearch(query,500); 

  // Filter the products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <Router>
    <div>
      <NAV_BAR setQuery={setQuery} />
      <Routes>
      <Route path="/" element={<Main filteredProducts={filteredProducts} setQuery={setQuery} />} />
      <Route path="/wishlist" element={<Suspense fallback={PageLoading}><Wishlist /></Suspense>} />
      <Route path="/about" element={<Suspense fallback={PageLoading}><AboutUs /></Suspense>} />
      <Route path="/contact" element={<Suspense fallback={PageLoading}><ContactUs /></Suspense>} />
      <Route path="/cart" element={<Suspense fallback={PageLoading}><CartPage/></Suspense>} />
      {/* Signup page route */}
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Suspense fallback={PageLoading}><Error /></Suspense>} />
      </Routes>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;

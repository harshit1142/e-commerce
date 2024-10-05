import { useState } from "react";
import "./App.css";
import Card from "./Components/CardCom";
import Footer from "./Components/Footer";
import NAV_BAR from "./Components/Navbar";
import products from "./data/products.json"; // Importing the JSON file

function App() {
  const [query, setQuery] = useState("");

  // Filter the products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <NAV_BAR setQuery={setQuery} />
      <main>
        <div
          className="select-btn"
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <button className="custom-button">Sell</button>
          <button className="custom-button">Wishlist</button>
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
      <Footer />
    </div>
  );
}

export default App;

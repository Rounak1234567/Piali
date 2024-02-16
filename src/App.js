import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { useState } from "react";

function App() {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <div class="media-queries">
            <div class="desktop">
              <img src="https://i.ibb.co/cc6Jf5K/Untitled-5.png" alt="Logo" class="mobile-tab-logo" />
              <img src="https://img1.wsimg.com/isteam/stock/Wb0pnbK/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:669,h:500,cg:true" alt="Image" class="desktop-image" />
            </div>
            <div class="mobile-tab">
              <img src="https://i.ibb.co/cc6Jf5K/Untitled-5.png" alt="Logo" class="mobile-tab-logo" />
              <img src="https://img1.wsimg.com/isteam/stock/Wb0pnbK/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:669,h:500,cg:true" alt="Image" class="mobile-tab-image" />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button class="button-27" role="button">Shop Now</button>
          </div>
          <h2>EYE-CATCHING MASTERPIECES EXHIBITION AVAILABLE IN AMAZON & MEESHO</h2>
          <hr/>
          <div class="container">
            <label for="category">Select a category:</label>
            <select id="category" name="category" value={selectedCategory} onChange={handleCategoryChange}>
              <option value="all">All</option>
              <option value="dress">Dress</option>
              <option value="jewellery">Jewellery</option>
              <option value="electronics">Electronics</option>
              <option value="bags">Bags</option>
              <option value="footwear">Footwear</option>
            </select>
          </div>

          <Routes>
            <Route path="/" element={<Shop selectedCategory={selectedCategory} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

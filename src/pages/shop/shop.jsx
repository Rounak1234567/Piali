import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = ({selectedCategory}) => {

  const filteredProducts = selectedCategory === 'all' ? PRODUCTS : PRODUCTS.filter(product => product.category === selectedCategory);
  return (
    <div className="shop">
      <div className="shopTitle">        
        <h1>Our Products</h1>
      </div>
      
      <div className="products">
        {filteredProducts.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

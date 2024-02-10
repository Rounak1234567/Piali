import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage, productLink } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <a href={productLink} target="_blank">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        
        <p>₹ {price}</p>
      </div>
      </a>
      {/* <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button> */}
    </div>
  );
};

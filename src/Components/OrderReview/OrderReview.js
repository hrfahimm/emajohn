/** @format */

//import React, {useEffect, useState} from "react";
import useCart from "../../hooks/useCart";

//import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "../Product/Product.css";
import "./OrderReview.css";
import { clearTheCart, removeFromDb } from "../../utilities/fackdb";
import { useNavigate } from "react-router-dom";
const OrderReview = () => {
  //const [products] = useProducts();
  const [cart, setCart] = useCart();
  //const history = unsHistory();
  const navigate = useNavigate();
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };
  const handleProceedToShipping = () => {
    navigate("/shipping");
    setCart([]);
    clearTheCart();
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem key={product.key} product={product} handleRemove={handleRemove}></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handleProceedToShipping} className="btn-regular">
            Proceed to Shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;

//import React, {useEffect, useState} from "react";
import useCart from "../../hooks/useCart";

import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "../Product/Product.css";
import "./OrderReview.css";
import { clearTheCart, removeFromDb } from "../../utilities/fackdb";
import { useNavigate } from "react-router-dom";
const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  //const history = unsHistory();
  const navigate = useNavigate();
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };
  const handlePleaceOrder = () => {
    navigate("/pleaceOrder");
    setCart([]);
    clearTheCart();
  };

  return (
    <div className="shop-container row">
      <h3>Our Order Review </h3>
      <div className="product-container col-8">
        {cart.map((product) => (
          <ReviewItem product={product} key={product.key} handleRemove={handleRemove} />
        ))}
      </div>
      <div className="cart-container col-3">
        <Cart cart={cart}>
          <button onClick={handlePleaceOrder} className="btn-regular">
            Please Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;

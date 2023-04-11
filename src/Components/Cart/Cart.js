import React from "react";
import "./Cart.css";

const Cart = (props) => {
	const {cart} = props;
	console.log(props.children);
	let totalQuantity = 0;
	let total = 0;
	for (const product of cart) {
		if (!product.quantity) {
			product.quantity = 1;
		}
		total = total + product.price * product.quantity;
		totalQuantity = totalQuantity + product.quantity;
	}
	const shipping = total > 0 ? 15 : 0;
	const tax = (total + shipping) / 10;
	const grandTotal = total + shipping + tax;
	return (
		<div className="cart-order menu-icon">
			<h3>Order</h3>
			<h5>Item Orders--: {totalQuantity}</h5>
			<p>Total---------: {total.toFixed(2)}</p>
			<p>Shipping----: {shipping}</p>
			<p>Tax-----------: {tax.toFixed(2)}</p>
			<h4 classsName="g-total">Grand Total-: {grandTotal.toFixed(2)}</h4>
			{props.children}
		</div>
	);
};

export default Cart;

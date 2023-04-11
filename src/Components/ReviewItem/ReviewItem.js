import React from "react";

const ReviewItem = (props) => {
	const {name, price, quantity, key} = props.product;
	const {handleRemove} = props;
	return (
		<div className="product">
			{/* <div className="product-img"> */}
			{/* <img src={img} alt="" /> */}
			{/* </div> */}
			<div>
				<h3 className="product-name">Name{name}</h3>
				<p>Price {price}</p>
				<p>Quantity {quantity}</p>
				<button onClick={() => handleRemove(key)} className="btn-regular">
					Remove
				</button>
			</div>
		</div>
	);
};

export default ReviewItem;

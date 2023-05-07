import React from "react";

const ReviewItem = (props) => {
  const { name, price, img, key } = props.product;
  const { handleRemove } = props;
  return (
    <div className=" product row">
      <div className="  col-3 " style={{ width: "15rem" }}>
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h4 className="product-name">{name.slice(0, 20)}</h4>

          <h3 className="product-price">Price: {price}</h3>

          <button onClick={() => handleRemove(key)} className="btn-regular">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;

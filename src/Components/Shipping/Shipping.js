/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Shipping.css";
import { clearTheCart, getStoredCart } from "../../utilities/fackdb";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    data.order = savedCart;
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertId) {
          alert("order proside");
          clearTheCart();
          reset();
        }
      });
  };
  return (
    <div>
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />

        <input defaultValue={user.email} {...register("email", { required: true })} />
        {errors.email && <span className="error">This field is required</span>}
        <input placeholder="Address" defaultValue="" {...register("address")} />
        <input placeholder="City" defaultValue="" {...register("city")} />
        <input placeholder="phone number" defaultValue="" {...register("phone")} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;

/** @format */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fackdb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import useCart from "../../hooks/useCart";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [displayProducts, setDisplayProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 10;
  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setDisplayProducts(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products, setCart]);

  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    // console.log(product);

    setCart(newCart);
    addToDb(product.key);
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = products.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
    setDisplayProducts(matchedProducts);
  };

  return (
    <div>
      <div className="search-container">
        <input className="input-fild" type="text" placeholder="Search Here..." onChange={handleSearch} />
      </div>

      <div className="shop-container row">
        <>
          <div className="product-container col-8">
            {displayProducts.map((product) => (
              <Product handleAddToCart={handleAddToCart} key={product.key} product={product}></Product>
            ))}
            <div className="pagination col-8">
              {[...Array(pageCount).keys()].map((number) => (
                <button className={number === page ? "selected" : ""} key={number} onClick={() => setPage(number)}>
                  {number}
                </button>
              ))}
            </div>
          </div>
        </>

        <div className="cart-container col-3">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="btn-regular"> Review order</button>
            </Link>
          </Cart>
        </div> 
      </div>
    </div>
  );
};

export default Shop;

import React, { useContext } from "react";
import { CartHolder } from "../Context";


const SingleProduct = ({ product}) => {

    const { cart,setCart }= useContext(CartHolder);
  return (
    <div className="products">
      <img src={product.image} alt={product.name} />
      <div className="productdesc">
        <span style={{ fontWeight: 700 }}>{product.name}</span>
        <span>Rs.{product.price.substring(0, 3)}</span>
      </div>
      {cart.includes(product) ? (
        <button
          onClick={(e) => {
            setCart(
              cart.filter((prod) => {
                return prod.id !== product.id;
              })
            );
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={(e) => {
            setCart([...cart, product]);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;

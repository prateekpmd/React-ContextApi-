import { useContext } from "react";
import { CartHolder } from "../Context";
import SingleProduct from "./SingleProduct";


const Cart = () => {
  const { cart, setCart } = useContext(CartHolder);
  const reducell = cart.reduce((acc, curr) => {
    return acc + Number(curr.price);
  }, 0);

  return (
    <div>
      <span style={{ fontSize: "30px" }}>My Cart</span>
      <br></br>
      <span style={{ fontSize: "30px" }}>Total Rs.{reducell} </span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct
            product={prod}
            cart={cart}
            setCart={setCart}
            key={prod.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const toCart = () => {
    navigate("/cart");
  };

  return (
    <div onClick={toCart}>
      Cart
      <div className="cart-indicator"></div>
    </div>
  );
};

export default Cart;

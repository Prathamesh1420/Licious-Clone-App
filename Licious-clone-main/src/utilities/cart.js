import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const toCart = () => {
    // const currentUser = JSON.parse(sessionStorage.getItem("user")) ?? {};
    // console.log("From cart", currentUser);
    // if (currentUser.userName !== null) {
    //   //let arr = [];
    //   JSON.parse(localStorage.getItem("accounts"))?.forEach((element) => {
    //     console.log("element", element);
    //     console.log("username", currentUser.userName);
    //     if (element.userName === currentUser.userName) {
    //       element.cart = currentUser.cart;
    //       localStorage.setItem("accounts", JSON.stringify(element));
    //     }
    //   });
    // }
    //cart is cart page only
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

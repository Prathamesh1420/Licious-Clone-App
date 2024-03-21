import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SmallCard from "../components/small-card";
import { MyContext } from "../context/app-context";

const CartPage = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  let spam = 1;
  let total = 0;

  context.cart.forEach((e) => (total += e.price * e.quantity));

  const remove = (name) => {
    console.log("Before", context.cart);

    context.cart = context.cart.filter(
      (c) => c.name.toLowerCase() !== name.toLowerCase()
    );
    context.setCart(context.cart);

    const currentUser = JSON.parse(sessionStorage.getItem("user")) ?? [];
    currentUser.cart = context.cart;
    sessionStorage.setItem("user", JSON.stringify(currentUser));

    //For decreasing quantity
    // if (itemFind.quantity > 1) {
    //   console.log("enter if ");
    //   console.log("quantiyt reduced");
    //   itemFind.quantity -= 1;
    // } else {
    //   console.log("enter else ");
    //   context.cart = context.cart.filter((c) => c.id !== id);
    //   context.setCart(context.cart);
    // }

    console.log("After", context.cart);
  };
  const verify = () => {
    if (context.logInStatus === true) {
      if (total === 0) {
        alert("Please Add Item to Cart");
        navigate("/");
      } else {
        navigate("/payment-page", { state: total });
      }
    } else {
      alert("Please Login To Checkout");
    }
  };

  return (
    <div className="main">
      <div className="page-title-heading">
        <h3>
          <span>Total : ₹{total}</span>
        </h3>
        <button onClick={verify} className="active-color-btn checkout-btn">
          Checkout
        </button>
      </div>
      <div className="list">
        {context.cart.map((e) => {
          return (
            <SmallCard
              key={spam++}
              image={e.image}
              name={e.name}
              price={e.price}
              quantity={e.quantity}
              net={e.net}
              unit={e.unit}
            >
              <button
                onClick={(event) => {
                  console.log("Button ", e.name);
                  remove(e.name);
                  event.stopPropagation();
                }}
                className="active-color-btn"
              >
                Remove
              </button>
            </SmallCard>
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;

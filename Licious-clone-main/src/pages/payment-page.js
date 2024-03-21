import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MyContext } from "../context/app-context";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const context = useContext(MyContext);
  const [method, setMethod] = useState("debit");

  console.log(context.cart);
  const showForm = (m) => {
    switch (m) {
      case "debit":
        return (
          <>
            <input
              placeholder="XXX-XXX-XXX"
              minLength="12"
              maxLength="12"
              type="number"
              required
            />
            <input placeholder="cvv" minLength="3" maxLength="3" />
          </>
        );

      case "credit":
        return (
          <>
            <input
              placeholder="XXX-XXX-XXX"
              minLength="12"
              maxLength="12"
              type="number"
              required
            />
            <input placeholder="cvv" minLength="3" maxLength="3" />
          </>
        );

      case "upi":
        return (
          <>
            <input placeholder="UPI Id" required />
          </>
        );

      default:
        break;
    }
  };

  function pay() {
    alert("Payment successful");
    console.log("before ", context.cart.length);
    //also need to clear context.cart and sesssionstorage cart
    while (context.cart.length > 0) {
      context.cart.pop();
    }

    const currentUser = JSON.parse(sessionStorage.getItem("user")) ?? {};
    currentUser.cart = context.cart;
    sessionStorage.setItem("user", JSON.stringify(currentUser));

    console.log("after", context.cart);
    navigate("/", alert("Cart Is Empty Now"));
  }
  return (
    <div className="main">
      <div className="page-title-heading">
        <h4>Please select your payment method-</h4>
        <h4>
          <strong> Total : ₹{location.state}</strong>
        </h4>
      </div>
      <div className="radio-flexbox">
        <div id="pay-head">
          <input
            onClick={() => setMethod("debit")}
            type="radio"
            id="debit"
            name="method"
            value="debit-card"
            defaultChecked
          />
          <label htmlFor="method">
            <h5>Debit Card</h5>
          </label>
        </div>

        <div>
          <input
            onClick={() => setMethod("credit")}
            type="radio"
            id="credit"
            name="method"
            value="credit-card"
          />
          <label htmlFor="method">
            <h5>Credit Card</h5>
          </label>
        </div>

        <div>
          <input
            onClick={() => setMethod("upi")}
            type="radio"
            id="debit"
            name="method"
            value="debit-card"
          />
          <label htmlFor="method">
            <h5>UPI</h5>
          </label>
        </div>
      </div>

      <div className="create-account-form">
        {showForm(method)}
        <button className="active-color-btn center-btn" onClick={pay}>
          PAY
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;

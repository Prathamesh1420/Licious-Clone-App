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
            <h3 style={{ textAlign: "center" }}> Debit Card Details</h3>
            <input
              placeholder="XXX-XXX-XXX-XXX"
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
            <h3 style={{ textAlign: "center" }}> Credit Card Details</h3>
            <input
              placeholder="XXX-XXX-XXX-XXX"
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
            <h3 style={{ textAlign: "center" }}> UPI ID Details</h3>
            <input placeholder="UPI ID" required />
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
    navigate("/", alert("Cart is empty now"));
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
          <button
            onClick={() => setMethod("debit")}
            type="radio"
            id="debit"
            name="method"
            value="debit-card"
          >
            Debit Card
          </button>
        </div>

        <div>
          <button
            onClick={() => setMethod("credit")}
            id="credit"
            name="method"
            value="credit-card"
          >
            Credit Card
          </button>
        </div>

        <div>
          <button
            onClick={() => setMethod("upi")}
            id="upi"
            name="method"
            value="upi"
          >
            UPI
          </button>
        </div>
      </div>

      <div className="create-account-form">
        {showForm(method)}
        <button
          className="active-color-btn center-btn"
          onClick={pay}
          style={{ borderRadius: "5px", padding: "4px 20px" }}
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;

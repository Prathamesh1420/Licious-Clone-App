import { useContext, useState } from "react";
import { MyContext } from "../context/app-context";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const navigate = useNavigate();

  const context = useContext(MyContext);
  const emptyObject = {};
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const addAccount = () => {
    emptyObject.firstName = firstName;
    emptyObject.lastName = lastName;
    emptyObject.userName = userName;
    emptyObject.password = password;
    emptyObject.cart = context.cart;
    const prevRecords = JSON.parse(localStorage.getItem("accounts")) ?? [];
    console.log("previous accounts", prevRecords);
    // checking if account already present & we can also use find method
    let match = prevRecords.filter((e) => e.userName === userName);
    console.log(match);
    if (match.length !== 0) {
      alert("Account already exists. Please login");
    } else {
      if (
        firstName != null &&
        lastName != null &&
        userName != null &&
        password != null
      ) {
        localStorage.setItem(
          "accounts",
          JSON.stringify([...prevRecords, emptyObject])
        );
        alert("Account Created Successfully");
        navigate("/");
      }
    }
  };
  return (
    <div className="main">
      <div className="page-title-heading">
        <h3>Create New Account</h3>
      </div>
      <form className="create-account-form">
        <input
          id="first-name"
          placeholder="First name"
          type="text"
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <input
          id="last-name"
          placeholder="Last name"
          type="text"
          required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <input
          id="username"
          placeholder="Email"
          type="email"
          required
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
        <input
          id="password"
          placeholder="Password"
          type="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button
          className="center-btn active-color-btn"
          onClick={addAccount}
          style={{ borderRadius: "8px", padding: "5px 8px" }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccountPage;

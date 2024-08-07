import React, { useContext } from "react";
import { MyContext } from "../context/app-context";

const Logout = (props) => {
  const context = useContext(MyContext);

  const clear = () => {
    const currtUser = JSON.parse(sessionStorage.getItem("user")) ?? {};
    const userUsername = currtUser.userName;
    const userCart = currtUser.cart;

    const records = JSON.parse(localStorage.getItem("accounts")) ?? [];
    const updatedRecords = records.map((e) =>
      e.userName === userUsername ? { ...e, cart: userCart } : e
    );

    localStorage.setItem("accounts", JSON.stringify(updatedRecords));

    if (context.logInStatus !== false && context.currentUser !== null) {
      alert("Logout Successfully");
      context.setCurrentUser(null);
      context.setLogInStatus(false);
      sessionStorage.clear();
      sessionStorage.removeItem("user");
      window.location.reload();
    }
  };

  return (
    <div>
      <div onClick={clear} style={{ margin:"0px 10px" }}>
        Logout
      </div>
    </div>
  );
};

export default Logout;

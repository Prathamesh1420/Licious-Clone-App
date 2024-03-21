import React, { useState } from "react";

export const MyContext = React.createContext();

export const ApplicationContextProvider = (props) => {
  const [logInStatus, setLogInStatus] = useState(false);

  const currentUser = JSON.parse(sessionStorage.getItem("user"));

  const [cart, setCart] = useState(
    //setting a user cart to setItem in sessionstorage
    currentUser !== null ? currentUser.cart : []
  );

  const value = {
    logInStatus,
    setLogInStatus,
    cart,
    setCart,
  };

  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};

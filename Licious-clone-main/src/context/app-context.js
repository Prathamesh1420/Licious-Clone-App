import React, { useState, useEffect } from "react";

// Context
export const MyContext = React.createContext();

export const ApplicationContextProvider = (props) => {
  const [logInStatus, setLogInStatus] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    console.log("user", user);
    setCurrentUser(user);
    if (user !== null) {
      setCart(user.cart || []);
      setLogInStatus(true);
    }
  }, []);

  const value = {
    logInStatus,
    setLogInStatus,
    cart,
    setCart,
    currentUser,
    setCurrentUser,
  };

  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
};

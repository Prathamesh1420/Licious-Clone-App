import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/app-context";
import Logout from "./logout";

const Login = () => {
  const context2 = useContext(MyContext);
  const [login, setLogin] = useState("Login");
  const fetch = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    if (context2.logInStatus !== false && context2.currentUser !== null) {
      setLogin(`Hi, ${fetch.firstName}`);
    } else {
      setLogin("Login");
    }
  }, [context2.logInStatus, context2.currentUser]);

  const showLogin = (loginText) => {
    console.log(loginText);
    if (loginText === "Login") {
      document.getElementById("login-modal").showModal();
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <div style={{ marginLeft:"10px" }} onClick={() => showLogin(login)} >{login}</div>
      {login !== "Login" && <Logout />}
    </>
  );
};

export default Login;

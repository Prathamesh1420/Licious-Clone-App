import { useContext } from "react";
import { MyContext } from "../context/app-context";

const Login = () => {
  const context = useContext(MyContext);
  let loginText = "Login";
  const fetch = JSON.parse(sessionStorage.getItem("user"));
  if (context.logInStatus === false && fetch === null) loginText = "Login";
  else {
    loginText = `Hi, ${fetch.firstName}`;
  }
  const showLogin = (lt) => {
    if (lt === "Login") {
      return document.getElementById("login-modal").showModal();
    } else {
      sessionStorage.removeItem("user");
      window.location.reload();
      alert("Logout Successfully");
    }
  };
  return <div onClick={(e) => showLogin(loginText)}>{loginText}</div>;
};

export default Login;

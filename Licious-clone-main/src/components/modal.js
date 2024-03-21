import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/app-context";

const Modal = () => {
  const navigate = useNavigate();
  const context = useContext(MyContext);

  const closeModal = () => {
    document.querySelector("#login-modal").close();
  };

  const login = () => {
    const username = document.getElementById("l-username").value;
    const password = document.getElementById("l-password").value;

    const records = JSON.parse(localStorage.getItem("accounts")) ?? [];

    const match = records.filter((e) => e.userName === username);
    if (match.length === 0)
      alert("Account does not exist. Create new account.");
    else if (match[0]?.password === password) {
      alert(`welcome ${match[0].firstName}`);
      if (match[0].cart !== null) context.setCart(match[0].cart);
      context.setLogInStatus(true);
      sessionStorage.setItem("user", JSON.stringify(match[0]));
    } else if (match[0].password !== password) alert("Incorrect password");
  };

  const toCreateAccountPage = () => {
    navigate("/create-account");
    closeModal();
  };

  return (
    <dialog id="login-modal">
      <div className="modal-main">
        <div className="modal-header">
          <h3>Login</h3>
          <button onClick={closeModal} name="×">
            x
          </button>
        </div>
        <div className="modal-body">
          <form method="dialog">
            <input
              id="l-username"
              placeholder="Username"
              type="email"
              required
            />
            <input
              id="l-password"
              placeholder="Password"
              type="password"
              required
            />
            <button onClick={login} className="wide-btn" type="submit">
              Login
            </button>
          </form>
        </div>
        <button onClick={toCreateAccountPage} className="wide-btn">
          Create account
        </button>
      </div>
    </dialog>
  );
};

export default Modal;

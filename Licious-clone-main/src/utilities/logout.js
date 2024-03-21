import React from "react";

const Logout = (props) => {
  const clear = () => {
    sessionStorage.clear();
    alert("Logout Successfully");
  };
  return (
    <div>
      <dialog id="logout">
        <div>
          <button onClick={(e) => clear()}>Logout</button>
        </div>
      </dialog>
    </div>
  );
};
export default Logout;

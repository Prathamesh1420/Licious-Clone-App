import { useNavigate } from "react-router-dom";
import Cart from "../utilities/cart";
import Login from "../utilities/login";

const Navbar = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  const handleSearch = () => {
    setTimeout(() => navigate("/search"), 1000);
  };

  return (
    <nav className="navbar navbar-wrapper">
      <div onClick={toHome} className="navbar-brand">
        The Meat Shop
      </div>
      {/* <form onClick={handleSearch}> */}
      <input
        onClick={handleSearch}
        id="search-input"
        type="search"
        placeholder="Search..."
      />
      {/* <button type="submit">go</button> */}
      {/* </form> */}
      <Login />
      <Cart />
    </nav>
  );
};

export default Navbar;

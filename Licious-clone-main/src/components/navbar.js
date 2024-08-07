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
      <input
        onClick={handleSearch}
        id="search-input"
        type="search"
        placeholder="Search for any delicious product"
      />
      <Login />
      <Cart />
    </nav>
  );
};

export default Navbar;

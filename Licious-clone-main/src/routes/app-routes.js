import { Route, Routes } from "react-router-dom";
import Modal from "../components/modal";
import CartPage from "../pages/cart-page";
import CategoryPage from "../pages/category-page";
import CreateAccountPage from "../pages/create-account";
import Home from "../pages/home";
import ItemDetails from "../pages/item-details";
import PaymentPage from "../pages/payment-page";
import Search from "../pages/search";

const AppRoutes = () => {
  return (
    <>  
      <Modal />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/item-detail" element={<ItemDetails />}></Route>
        <Route path="/create-account" element={<CreateAccountPage />}></Route>
        <Route path="/category-page" element={<CategoryPage />}></Route>
        <Route path="payment-page" element={<PaymentPage />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;

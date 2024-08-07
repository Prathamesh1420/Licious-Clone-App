import { useContext, useEffect } from "react";
import { MyContext } from "../context/app-context";

const AddToCart = (props) => {
  const context = useContext(MyContext);
  const currentItem = {
    name: props.name,
    image: props.image,
    price: props.price,
    net: props.net,
    unit: props.unit,
    id: context.cart ? context.cart.length : 0,
  };

  const checkItemInCart = (item, arr) => {
    //comparing from existing(item) and new item(arr)

    let found = false;
    //Checking if the item is already present in cart and if present then increasing the quantity
    arr.forEach((e) => {
      if (e.name === item.name) {
        e.quantity++;
        found = true;
        return;
      }
    });
    //if not present then adding/pusing item in array and quantity as 1
    if (!found) {
      item.quantity = 1;
      arr.push(item);
    }
  };

  const addToCart = () => {
    if (context.currentUser === null) {
      return alert("Plese Login First To Add");
    }
    alert("Successfully Added To Cart");
    let arr = context.cart;
    console.log("this is the context.cart", arr); //array of objects from cart

    checkItemInCart(currentItem, arr);
    //always updating new added Cart using setCart
    context.setCart(arr);
    console.log("this is new", context.cart);
    //whenver the context.cart will change it will also update in SessionStorage using setItem
    const currentUser = JSON.parse(sessionStorage.getItem("user")) ?? {};
    currentUser.cart = context.cart;

    //Inserting in sessionStorage
    sessionStorage.setItem("user", JSON.stringify(currentUser));
  };

  return (
    <button
      onClick={(e) => {
        addToCart();
        //for avoiding double click
        e.stopPropagation();
      }}
      className="add-to-cart-btn wide-btn"
      style={{ padding: "2px 20px", borderRadius: "5px" }}
    >
      Add
    </button>
  );
};

export default AddToCart;

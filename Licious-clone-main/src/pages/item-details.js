import { useLocation } from "react-router-dom";
import AddToCart from "../components/add-to-cart-btn";
import { Items } from "../data/items";

const ItemDetails = () => {
  const location = useLocation();
  const details = Items.filter((e) => e.name === location.state.name)[0];

  return (
    <div className="main">
      <div className="detailed-description">
        <img src={details.imgUrl} alt="item" />
        <div>
          <div className="page-title-heading">
            <h3>{details.name}</h3>
          </div>
          <h6>
            Net wt. {details.net} {details.unit}
          </h6>
          <p>{details.des}</p>
          <h4 className="price">₹{details.price}</h4>
          <AddToCart
            image={details.imgUrl}
            name={details.name}
            price={details.price}
            net={details.net}
            unit={details.unit}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

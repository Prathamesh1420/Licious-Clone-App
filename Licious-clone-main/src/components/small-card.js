import { useNavigate } from "react-router-dom";

const SmallCard = (props) => {
  const { image, name, price, net, Wt, unit } = props;
  const navigate = useNavigate();
  const showDetails = () => {
    navigate("/item-detail", {
      state: { name: props.name },
    });
  };
  return (
    <div className="small-card" onClick={showDetails}>
      <img src={image} alt="item" style={{ borderRadius: "7px" }} />
      <div>
        <p>{name}</p>
        <p>₹{price}.00</p>
        <p>
          {Wt}<span> </span>
          {unit}
        </p>
        {props.quantity && <p>Quantity : {props.quantity}</p>}
        {props.children}
      </div>
    </div>
  );
};

export default SmallCard;

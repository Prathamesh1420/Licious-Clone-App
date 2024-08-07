import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  const showDetails = () => {
    navigate("/category-page", {
      state: { name: props.name },
    });
  };
  return (
    <div className="normal-card" onClick={showDetails}>
      <img src={props.image} alt="item" className="card-img" style={{borderRadius:"7px"}}/>
      <h5>{props.name}</h5>
      {props.children}
    </div>
  );
};

export default Card;

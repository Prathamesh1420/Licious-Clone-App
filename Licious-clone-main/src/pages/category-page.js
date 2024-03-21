import { useLocation } from "react-router-dom";
import AddToCart from "../components/add-to-cart-btn";
import SmallCard from "../components/small-card";
import { Items } from "../data/items";

//location is use when state passed in link or navigate property
const CategoryPage = () => {
  const location = useLocation();
  let spam = 1;
  //we only have fish in name not fish&seafood so we are filtering
  const filterName =
    location.state.name.toLowerCase() === "fish & seafood"
      ? "fish"
      : location.state.name.toLowerCase();
  return (
    <div className="main">
      <div className="page-title-heading">
        <h3>Showing search result for {location.state.name}</h3>
      </div>
      <div className="list">
        {/* fitering if the name is present in name from item.js */}
        {Items.filter((e) => e.name.toLowerCase().includes(filterName)).map(
          (e) => {
            return (
              <SmallCard
                key={spam++}
                image={e.imgUrl}
                name={e.name}
                price={e.price}
                net_tag={e.net_tag}
                Wt={e.net}
                unit={e.unit}
              >
                <AddToCart
                  image={e.imgUrl}
                  name={e.name}
                  price={e.price}
                  net={e.net}
                  unit={e.unit}
                />
              </SmallCard>
            );
          }
        )}
      </div>
    </div>
  );
};

export default CategoryPage;

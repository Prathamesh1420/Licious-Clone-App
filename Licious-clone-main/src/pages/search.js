import { useState } from "react";
import AddToCart from "../components/add-to-cart-btn";
import SmallCard from "../components/small-card";
import { Items } from "../data/items";

const Search = () => {
  let spam = 1;
  let input = document.getElementById("search-input");
  const [searchResult, setSearchResult] = useState(
    Items.filter((e) =>
      e.name.toLowerCase().includes(input.value.toLowerCase())
    )
  );

  input.addEventListener("change", () => {
    setSearchResult(
      Items.filter((e) =>
        e.name.toLowerCase().includes(input.value.toLowerCase())
      )
    );
  });

  return (
    <div className="main">
      <div className="page-title-heading">
        <h3>Showing search result for {input.value}</h3>
      </div>
      <div className="list">
        {searchResult.map((e) => {
          return (
            <SmallCard
              key={spam++}
              image={e.imgUrl}
              name={e.name}
              price={e.price}
            >
              <AddToCart image={e.imgUrl} name={e.name} price={e.price} />
            </SmallCard>
          );
        })}
      </div>
    </div>
  );
};

export default Search;

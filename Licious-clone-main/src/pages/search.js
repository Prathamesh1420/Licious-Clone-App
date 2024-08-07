import { useState, useEffect } from "react";
import AddToCart from "../components/add-to-cart-btn";
import SmallCard from "../components/small-card";
import { Items } from "../data/items";

const Search = () => {
  const [searchResult, setSearchResult] = useState(Items);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const input = document.getElementById("search-input");
    const handleInputChange = () => {
      setSearchTerm(input.value);
    };
    input.addEventListener("input", handleInputChange);

    return () => {
      input.removeEventListener("input", handleInputChange);
    };
  }, []);

  useEffect(() => {
    setSearchResult(
      Items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="main">
      <div className="page-title-heading">
        <h3>Showing search result - {searchTerm}</h3>
      </div>
      <div className="list">
        {searchResult.map((item, index) => (
          <SmallCard
            key={index}
            image={item.imgUrl}
            name={item.name}
            price={item.price}
          >
            <AddToCart
              image={item.imgUrl}
              name={item.name}
              price={item.price}
            />
          </SmallCard>
        ))}
      </div>
    </div>
  );
};

export default Search;

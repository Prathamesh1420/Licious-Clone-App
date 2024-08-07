import Card from "../components/card";
import { Category } from "../data/category";

const Home = () => {
  //onWheel Event Passed with scrollLeft using querySelector
  // const horizontalScroll = (event) => {
  //   document.querySelector(".horizontal-list").scrollLeft += 3 * event.deltaY;
  // };
  let spam = 1;
  return (
    <div className="main">
      <div className="page-title-heading">
        <h3>Shop by catagories</h3>
      </div>

      <div
        //for horizontalScroll
        // onWheel={(eventPass) => {
        //   horizontalScroll(eventPass);
        // }}
        className="horizontal-list"
      >
        {Category.map((e) => {
          return <Card key={spam++} image={e.imgUrl} name={e.name} />;
        })}
      </div>
    </div>
  );
};

export default Home;

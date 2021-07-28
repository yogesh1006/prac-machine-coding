// import "./productcard.css";

import { useData } from "../../context/data-context";

const Sidebar = () => {
  const { state, dispatch } = useData();
  const sortHandler = (e) => {
    if (e.target.value === "low_to_high") {
      dispatch({ type: "PRICE_LOW_TO_HIGH", payload: e.target.value });
    } else {
      dispatch({ type: "PRICE_HIGH_TO_LOW", payload: e.target.value });
    }
  };
  return (
    <div className="sidebar">
      <div>
        <b>Flipkart</b>
      </div>
      <div className="sort">
        <b>Sort</b>
        <br />
        <select
          className="sortSelect"
          value={state.priceSort}
          onChange={(e) => sortHandler(e)}
        >
          <option value="high_to_low">Price: High to Low</option>
          <option value="low_to_high">Price: Low to High</option>
        </select>
      </div>
      <div className="sort-by-brand"></div>
    </div>
  );
};

export default Sidebar;

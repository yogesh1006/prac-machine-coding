import "./sidebar.css";

import { useData } from "../../context/data-context";
const sizes = ["S", "M", "L", "XL"];
const idealFor = ["men", "women"];
const brands = ["REEBOK", "JACK & JONES", "ADIDAS", "WRANGLER", "NIKE", "PUMA"];

const Sidebar = () => {
  const { state, dispatch } = useData();
  console.log("tghjhgfd", state);

  const sortHandler = (e) => {
    if (e.target.value === "low_to_high") {
      dispatch({ type: "PRICE_LOW_TO_HIGH", payload: e.target.value });
    } else {
      dispatch({ type: "PRICE_HIGH_TO_LOW", payload: e.target.value });
    }
  };
  return (
    <div className="sidebar">
      <div style={{ marginBottom: "1rem" }}>
        <h1>Flipkart</h1>
      </div>
      <div className="clear-filters">
        <button onClick={() => dispatch({ type: "CLEAR_FILTERS" })}>
          clear all
        </button>
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
      <div className="sort-by-brand">
        <h4>Brands</h4>

        {brands.map((brand) => {
          return (
            <div key={brand}>
              <input
                type="checkbox"
                id="brand"
                checked={state.filters.sortByBrand.includes(brand)}
                onChange={() =>
                  dispatch({ type: "SORT_BY_BRAND", payload: brand })
                }
              ></input>
              <label htmlFor="brand">{brand}</label>
            </div>
          );
        })}
      </div>
      <div className="sort-by-idealfor">
        <h4>Ideal For</h4>

        {idealFor.map((item) => {
          return (
            <div key={item} className="" style={{ color: "black" }}>
              <input
                style={{ color: "black" }}
                type="checkbox"
                id="idealFor"
                checked={state.filters.sortByIdealFor.includes(item)}
                onChange={() =>
                  dispatch({ type: "SORT_BY_IDEALFOR", payload: item })
                }
              ></input>
              <label htmlFor="idealFor">{item}</label>
            </div>
          );
        })}
      </div>
      <div className="sort-by-sizes">
        <h4>Sizes</h4>

        {sizes.map((size) => {
          return (
            <div key={size}>
              <input
                type="checkbox"
                id="sizes"
                checked={state.filters.sortBySize.includes(size)}
                onChange={() =>
                  dispatch({ type: "SORT_BY_SIZES", payload: size })
                }
              ></input>
              <label htmlFor="sizes">{size}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

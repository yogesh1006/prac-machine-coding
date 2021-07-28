import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

const dataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const filterData = (data) => {
    console.log("", data);
    if (data) {
      let filteredData = [...data];

      if (state.filters.sortByBrand.length !== 0) {
        filteredData = filteredData.filter((product) =>
          state.filters.sortByBrand.includes(product.brand)
        );
      }
      if (state.filters.sortBySize.length !== 0) {
        filteredData = filteredData.filter((product) =>
          state.filters.sortBySize.includes(product.size)
        );
      }
      if (state.filters.sortByIdealFor.length !== 0) {
        filteredData = filteredData.filter((product) =>
          state.filters.sortByIdealFor.includes(product.idealfor)
        );
      }

      return filteredData;
    }
    return [];
  };

  const sortData = (data) => {
    if (state.filters.priceSort === "high_to_low") {
      return [...data].sort((a, b) => b.price - a.price);
    }
    if (state.filters.priceSort === "low_to_high") {
      return [...data].sort((a, b) => a.price - b.price);
    }

    return data;
  };

  const sortedData = sortData(state.products);
  const filteredData = filterData(sortedData);

  return (
    <dataContext.Provider value={{ state, dispatch, filteredData }}>
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);

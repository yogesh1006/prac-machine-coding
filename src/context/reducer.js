import { data } from "./data";

export const initialState = {
  products: data,
  filters: {
    priceSort: "",
    sortByBrand: [
      "REEBOK",
      "JACK & JONES",
      "ADIDAS",
      "WRANGLER",
      "NIKE",
      "PUMA"
    ],
    sortByIdealFor: ["men", "women"],
    sortBySize: ["S", "M", "L", "XL"]
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload
      };

    case "PRICE_HIGH_TO_LOW":
      return {
        ...state,
        filters: {
          ...state.filters,
          priceSort: action.payload
        }
      };

    case "PRICE_LOW_TO_HIGH":
      return {
        ...state,
        filters: {
          ...state.filters,
          priceSort: action.payload
        }
      };

    case "SORT_BY_BRAND":
      return state.filters.sortByBrand.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              sortByBrand: state.filters.sortByBrand.filter(
                (brand) => brand !== action.payload
              )
            }
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              sortByBrand: state.filters.sortByBrand.concat(action.payload)
            }
          };

    case "SORT_BY_SIZES":
      return state.filters.sortBySize.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              sortBySize: state.filters.sortBySize.filter(
                (brand) => brand !== action.payload
              )
            }
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              sortBySize: state.filters.sortBySize.concat(action.payload)
            }
          };

    case "SORT_BY_IDEALFOR":
      return state.filters.sortByIdealFor.includes(action.payload)
        ? {
            ...state,
            filters: {
              ...state.filters,
              sortByIdealFor: state.filters.sortByIdealFor.filter(
                (brand) => brand !== action.payload
              )
            }
          }
        : {
            ...state,
            filters: {
              ...state.filters,
              sortByIdealFor: state.filters.sortByIdealFor.concat(
                action.payload
              )
            }
          };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          priceSort: "",
          sortByBrand: [],
          sortByIdealFor: [],
          sortBySize: []
        }
      };

    default:
      return { state };
  }
};

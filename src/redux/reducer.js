function reducer(state, action) {
  switch (action.type) {
    case "ADDTOCART":
      return {
        ...state,
        productList: (() => {
          let isUpdate = false;
          const newState = state.productList.map((product) => {
            if (product.idMeal === action.payload.idMeal) {
              isUpdate = true;
              return { ...product, total: product.total + 1 };
            }
            return product;
          });
          return isUpdate ? newState : [...newState, action.payload];
        })(),
      };
    case "LOADCARTDATA":
      return {
        ...state,
        productList: [...state.productList, ...action.payload],
      };
    case "DECREASEQUANTITYOFPRODUCT":
      return {
        ...state,
        productList: state.productList.map((product) => {
          if (product.idMeal === action.payload.idMeal && product.total > 1) {
            return { ...product, total: product.total - 1 };
          }
          return product;
        }),
      };
    case "REMOVEPRODUCT":
      return {
        ...state,
        productList: state.productList.filter(
          (product) => product.idMeal !== action.payload.idMeal
        ),
      };
    case "CHANGEQUATITYWITHNUMBER":
      return {
        ...state,
        productList: state.productList.map((product) => {
          if (product.idMeal === action.payload.idMeal) {
            return { ...product, total: action.payload.quantity };
          }
          return product;
        }),
      };
    default:
      return state;
  }
}
export default reducer;

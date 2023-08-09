import { Outlet } from "react-router-dom";
import { createContext, useEffect } from "react";
import Cart from "../component/cart/cart";
import createReduxStore from "../redux/createReduxStore";
import reducer from "../redux/reducer";
import getCartFromCookie from "../util/getCartFromCookie";
import { loadCartData } from "../redux/createAction";

export const ProductContext = createContext({});

const store = createReduxStore(reducer);

function ProductLayout() {
  useEffect(() => {
    const shoppingCart = getCartFromCookie(document.cookie);
    shoppingCart && store.dispatch(loadCartData(shoppingCart.productList));
  }, []);
  return (
    <article className="[&>section]:w-full [&>section]:h-[calc((100vh_-_3rem)/2)] [&>section]:overflow-hidden md:[&>section]:h-[calc(100vh_-_3rem)] md:flex">
      <ProductContext.Provider value={store}>
        <Outlet />
        <Cart></Cart>
      </ProductContext.Provider>
    </article>
  );
}
export default ProductLayout;

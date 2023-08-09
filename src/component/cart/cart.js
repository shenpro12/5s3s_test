import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../layout/productLayout";
import CartHeader from "../cart_header/cartHeader";
import CartTab from "./cartTab";

function Cart() {
  const store = useContext(ProductContext);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [tabActive, setTabActive] = useState("cart");

  const selectTabHandler = (tab) => {
    setTabActive(tab);
  };

  useEffect(() => {
    const onChangeState = (state) => {
      setShoppingCart(state.productList);
      document.cookie = `shoppingCart=${JSON.stringify(state)}; path=/`;
    };
    store.subscribe(onChangeState);
  }, []);
  return (
    <section className="md:border-l md:border-black/10">
      <CartHeader
        tabActive={tabActive}
        onSelectTab={selectTabHandler}
      ></CartHeader>
      {tabActive === "cart" && (
        <CartTab shoppingCart={[...shoppingCart].reverse()}></CartTab>
      )}
    </section>
  );
}
export default Cart;

import { faClose, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ProductContext } from "../../layout/productLayout";
import {
  addTocart,
  changeQuantityWithNumber,
  decreaseQuantity,
  removeProduct,
} from "../../redux/createAction";

function CartTab({ shoppingCart }) {
  const store = useContext(ProductContext);
  const increaseQuantityProductHandler = (product) => {
    store.dispatch(addTocart(product));
  };
  const decreaseQuantityProductHandler = (product) => {
    store.dispatch(decreaseQuantity(product));
  };
  const removeProductHandler = (product) => {
    store.dispatch(removeProduct(product));
  };
  const changeQuantityInputHandler = (e, idMeal) => {
    store.dispatch(
      changeQuantityWithNumber({
        quantity: e.target.value,
        idMeal,
      })
    );
  };
  const inputFocusOutHandler = (e, idMeal) => {
    if (!parseInt(e.target.value)) {
      store.dispatch(
        changeQuantityWithNumber({
          quantity: 1,
          idMeal,
        })
      );
    }
  };
  const getTotalPrice = () => {
    let count = 0;
    shoppingCart.map((product) => {
      count += product.price * product.total;
    });
    return count;
  };
  return (
    <article className="w-full h-full flex flex-col">
      <section className="w-full h-2/4 md:flex-1 overflow-y-auto custom-scrollbar px-3 pb-3">
        <ul>
          {shoppingCart.map((product) => (
            <li
              key={product.idMeal}
              className="flex items-center flex-wrap justify-center py-3 border-b-2 border-black/10"
            >
              <section className="pl-3 pr-6 text-black/40 text-sm">
                <FontAwesomeIcon
                  icon={faClose}
                  className="hover:cursor-pointer hover:text-black duration-150"
                  onClick={() => removeProductHandler(product)}
                ></FontAwesomeIcon>
              </section>
              <section className="flex items-center flex-1">
                <section className="w-8 h-8">
                  <img
                    src={product.strMealThumb}
                    className="w-full h-full object-cover"
                    alt="product thumbnail"
                  />
                </section>
                <h3 className="truncate px-6 flex-1 font-semibold">
                  {product.strMeal}
                </h3>
              </section>
              <section className="flex items-center">
                <FontAwesomeIcon
                  className="flex-1 bg-bars h-4 p-2 text-white text-sm hover:cursor-pointer hover:bg-bars/90 duration-150"
                  icon={faMinus}
                  onClick={() => decreaseQuantityProductHandler(product)}
                ></FontAwesomeIcon>
                <input
                  value={product.total}
                  className="w-9 h-8 border text-center border-black/10 outline-none focus:border-sky-500 duration-150"
                  onChange={(e) =>
                    changeQuantityInputHandler(e, product.idMeal)
                  }
                  onBlur={(e) => inputFocusOutHandler(e, product.idMeal)}
                />
                <FontAwesomeIcon
                  className="flex-1 bg-bars h-4 p-2 text-white text-sm hover:cursor-pointer hover:bg-bars/90 duration-150"
                  icon={faPlus}
                  onClick={() => increaseQuantityProductHandler(product)}
                ></FontAwesomeIcon>
                <p className="px-10 font-semibold text-black/70">
                  ${product.price * product.total}
                </p>
                <p className="px-10 font-semibold text-lg">
                  ${product.price * product.total}
                </p>
              </section>
            </li>
          ))}
        </ul>
      </section>
      <section className="w-full h-2/4 md:h-72 px-3">
        <section className="flex justify-between py-2 border-b-4 border-black/10 text-sm font-bold">
          <h1 className="uppercase">subtotal</h1>
          <p>${getTotalPrice()}</p>
        </section>
      </section>
    </article>
  );
}
export default CartTab;

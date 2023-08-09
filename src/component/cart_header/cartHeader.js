import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLocationPin,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
function CartHeader({ tabActive, onSelectTab }) {
  return (
    <section className="flex flex-wrap items-center h-11 w-full [&>section]:px-6 bg-category text-sm font-semibold ">
      <section
        className={`h-full flex items-center duration-150 hover:cursor-pointer ${
          tabActive === "cart"
            ? "bg-white"
            : "hover:bg-sky-500 hover:text-white"
        }`}
        onClick={() => onSelectTab("cart")}
      >
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        <p className="ml-2">Cart</p>
      </section>
      <section
        className={`h-full flex items-center duration-150 hover:cursor-pointer ${
          tabActive === "customer"
            ? "bg-white"
            : "hover:bg-sky-500 hover:text-white"
        }`}
        onClick={() => onSelectTab("customer")}
      >
        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        <p className="ml-2">Customer Guest</p>
      </section>
      <section
        className={`h-full flex items-center duration-150 hover:cursor-pointer ${
          tabActive === "address"
            ? "bg-white"
            : "hover:bg-sky-500 hover:text-white"
        }`}
        onClick={() => onSelectTab("address")}
      >
        <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
        <p className="ml-2">Address</p>
      </section>
    </section>
  );
}
export default CartHeader;

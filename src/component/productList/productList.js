import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import request from "../../util/request";
import Loading from "../loading/loading";
import ProductHeader from "../product_header/productHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlus,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../../layout/productLayout";
import { addTocart } from "../../redux/createAction";
function ProductList() {
  const { category } = useParams();
  const store = useContext(ProductContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const selectProductHandler = (product) => {
    store.dispatch(addTocart({ ...product, total: 1 }));
  };

  useEffect(() => {
    (async () => {
      const res = await request.get(`filter.php?c=${category}`);
      if (res.meals && res.meals.length) {
        setProducts(res.meals.map((meal) => ({ ...meal, price: 7 })));
      }
      setLoading(false);
    })();
  }, []);

  return (
    <section className="flex flex-col">
      <ProductHeader></ProductHeader>
      <article className="bg-category w-full h-[calc(100vh_-_8rem)] overflow-y-auto custom-scrollbar">
        <section className="flex -mt-1 mb-2">
          <h1 className="mx-3 mt-1 py-1 text-lime-600 font-bold text-lg">
            {category}
          </h1>
          <section className="mb-3 pr-2 flex flex-1 flex-wrap text-white bg-white [&>button]:mx-0.5 [&>button]:px-4 [&>button]:py-2 [&>button]:text-sm [&>button]:font-medium">
            <Link
              to="/category"
              className="bg-bars mx-0.5 px-4 py-2 text-sm font-medium hover:bg-sky-500 mt-1"
            >
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
              <span className="ml-1">Back</span>
            </Link>
            <button className="bg-bars hover:bg-sky-500 duration-150 mt-1">
              On sale
            </button>
            <button className="bg-bars hover:bg-sky-500 duration-150 mt-1">
              Featured
            </button>
            <button className="bg-bars hover:bg-sky-500 duration-150 mt-1">
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              <span className="ml-1">Add product</span>
            </button>
            <button className="bg-bars hover:bg-sky-500 duration-150 mt-1">
              <FontAwesomeIcon icon={faQrcode}></FontAwesomeIcon>
              <span className="ml-1">Scan product</span>
            </button>
          </section>
        </section>
        {loading && <Loading></Loading>}
        {!products.length && !loading && (
          <h1 className="text-center font-bold text-black/50">
            Not found Product!
          </h1>
        )}
        <section className="px-3 pb-5 grid gap-4 grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.idMeal}
              className="bg-white h-48 w-full block relative overflow-hidden hover:[&>img]:scale-125 hover:cursor-pointer"
              onClick={() => selectProductHandler(product)}
            >
              <img
                src={product.strMealThumb}
                className="object-cover h-full w-full duration-1000"
                alt="product thumb"
              />
              <section className="absolute bottom-0 left-0 right-0 flex justify-between text-white px-3 py-2 bg-black/50 font-semibold">
                <h1 className="truncate mr-7">{product.strMeal}</h1>
                <p>
                  <span>$</span>
                  {product.price}
                </p>
              </section>
            </div>
          ))}
        </section>
      </article>
    </section>
  );
}
export default ProductList;

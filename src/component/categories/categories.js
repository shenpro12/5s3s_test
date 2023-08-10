import { useEffect, useState } from "react";
import request from "../../util/request";
import { Link } from "react-router-dom";
import Loading from "../loading/loading";
import ProductHeader from "../product_header/productHeader";
function Categories() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await request.get("categories.php");
      setCategories(res.categories);
      setLoading(false);
    })();
  }, []);

  return (
    <section>
      <ProductHeader></ProductHeader>
      <article className="bg-category w-full h-[calc(100vh_-_8rem)] overflow-y-auto custom-scrollbar">
        <section className="py-3 mx-3 mb-2">
          <h1 className="bg-bars text-white uppercase text-sm font-bold inline-block px-2 py-3">
            all category
          </h1>
        </section>
        {loading && <Loading></Loading>}
        {!categories.length && !loading && (
          <h1 className="text-center font-bold text-black/50">Not found!</h1>
        )}
        <section className="px-3 pb-5 grid gap-4 grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link
              to={`/select/${category.strCategory}/product`}
              key={category.idCategory}
              className="bg-white h-48 w-full p-3 rounded block relative overflow-hidden hover:[&>img]:scale-125"
            >
              <img
                src={category.strCategoryThumb}
                className="object-cover h-full w-full duration-1000"
                alt="category thumb"
              />
              <section className="absolute bottom-0 left-0 right-0 top-0 text-white px-2 py-1 mt-40 bg-black/60 text-center font-semibold duration-500 hover:mt-0">
                <h1 className="truncate mb-2">{category.strCategory}</h1>
                <p className="text-sm font-normal overflow-y-auto h-36 px-1 custom-scrollbar">
                  {category.strCategoryDescription}
                </p>
              </section>
            </Link>
          ))}
        </section>
      </article>
    </section>
  );
}
export default Categories;

import { createBrowserRouter } from "react-router-dom";
import ProductLayout from "../layout/productLayout";
import Categories from "../component/categories/categories";
import ProductList from "../component/productList/productList";
const route = createBrowserRouter([
  {
    path: "/",
    element: <ProductLayout></ProductLayout>,
    children: [
      { path: "/:category/product", element: <ProductList></ProductList> },
      { path: "/category", element: <Categories></Categories> },
    ],
  },
]);

export default route;

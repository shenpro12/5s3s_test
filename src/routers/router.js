import { createBrowserRouter } from "react-router-dom";
import ProductLayout from "../layout/productLayout";
import Categories from "../component/categories/categories";
import ProductList from "../component/productList/productList";
import Errorpage from "../component/errorPage/errorPage";
const route = createBrowserRouter([
  {
    path: "/select",
    element: <ProductLayout></ProductLayout>,
    children: [
      { path: ":category/product", element: <ProductList></ProductList> },
      { path: "category", element: <Categories></Categories> },
    ],
  },
  { path: "", element: <Errorpage></Errorpage> },
]);

export default route;

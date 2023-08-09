import { RouterProvider } from "react-router-dom";
import Header from "../component//header/header";
import route from "../routers/router";
import ProductLayout from "./productLayout";

function RooutLayout() {
  return (
    <article>
      <Header></Header>
      <RouterProvider router={route}></RouterProvider>
    </article>
  );
}
export default RooutLayout;

import { Link } from "react-router-dom";

function Errorpage() {
  return (
    <div className="p-5">
      <h1 className=" font-bold">
        This project just define 2 route right now:
      </h1>
      <ol type="1" className="text-lime-500">
        <li className="list-decimal list-inside">
          <Link
            className=" hover:text-red-500 duration-150"
            to={"/select/category"}
          >
            go to Category page
          </Link>
        </li>
        <li className="list-decimal list-inside">
          <Link
            className=" hover:text-red-500 duration-150"
            to={"/select/Beef/product"}
          >
            go to product page
          </Link>
        </li>
      </ol>
    </div>
  );
}
export default Errorpage;

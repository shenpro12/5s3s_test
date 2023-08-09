import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSignInAlt,
  faShop,
  faBell,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <header className="w-full h-12 flex bg-header">
      <button className="text-white text-3xl flex justify-center items-center h-full w-12 bg-bars duration-150 hover:bg-bars/90">
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </button>
      <section className="flex-1 flex items-center justify-between px-4 text-white text-sm">
        <section className="flex items-center">
          <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
          <h2 className="px-5 font-semibold">
            Store: <span className="font-normal">Food Store</span>
          </h2>
          <h2 className=" font-semibold">
            Register: <span className="font-normal">Register 1</span>
          </h2>
        </section>
        <section className="flex items-center text-white [&>button]:px-3 [&>button]:duration-150">
          <button className="text-xl hover:text-sky-500">
            <FontAwesomeIcon
              icon={faBell}
              title="Notifications"
            ></FontAwesomeIcon>
          </button>
          <button className="text-xl hover:text-sky-500">
            <FontAwesomeIcon
              icon={faExpand}
              title="FullScreen"
            ></FontAwesomeIcon>
          </button>
          <section className="h-full flex items-center px-3">
            <section className="h-8 w-8">
              <img
                src="../../img/136-1366211_group-of-10-guys-login-user-icon-png.png"
                className="h-full w-full object-cover"
                alt="User Avatar"
              />
            </section>
            <section className="w-24 ml-3 truncate">
              <h2>Test Test</h2>
            </section>
          </section>
        </section>
      </section>
      <button className="text-white text-sm text-center h-full w-16 flex justify-center items-center flex-col bg-logout duration-150 hover:bg-logout/90">
        <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon>
        <p className="uppercase text-xs">logout</p>
      </button>
    </header>
  );
}
export default Header;

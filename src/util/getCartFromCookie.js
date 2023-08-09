function getCartFromCookie(cookieStr) {
  const cookieArr = cookieStr.split(";");
  const shoppingCart = cookieArr.filter((cookie) =>
    cookie.includes("shoppingCart")
  );
  if (!shoppingCart.length) return false;
  return JSON.parse(shoppingCart[0].replace("shoppingCart=", ""));
}
export default getCartFromCookie;

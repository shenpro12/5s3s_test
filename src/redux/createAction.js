export function addTocart(payload) {
  return {
    type: "ADDTOCART",
    payload: payload,
  };
}

export function loadCartData(payload) {
  return {
    type: "LOADCARTDATA",
    payload: payload,
  };
}

export function decreaseQuantity(payload) {
  return {
    type: "DECREASEQUANTITYOFPRODUCT",
    payload: payload,
  };
}

export function removeProduct(payload) {
  return {
    type: "REMOVEPRODUCT",
    payload: payload,
  };
}

export function changeQuantityWithNumber(payload) {
  return {
    type: "CHANGEQUATITYWITHNUMBER",
    payload: payload,
  };
}

export function clearCart() {
  return {
    type: "CLEARCART",
  };
}

const initialState = {
  productList: [],
};
function createReduxStore(reducer) {
  let state = reducer(initialState, {});
  const subscribers = [];
  return {
    getStore: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
      subscribers.forEach((subscriber) => subscriber(state));
    },
    subscribe: (subscriber) => {
      subscribers.push(subscriber);
    },
  };
}
export default createReduxStore;

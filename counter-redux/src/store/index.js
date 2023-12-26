import { createStore } from "redux";

const INITIAL_VALUE = { counter: 0 };

const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { ...store, counter: store.counter + 1 };
    return newStore;
  } else if (action.type === "DECREMENT") {
    newStore = { ...store, counter: store.counter - 1 };
    return newStore;
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "SUBTRACT") {
    return { ...store, counter: store.counter - Number(action.payload.num) };
  } else if (action.type === "PRIVACY") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //extencion

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))//compose
);

export default store;

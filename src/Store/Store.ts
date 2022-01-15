import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import CatReducer from "./Reducers/CatReducer";

const reducer = combineReducers({
  catStore: CatReducer,
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
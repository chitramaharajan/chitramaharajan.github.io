import { combineReducers, legacy_createStore } from "redux";
import Reducer from "./Reducer";

const store = legacy_createStore(combineReducers({ keytoAccess: Reducer }));

export default store;

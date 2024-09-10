import { createStore } from "redux";
import cartReducer from "./Reducer";

const Store=createStore(cartReducer)
export default Store
import { ADD_TO_CART } from "./Reducer";

export const addtocart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
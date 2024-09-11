import { ADD_TO_CART } from "./Reducer";
import { INCREAMENT } from "./Reducer";

export const addtocart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export const increamentQty = (productid) => {
    return {
        type: INCREAMENT,
        payload: productid
    }
}
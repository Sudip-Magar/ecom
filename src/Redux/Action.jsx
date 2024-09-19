import { ADD_TO_CART, DECREMENT, INCREMENT, REMOVE_FROM_CART, SEARCH_PRODUCTS } from "./Reducer";

// Add to Cart Action
export const addtocart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
};

// Increment Quantity Action
export const increment = (productId) => {
    return {
        type: INCREMENT,
        payload: productId,
    };
};

// Decrement Quantity Action
export const decrement = (productId) => {
    return {
        type: DECREMENT,
        payload: productId,
    };
};

// Remove from Cart Action
export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: productId,
    };
};

// Search Products Action (New Action)
export const searchProducts = (searchTerm) => {
    return {
        type: SEARCH_PRODUCTS,
        payload: searchTerm,
    };
};

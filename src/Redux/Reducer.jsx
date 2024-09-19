export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'; // New action type

const initialState = {
    cart: [],
    totalPrice: 0,
    products: [], // Assuming products are in the state, replace with your data structure
    filteredProducts: [], // New state for filtered products
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productCheck = state.cart.find((item) => item.id === action.payload.id);
            if (productCheck) {
                return state;
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                    totalPrice: state.totalPrice + action.payload.price
                };
            }

        case INCREMENT:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
                totalPrice: state.totalPrice + state.cart.find(item => item.id === action.payload).price
            };

        case DECREMENT:
            const product = state.cart.find((item) => item.id === action.payload);
            if (product.quantity === 1) {
                return state; // Prevent quantity from going below 1
            }
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
                totalPrice: state.totalPrice - product.price
            };

        case REMOVE_FROM_CART:
            const removedProduct = state.cart.find((item) => item.id === action.payload);
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
                totalPrice: state.totalPrice - (removedProduct.price * removedProduct.quantity)
            };

        case SEARCH_PRODUCTS: // New case for search
            return {
                ...state,
                filteredProducts: state.products.filter(product =>
                    product.title.toLowerCase().includes(action.payload.toLowerCase())
                )
            };

        default:
            return state;
    }
};

export default cartReducer;

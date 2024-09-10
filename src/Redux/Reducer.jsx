export const ADD_TO_CART = 'ADD_TO_CART'

const intitalState = {
    cart: []
}

const cartReducer = (state = intitalState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const productcheck = state.cart.find((items) => items.id === action.payload.id)
            if (productcheck) {
                return state
            }
            else {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }
        default:
            return state
    }
}
export default cartReducer